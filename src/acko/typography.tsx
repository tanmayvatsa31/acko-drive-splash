import type { ElementType, ReactNode } from "react";

/**
 * ACKO / AO Design System Typography.
 *
 * Variant names accept both the Figma AO styles (paragraph-small,
 * heading-small) and the @acko/typography package aliases (body-sm,
 * heading-sm) used across ACKO apps.
 */
export type TypographyVariant =
  | "display-lg"
  | "heading-md"
  | "heading-sm"
  | "heading-small"
  | "heading-xs"
  | "body-md"
  | "body-sm"
  | "paragraph-small"
  | "paragraph-md"
  | "paragraph-xs"
  | "label-md"
  | "label-sm"
  | "caption";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "muted"
  | "invert"
  | "brand";

export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";

export type TypographyAlign = "start" | "center";

export type TypographyProps = {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
  align?: TypographyAlign;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

const VARIANT_CLASS: Record<TypographyVariant, string> = {
  "display-lg": "acko-typography--display-lg",
  "heading-md": "acko-typography--heading-md",
  "heading-sm": "acko-typography--heading-sm",
  "heading-small": "acko-typography--heading-small",
  "heading-xs": "acko-typography--heading-xs",
  "body-md": "acko-typography--body-md",
  "body-sm": "acko-typography--body-sm",
  "paragraph-small": "acko-typography--paragraph-sm",
  "paragraph-md": "acko-typography--paragraph-md",
  "paragraph-xs": "acko-typography--paragraph-xs",
  "label-md": "acko-typography--label-md",
  "label-sm": "acko-typography--label-sm",
  caption: "acko-typography--caption",
};

export function Typography({
  variant = "paragraph-small",
  weight,
  color = "primary",
  align,
  as: Tag = "p",
  className = "",
  children,
}: TypographyProps) {
  const classes = [
    "acko-typography",
    VARIANT_CLASS[variant],
    weight ? `acko-typography--${weight}` : "",
    color ? `acko-typography--${color}` : "",
    align ? `acko-typography--${align}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
