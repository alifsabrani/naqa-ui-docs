import { CustomAnimation } from './Animate';
/**
 * Built-in animation presets
 */
export type AnimationPreset = 'fadeIn' | 'fadeOut' | 'fadeInLeft' | 'fadeInRight' | 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown' | 'scaleIn' | 'scaleOut' | 'bounceIn' | 'bounceOut' | 'rotateIn' | 'rotateOut' | 'flipInX' | 'flipInY' | 'zoomIn' | 'zoomOut' | 'zoomInUp' | 'zoomInDown' | 'zoomInLeft' | 'zoomInRight' | 'zoomOutUp' | 'zoomOutDown' | 'zoomOutLeft' | 'zoomOutRight' | 'lightSpeedInLeft' | 'lightSpeedInRight' | 'jackInTheBox' | 'rubberBand';
export declare const presetAnimations: Record<AnimationPreset, CustomAnimation>;
