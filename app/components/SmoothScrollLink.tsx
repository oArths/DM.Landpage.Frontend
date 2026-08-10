"use client";
import { useCallback } from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
  onClick?: () => void;
}

export default function SmoothScrollLink({ href, children, className = "", offset = 80, onClick }: SmoothScrollLinkProps) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
  }, [href, offset, onClick]);

  return <a href={href} onClick={handleClick} className={className}>{children}</a>;
}