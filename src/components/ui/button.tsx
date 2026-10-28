import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode, ReactElement } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-coral text-surface hover:bg-[#ff9079] shadow-[0_12px_40px_rgb(255_127_102_/_0.35)]",
  secondary:
    "border border-border bg-white/5 text-text hover:bg-white/10 hover:border-white/20",
  ghost: "text-text-muted hover:text-text hover:bg-white/5",
};

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export function Button(
  props: BaseProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">,
): ReactElement;
export function Button(
  props: BaseProps &
    Omit<ComponentPropsWithoutRef<"button">, "className"> & { href?: undefined },
): ReactElement;
export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...rest
}: BaseProps & {
  href?: string;
} & (ComponentPropsWithoutRef<typeof Link> | ComponentPropsWithoutRef<"button">)) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const { href: _ignored, ...linkProps } = rest as ComponentPropsWithoutRef<
      typeof Link
    >;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } =
    rest as ComponentPropsWithoutRef<"button">;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
