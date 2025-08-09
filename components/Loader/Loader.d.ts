import { default as React } from '../../../node_modules/react';
export type LoaderProps = {
    /** Optional className for custom styling */
    className?: string;
    /** The type of loader to display */
    variant?: 'spinner' | 'skeleton' | 'progressBar';
    /** Optional color for the loader */
    color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success' | 'dark' | 'light';
    /** Optional inline styles for the skeleton variant */
    style?: React.CSSProperties;
};
/**
 * Loader component to display loading states.
 * Supports spinner, skeleton, and progress bar variants.
 * @example
 * ```tsx
 * <Loader variant="spinner" color="primary" />
 * <Loader variant="skeleton" />
 * <Loader variant="progressBar" color="secondary" />
 * ```
 */
export declare const Loader: React.FC<LoaderProps>;
