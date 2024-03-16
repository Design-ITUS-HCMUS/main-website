import LeaderCard from './LeaderCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LeaderCard> = {
  component: LeaderCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'LÊ VŨ NGÂN TRÚC',
    position: 'Chủ nhiệm',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    image: '/images/LVNT.jpg',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'LeaderCard',
};
