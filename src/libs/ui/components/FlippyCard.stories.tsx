import { colors } from '..';
import FlippyCard from './FlippyCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FlippyCard> = {
  component: FlippyCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    department: 'Graphic',
    backImgUrl: '/images/aboutus/department/Graphic.png',
    borderRadius: '0 30%',
    imgBorderRadius: '30% 0',
    color: colors.neutral[500],
    bgColor: '#03C9A5',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'FlippyCard',
};
