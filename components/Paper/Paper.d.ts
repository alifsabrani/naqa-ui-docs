import { FC, ReactNode } from '../../../node_modules/react';
/**
 * Props for the Paper component.
 */
export type PaperProps = {
    /**
     * Defines the paper's style variant.
     * @default "default"
     */
    variant?: 'default' | 'flat';
    /**
     * The background color of the paper.
     * @default "white"
     */
    background?: 'primary' | 'secondary' | 'light' | 'dark' | 'white';
    /**
     * If true, the component will stretch to fill available space in a flex container.
     * @default false
     */
    stretch?: boolean;
    /**
     * If true, the component will take up the full width of its parent container.
     * @default false
     */
    fullWidth?: boolean;
    /** The content to be rendered inside the paper. */
    children: ReactNode;
    /** Optional custom class names to apply to the container. */
    className?: string;
};
/**
 * A container component that provides a styled paper-like background.
 * @example
 * tsx
 * // Default white paper card
 * <Paper>
 * This is a default Paper component.
 * </Paper>
 *
 * // Paper with a primary background and a flat variant
 * <Paper background="primary" variant="flat">
 * This paper has a primary background and a flat style.
 * </Paper>
 *
 * // Full-width paper with custom class
 * <Paper fullWidth className="my-custom-class">
 * This paper is full width with custom styling.
 * </Paper>
 */
export declare const Paper: FC<PaperProps>;
