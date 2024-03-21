import Department from './Department';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Department> = {
  title: 'Global/AboutUs/Department',
  component: Department,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'Department',
};
