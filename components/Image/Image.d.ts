import { default as React } from '../../../node_modules/react';
/**
 * Props for the Image component.
 */
export type ImageProps = {
    /** Image source URL */
    src: string;
    /** Alternative text for the image */
    alt: string;
    /** Optional className passed to the container */
    className?: string;
    /** Optional className for the image element */
    imageClassName?: string;
    /**
     * How the image should fit within its container:
     * - 'contain': Image fits inside container, may show empty space
     * - 'cover': Image fills container completely, may crop parts of image
     * - 'none': Image displays at natural size (default behavior)
     */
    fit?: 'contain' | 'cover' | 'none';
    /** Loading animation variant */
    loadingAnimationVariant?: 'spinner' | 'skeleton' | 'progressBar';
    /** Called when image is fully loaded */
    onLoad?: (_event: React.SyntheticEvent<HTMLImageElement>) => void;
    /**
     * Optional custom image component to render instead of the default `<img>` tag.
     * This is useful for frameworks like Next.js that provide optimized image components.
     * The custom component will receive `src`, `alt`, `onLoad`, and `className` props.
     */
    CustomImageComponent?: React.ComponentType<any>;
};
/**
 * A responsive Image component with support for different fit modes, custom classes, and a custom image component.
 */
export declare const Image: React.FC<ImageProps>;
