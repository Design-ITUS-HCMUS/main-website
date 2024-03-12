import { AboutUs } from './AboutUs';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AboutUs> = {
  title: 'Global/Homepage/AboutUs',
  component: AboutUs,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'AboutUs',
};
