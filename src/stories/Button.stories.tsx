import Button, { ButtonProps } from '@mui/material/Button';

import type { Meta, StoryObj } from '@storybook/react';
export const MUIButton = ({ ...rest }: ButtonProps) => <Button {...rest} />;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: MUIButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  // Add decorators to the component. More info: https://storybook.js.org/docs/react/writing-stories/decorators
  // decorators: [
  //   (Story: React.ComponentType) => (
  //     <div style={{ margin: '3em' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
} satisfies Meta<typeof MUIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Color Primary',
  args: {
    color: 'primary',
    children: 'Primary',
  },
};

export const Text: Story = {
  name: 'Variant Primary',
  args: {
    variant: 'text',
    children: 'Text',
  },
};
