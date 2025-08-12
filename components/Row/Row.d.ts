import { default as React } from '../../../node_modules/react';
export type RowProps = {
    /** Horizontal alignment of children */
    align?: 'left' | 'right' | 'center';
    /** Adds spacing and layout for page sections */
    pageSection?: boolean;
    /** Reverses column order on mobile */
    reverseOnMobile?: boolean;
    /** Forces horizontal layout on mobile */
    mobileHorizontal?: boolean;
    /** Controls vertical alignment of children */
    verticalAlign?: 'center' | 'bottom' | 'top' | 'stretch';
    /** Removes top margin */
    noMargin?: boolean;
    /** Removes gap between items */
    noGap?: boolean;
    /** Children inside the row */
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
/**
 * `Row` is a flexible layout component used to arrange `Col` components horizontally.
 * It supports responsive behavior, alignment, and layout options for both mobile and desktop.
 * @example
 * ```tsx
 * <Row align="center" pageSection>
 *   <Col size={6}>Left</Col>
 *   <Col size={6}>Right</Col>
 * </Row>
 * ```
 */
export declare const Row: React.FC<RowProps>;
