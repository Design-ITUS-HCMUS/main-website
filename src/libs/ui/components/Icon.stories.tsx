import { Icon } from './Icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'System Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  args: {
    image: '/decor/codeslash.svg',
    name: 'Code slash',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'extraLarge'],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: 'Icon',
};
