import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className = "",
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    "acko-btn",
    variant === "secondary" ? "acko-btn--secondary" : "",
    size === "lg" ? "acko-btn--lg" : "",
    fullWidth ? "acko-btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
