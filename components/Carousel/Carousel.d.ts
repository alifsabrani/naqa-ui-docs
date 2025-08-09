import { default as React } from '../../../node_modules/react';
type Props = {
    /** Array of image URLs to be displayed in the carousel */
    images: Array<string>;
    /** Optional index to initially display */
    selectedIndex?: number;
    /** Function to handle closing the carousel */
    /**
     * Optional custom image component to render instead of the default `<img>` tag.
     * This is useful for frameworks like Next.js that provide optimized image components.
     * The custom component will receive `src`, `alt`, `onLoad`, and `className` props.
     */
    CustomImageComponent?: React.ComponentType<any>;
    onClose: () => void;
};
/**
 * Carousel component to display a gallery of images with navigation and close support.
 * @example
 * ```tsx
 * <Carousel images={['https://placehold.co/600x400', 'https://placehold.co/1000x600']} onClose={() => {}} />
 * ```
 */
export declare const Carousel: React.FC<Props>;
export default Carousel;
