import { default as React } from '../../../node_modules/react';
export type ColProps = {
    /** Number of columns to span on desktop */
    size: number;
    /** Optional number of columns to span on mobile */
    mobile?: number;
    /** Component children */
    children: React.ReactNode;
    /** Hide column on mobile */
    desktopOnly?: boolean;
    /** Hide column on desktop */
    mobileOnly?: boolean;
    /** Remove default margin */
    noMargin?: boolean;
    /** Adjust the width to ignore the gaps specified by parent Row */
    ignoreGaps?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
/**
 * `Col` is a responsive grid column component.
 * Use it to control column widths across desktop and mobile breakpoints.
 * @example
 * ```tsx
 * <Col size={6} mobile={12}>Hello</Col>
 * ```
 */
export declare const Col: React.FC<ColProps>;
