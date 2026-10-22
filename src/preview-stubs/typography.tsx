import type { ElementType, ReactNode } from "react";

type TypographyProps = {
  variant?: string;
  weight?: string;
  color?: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Typography({
  variant = "body-md",
  weight,
  color,
  as: Tag = "p",
  className = "",
  children,
}: TypographyProps) {
  const classes = [
    "acko-typography",
    variant === "label-sm" ? "acko-typography--label-sm" : "",
    variant === "body-sm" ? "acko-typography--body-sm" : "",
    variant === "heading-sm" ? "acko-typography--heading-sm" : "",
    weight === "medium" ? "acko-typography--weight-medium" : "",
    weight === "semibold" ? "acko-typography--weight-semibold" : "",
    color === "invert" ? "acko-typography--invert" : "",
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
