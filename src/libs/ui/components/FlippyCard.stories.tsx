import FlippyCard from './FlippyCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FlippyCard> = {
  component: FlippyCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    frontImgUrl: '/decor/aboutus/graphic.svg',
    backImgUrl: '/images/aboutus/department/Graphic.png',
    imgName: 'Graphic',
    borderRadius: '30% 0',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'FlippyCard',
};
