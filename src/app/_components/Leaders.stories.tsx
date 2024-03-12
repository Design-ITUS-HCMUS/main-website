import { Leaders } from './Leaders';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Leaders> = {
  title: 'Global/Homepage/Leaders',
  component: Leaders,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'Leaders',
};
