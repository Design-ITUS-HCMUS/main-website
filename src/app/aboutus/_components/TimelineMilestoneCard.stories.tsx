import TimelineMilestoneCard from './TimelineMilestoneCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TimelineMilestoneCard> = {
  title: 'Global/AboutUs/TimelineMilestoneCard',
  component: TimelineMilestoneCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    date: '25 tháng 10',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'TimelineMilestoneCard',
};
