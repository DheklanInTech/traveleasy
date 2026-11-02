import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "./icons";

type Variant = "primary" | "light" | "subtle" | "glass";
type Size = "md" | "lg";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Full width, label left and arrow right (used inside cards). */
  block?: boolean;
  /** Up-right arrow after the label. On by default. */
  arrow?: boolean;
  /** Optional leading icon, e.g. a brand glyph. */
  leadingIcon?: ReactNode;
  external?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-gold text-navy hover:bg-navy hover:text-white",
  light: "bg-white text-navy hover:bg-gold",
  subtle: "bg-fill-subtle text-navy hover:bg-hairline",
  glass: "glass-light text-white hover:bg-white/30",
};

const sizeClasses: Record<Size, string> = {
  md: "h-12 px-6",
  lg: "h-13 px-[26px]",
};

/** The one control shape in the system: a pill with a verb-first label. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  block = false,
  arrow = true,
  leadingIcon,
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = [
    "inline-flex items-center gap-2.5 rounded-full text-label font-medium tracking-[-0.01em] whitespace-nowrap transition-colors duration-200",
    variantClasses[variant],
    sizeClasses[size],
    block ? "flex w-full justify-between" : "",
    className,
  ].join(" ");

  const content = (
    <>
      {leadingIcon}
      {children}
      {arrow && <ArrowUpRightIcon />}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
