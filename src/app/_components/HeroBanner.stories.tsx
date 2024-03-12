import { HeroBanner } from './HeroBanner';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HeroBanner> = {
  title: 'Global/Homepage/HeroBanner',
  component: HeroBanner,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'HeroBanner',
};
