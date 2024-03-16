import Quote from './Quote';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Quote> = {
  title: 'Global/AboutUs/Quote',
  component: Quote,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'Quote',
};
