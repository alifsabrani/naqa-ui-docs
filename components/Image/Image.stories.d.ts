import { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from './Image';
declare const meta: Meta<typeof Image>;
export default meta;
type Story = StoryObj<typeof Image>;
export declare const Default: Story;
export declare const WithFitContain: Story;
export declare const WithFitCover: Story;
