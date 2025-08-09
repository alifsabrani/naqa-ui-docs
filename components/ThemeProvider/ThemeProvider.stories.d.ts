import { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from './ThemeProvider';
declare const meta: Meta<typeof ThemeProvider>;
export default meta;
type Story = StoryObj<typeof ThemeProvider>;
export declare const Default: Story;
export declare const CustomTheme: Story;
