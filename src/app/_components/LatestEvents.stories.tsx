import { LatestEvents } from './LatestEvents';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LatestEvents> = {
  title: 'Global/Homepage/LatestEvents',
  component: LatestEvents,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'LatestEvents',
};
