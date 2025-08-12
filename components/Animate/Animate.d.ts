import { SpringConfig, SpringUpdate } from '@react-spring/web';
import { default as React } from '../../../node_modules/react';
import { AnimationPreset } from './Animate.presets';
/**
 * Custom animation configuration
 */
export type CustomAnimation = {
    /** Starting styles for the animation */
    from: SpringUpdate['from'];
    /** Ending styles for the animation */
    to: SpringUpdate['to'];
    /** Optional spring configuration */
    config?: SpringConfig;
};
/**
 * Props for the Animate component
 */
export type AnimateProps = {
    /** Unique identifier for this animation instance - required for context control */
    id: string;
    /** Child content to be animated */
    children: React.ReactNode;
    /** Built-in animation preset to use */
    preset?: AnimationPreset;
    /** Custom animation configuration - overrides preset if provided */
    custom?: CustomAnimation;
    /** Whether animation should start automatically when component mounts */
    autoStart?: boolean;
    /** Delay before animation starts (in milliseconds) */
    delay?: number;
    /** Duration of the animation (in milliseconds) - overrides spring config */
    duration?: number;
    /** Number of times to repeat the animation (0 = no repeat, -1 = infinite) */
    repeat?: number;
    /** Custom spring configuration - overrides preset config */
    config?: SpringConfig;
    /** Whether animation should be paused initially */
    paused?: boolean;
    /**
     * Wether to instantly jumps to the final state of the animation
     */
    skip?: boolean;
    /** Additional CSS classes to apply to the animated element */
    className?: string;
    /** Additional inline styles to apply to the animated element */
    style?: React.CSSProperties;
    /** HTML element type to render as animated element */
    as?: React.ElementType;
};
/**
 * Animate component using react-spring
 */
export declare const Animate: React.FC<AnimateProps>;
