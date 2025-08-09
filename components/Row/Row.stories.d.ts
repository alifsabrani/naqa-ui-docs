import { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from '../../../node_modules/react';
import { Row } from './Row';
declare const meta: Meta<typeof Row>;
export default meta;
type CustomArgs = {
    col1Size: number;
    col2Size: number;
    col3Size: number;
};
type StoryArgs = React.ComponentProps<typeof Row> & CustomArgs;
export declare const Primary: StoryObj<StoryArgs>;
