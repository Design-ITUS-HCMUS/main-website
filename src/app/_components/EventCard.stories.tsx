import { EventCard } from './EventCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventCard> = {
  title: 'Global/EventCard',
  component: EventCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'TÊN SỰ KIỆN',
    link: '/events/1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    image: '/images/eventimage.jpg',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'EventCard',
};
