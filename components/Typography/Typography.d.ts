import { default as React } from '../../../node_modules/react';
/**
 * Defines the available typography variants.
 */
export type TypographyVariant = 'display' | 'h0' | 'h1' | 'h2' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'icon-xl' | 'icon-lg' | 'icon-md' | 'icon-sm';
/**
 * Defines the available font weight variants.
 */
export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';
/**
 * Defines all available color variants, including text hierarchy, brand, and status colors.
 */
export type Color = 'textPrimary' | 'textSecondary' | 'muted' | 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success' | 'light' | 'dark';
/**
 * Defines the available font families based on the theme.
 */
export type FontType = 'sans' | 'serif' | 'display' | 'mono';
/**
 * Defines the available text align.
 */
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
/**
 * Props for the Typography component, allowing for a dynamic 'as' prop.
 * @template T - The type of the component being rendered, which can be an HTML element tag string or a React component type.
 */
export type TypographyProps = {
    /** The predefined typography style to apply. This also determines the default semantic HTML tag. */
    variant: TypographyVariant;
    /** The content to be rendered inside the component. */
    children: React.ReactNode;
    /** An optional prop to override the default HTML tag. For example, to use an h3 tag for an h1-sized heading. */
    as?: keyof React.JSX.IntrinsicElements;
    /** An optional CSS class name to be merged with the component's default class name. */
    className?: string;
    /** An optional prop to override the default font weight. */
    fontWeight?: FontWeight;
    /** A single prop to set the text color, including brand, status, and hierarchy colors. */
    color?: Color;
    /** An optional prop to set the font family. */
    fontType?: FontType;
    /**
     * An optional prop to set text alignment.
     * Supports common CSS `text-align` values such as `"left"`, `"center"`, `"right"`, and `"justify"`.
     */
    align?: TextAlign;
} & React.HTMLAttributes<HTMLElement>;
/**
 * A reusable Typography component that enforces consistent text styling.
 * This component is a generic function that correctly infers the props of the `as` element.
 * @example
 * ```tsx
 * <Typography variant="display" color="primary">Alif Sabrani</Typography>
 * ```
 */
export declare const Typography: React.FC<TypographyProps>;
