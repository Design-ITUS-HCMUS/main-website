import Partners from './Partners';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Partners> = {
  title: 'Global/Homepage/Partners',
  component: Partners,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'Partners',
};
