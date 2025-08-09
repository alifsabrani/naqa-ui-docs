import { default as React } from '../../../node_modules/react';
export type AvatarProps = {
    /** The source URL of the avatar image */
    src: string;
};
/**
 * Avatar component to display a user's profile picture.
 * @example
 * ```tsx
 * <Avatar src="https://example.com/avatar.jpg" />
 * ```
 */
export declare const Avatar: React.FC<AvatarProps>;
