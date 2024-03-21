import FAQ from './FAQ';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FAQ> = {
  title: 'Global/AboutUs/FAQ',
  component: FAQ,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'FAQ',
};
