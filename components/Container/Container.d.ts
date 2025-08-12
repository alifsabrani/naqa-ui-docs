import { default as React } from '../../../node_modules/react';
/**
 * Props for the Container component.
 */
export type ContainerProps = {
    /** Content to be rendered inside the container */
    children: React.ReactNode;
    /** Whether the container should center its content vertically and horizontally */
    pageCenter?: boolean;
    /** Whether the container should take full width */
    fullWidth?: boolean;
    /** Whether the container should include padding */
    withPadding?: boolean;
    /** Whether the container should adjust its content to fit the page layout */
    fitContentToPage?: boolean;
    /** Background color option */
    background?: 'primary' | 'light' | 'dark';
    /** Whether to display the container only on desktop viewports */
    desktopOnly?: boolean;
    /** Whether to display the container only on mobile viewports */
    mobileOnly?: boolean;
    /** Whether the container should take up the full screen */
    fullscreen?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
/**
 * A layout wrapper component for organizing content with responsive and layout-based options.
 */
export declare const Container: React.FC<ContainerProps>;
