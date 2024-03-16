import DevelopProcess from './DevelopProcess';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DevelopProcess> = {
  title: 'Global/AboutUs/DevelopProcess',
  component: DevelopProcess,
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: [
        {
          name: 'xl',
          styles: {
            width: '1920px',
            height: '100%',
          },
        },
      ],
      defaultViewport: 'xl',
    },
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'DevelopProcess',
};
