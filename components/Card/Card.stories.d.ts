import { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>;
/**
 * Default card view.
 */
export declare const Default: Story;
