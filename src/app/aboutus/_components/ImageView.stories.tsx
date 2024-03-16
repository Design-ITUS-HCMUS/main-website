import ImageView from './ImageView';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ImageView> = {
  title: 'Global/AboutUs/ImageView',
  component: ImageView,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'ImageView',
};
