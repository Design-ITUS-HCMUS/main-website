import TimelineContentCard from './TimelineContentCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TimelineContentCard> = {
  title: 'Global/AboutUs/TimelineContentCard',
  component: TimelineContentCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'NGÀY THÀNH LẬP',
    description:
      'Câu lạc bộ Học thuật Thiết kế Design ITUS được thành lập năm 2010, trực thuộc Liên chi Hội khoa Công nghệ Thông tin của Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM hiện đang được điều hành và phát triển bởi các thế hệ sinh viên trường.',
  },
};

export default meta;
export const Default: StoryObj = {
  name: 'TimelineContentCard',
};
