"use client";
import SmoothScrollLink from "../SmoothScrollLink";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  className?: string;
}

const base =
  "flex items-center justify-center font-DMSans text-base bg-secondary-purple-heart rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-heart-500";

export default function ButtonPrimary({
  children,
  href,
  type = "button",
  className = "",
}: ButtonPrimaryProps) {
  if (href) {
    return (
      <SmoothScrollLink href={href} className={`${base} cursor-pointer ${className}`}>
        {children}
      </SmoothScrollLink>
    );
  }
  return (
    <button type={type} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
