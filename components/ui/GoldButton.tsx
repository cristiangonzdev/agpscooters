import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline";
type Size = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type Props = ButtonProps | LinkProps;

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-medium tracking-wide transition-all duration-300 ease-out will-change-transform focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  md: "min-h-[44px] px-6 text-sm",
  lg: "min-h-[52px] px-8 text-base",
};

const variants: Record<Variant, string> = {
  solid:
    "bg-gradient-to-br from-[#E8C87C] via-[#D4AF37] to-[#B8892E] text-[#0A0A0B] shadow-[0_10px_30px_-10px_rgba(212,175,55,0.55)] hover:shadow-[0_18px_38px_-10px_rgba(232,200,124,0.7)] hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-[#D4AF37]/50 bg-transparent text-[#E8C87C] hover:border-[#E8C87C] hover:bg-[#D4AF37]/5 hover:-translate-y-0.5 active:translate-y-0",
};

export function GoldButton(props: Props) {
  const { children, variant = "solid", size = "md", className = "", iconLeft, iconRight } = props;
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, className: _c, iconLeft: _il, iconRight: _ir, children: _ch, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {iconLeft}
        <span>{children}</span>
        {iconRight}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, className: _c, iconLeft: _il, iconRight: _ir, children: _ch, ...rest } =
    props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
