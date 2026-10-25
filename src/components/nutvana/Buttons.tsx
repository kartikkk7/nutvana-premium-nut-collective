import type { ReactNode } from "react";

type BtnProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

/** Pill-shaped gold gradient primary button. */
export function GoldButton({ children, href, onClick, className = "", type = "button", ariaLabel }: BtnProps) {
  const cls =
    `inline-flex items-center justify-center gap-2 rounded-full gold-grad px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-forest-deep ` +
    `shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-luxe focus-visible:outline-2 ` +
    className;
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        onClick={onClick}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

/** Outlined secondary button; set tone to match light or dark backgrounds. */
export function OutlineButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  tone = "dark",
  ariaLabel,
}: BtnProps & { tone?: "dark" | "light" }) {
  const toneCls =
    tone === "light"
      ? "border-gold text-gold-light hover:bg-gold/20"
      : "border-forest text-forest hover:bg-forest/5";
  const cls =
    `inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-bold uppercase tracking-widest ` +
    `transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 ${toneCls} ${className}`;
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        onClick={onClick}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
