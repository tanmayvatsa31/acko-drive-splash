import type { ElementType, ReactNode } from "react";

type TypographyProps = {
  variant?: string;
  weight?: string;
  color?: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

const VARIANT_CLASS: Record<string, string> = {
  "heading-md": "acko-typography--heading-md",
  "heading-sm": "acko-typography--heading-sm",
  "heading-xs": "acko-typography--heading-xs",
  "heading-xxs": "acko-typography--heading-xxs",
  "label-md": "acko-typography--label-md",
  "label-sm": "acko-typography--label-sm",
  "label-xs": "acko-typography--label-xs",
  "label-xxs": "acko-typography--label-xxs",
  "body-sm": "acko-typography--body-sm",
  "body-xs": "acko-typography--body-xs",
};

const WEIGHT_CLASS: Record<string, string> = {
  regular: "acko-typography--weight-regular",
  medium: "acko-typography--weight-medium",
  semibold: "acko-typography--weight-semibold",
};

const COLOR_CLASS: Record<string, string> = {
  invert: "acko-typography--invert",
  primary: "acko-typography--primary",
  secondary: "acko-typography--secondary",
  tertiary: "acko-typography--tertiary",
  disabled: "acko-typography--disabled",
  success: "acko-typography--success",
  hyperlink: "acko-typography--hyperlink",
  purple: "acko-typography--purple",
  maroon: "acko-typography--maroon",
  danger: "acko-typography--danger",
  navy: "acko-typography--navy",
};

export function Typography({
  variant = "body-sm",
  weight,
  color = "primary",
  as: Tag = "p",
  className = "",
  children,
}: TypographyProps) {
  const classes = [
    "acko-typography",
    VARIANT_CLASS[variant] ?? "",
    weight ? WEIGHT_CLASS[weight] ?? "" : "",
    COLOR_CLASS[color] ?? "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
