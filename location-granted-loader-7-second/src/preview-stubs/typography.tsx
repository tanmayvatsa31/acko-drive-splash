import type { ElementType, ReactNode } from "react";

type TypographyProps = {
  variant?: "body-sm" | "heading-sm" | string;
  weight?: "regular" | "semibold" | string;
  color?: "primary" | "secondary" | "tertiary" | "muted" | string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Typography({
  variant = "body-sm",
  weight,
  color,
  as: Tag = "p",
  className = "",
  children,
}: TypographyProps) {
  const classes = [
    "acko-typography",
    variant === "body-sm" ? "acko-typography--body-sm" : "",
    variant === "heading-sm" ? "acko-typography--heading-sm" : "",
    weight === "regular" ? "acko-typography--weight-regular" : "",
    weight === "semibold" ? "acko-typography--weight-semibold" : "",
    color === "primary" ? "acko-typography--primary" : "",
    color === "secondary" ? "acko-typography--secondary" : "",
    color === "tertiary" ? "acko-typography--tertiary" : "",
    color === "muted" ? "acko-typography--muted" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
