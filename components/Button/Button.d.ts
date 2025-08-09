import { default as React } from '../../../node_modules/react';
/**
 * Props for the Button component.
 * We're merging the props for a native button and a native anchor tag,
 * and adding a new `as` prop to support custom components like Next.js's Link.
 */
export type ButtonProps = {
    /** Content to be rendered inside the button */
    children: React.ReactNode;
    /** Button style variant */
    variant?: 'fill' | 'transparent';
    /** Button size */
    size?: 's' | 'm' | 'l' | 'xl';
    /** Button color scheme */
    color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success' | 'light' | 'dark';
    /** Whether the button contains only an icon */
    icon?: boolean;
    /** Whether the button has rounded corners */
    rounded?: boolean;
    /** Whether the button has a shadow effect */
    withShadow?: boolean;
    /**
     * URL to navigate to when the button is clicked.
     * This is used when rendering the button as an anchor tag.
     */
    href?: string;
    /**
     * Renders the button as a different component or HTML element.
     * Useful for integrating with routing libraries like Next.js's `Link`.
     */
    as?: React.ElementType;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;
/**
 * Button component for user interactions.
 * Supports various styles, sizes, and colors. It is now polymorphic,
 * rendering as a button, an anchor, or a custom component.
 * @example
 * ```tsx
 * // Renders a native button
 * <Button onClick={() => {}}>Click Me</Button>
 *
 * // Renders a native anchor tag
 * <Button href="/about">About Us</Button>
 *
 * // Renders a custom component (e.g., Next.js Link)
 * <Button as={Link} href="/dashboard">Dashboard</Button>
 * ```
 */
export declare const Button: React.FC<ButtonProps>;
