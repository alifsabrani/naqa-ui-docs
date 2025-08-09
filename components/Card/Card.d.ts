import { default as React } from '../../../node_modules/react';
export type CardProps = {
    /** Optional title for the card */
    title?: string;
    /** Optional subtitle for the card */
    subtitle?: string;
    /** Whether to display the image section */
    showImage?: boolean;
    /** Array of image URLs to display in the carousel */
    images: string[];
    /**
     * Optional custom image component to render instead of the default `<img>` tag.
     * This is useful for frameworks like Next.js that provide optimized image components.
     * The custom component will receive `src`, `alt`, `onLoad`, and `className` props.
     */
    CustomImageComponent?: React.ComponentType<any>;
    /** Content inside the card body */
    children: React.ReactNode;
};
/**
 * Card component to display content with optional title and image.
 * Clicking the image opens a carousel if `showImage` is true.
 * @example
 * ```tsx
 * <Card title="My Card" showImage images={['https://placehold.co/600x400']}>
 *   <p>This is the card content</p>
 * </Card>
 * ```
 */
export declare const Card: React.FC<CardProps>;
