"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
  onClick?: () => void;
}

export default function SmoothScrollLink({ href, children, className = "", offset = 80, onClick }: SmoothScrollLinkProps) {
  const router = useRouter();

  const scrollToTarget = useCallback((hash: string) => {
    const target = document.getElementById(hash);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  }, [offset]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    const url = new URL(href, window.location.origin);
    if (!url.hash) return;

    e.preventDefault();
    const hash = url.hash.slice(1);

    if (url.pathname === window.location.pathname) {
      scrollToTarget(hash);
    } else {
      router.push(href, { scroll: false });
      const start = performance.now();
      const tryScroll = () => {
        if (document.getElementById(hash)) {
          scrollToTarget(hash);
        } else if (performance.now() - start < 3000) {
          requestAnimationFrame(tryScroll);
        }
      };
      requestAnimationFrame(tryScroll);
    }
  }, [href, onClick, router, scrollToTarget]);

  return <a href={href} onClick={handleClick} className={className}>{children}</a>;
}
