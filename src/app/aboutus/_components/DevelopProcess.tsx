import React from 'react';

import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CircleIcon from '@mui/icons-material/Circle';

import TimelineContentCard from './TimelineContentCard';
import TimelineMilestoneCard from './TimelineMilestoneCard';

import { colors } from '@/libs/ui';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

const timelines = [
  {
    year: '2010',
    date: '25 tháng 10',
    title: 'NGÀY THÀNH LẬP',
    description:
      'Câu lạc bộ Học thuật Thiết kế Design ITUS được thành lập năm 2010, trực thuộc Liên chi Hội khoa Công nghệ Thông tin của Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM hiện đang được điều hành và phát triển bởi các thế hệ sinh viên trường.',
  },
  {
    year: '2017',
    date: '26 tháng 04',
    title: 'OUTR SPACE ĐẦU TIÊN',
    description:
      'Câu lạc bộ Học thuật Thiết kế Design ITUS được thành lập năm 2010, trực thuộc Liên chi Hội khoa Công nghệ Thông tin của Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM hiện đang được điều hành và phát triển bởi các thế hệ sinh viên trường.',
  },
  {
    year: '2023',
    date: '20 tháng 03',
    title: 'OUTR SPACE 7',
    description:
      'Câu lạc bộ Học thuật Thiết kế Design ITUS được thành lập năm 2010, trực thuộc Liên chi Hội khoa Công nghệ Thông tin của Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM hiện đang được điều hành và phát triển bởi các thế hệ sinh viên trường.',
  },
  {
    year: '2024',
    date: 'Hiện tại',
    title: 'OUTR SPACE 8',
    description:
      'Câu lạc bộ Học thuật Thiết kế Design ITUS được thành lập năm 2010, trực thuộc Liên chi Hội khoa Công nghệ Thông tin của Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM hiện đang được điều hành và phát triển bởi các thế hệ sinh viên trường.',
  },
];

const TimelineDotStyles = {
  padding: '0 0 0.5rem 0',
  margin: 0,
  background: 'none',
  border: 'none',
  boxShadow: 'none',
};

const Milestone = styled(Button)({
  padding: '0.5rem 2.5rem',
  '&.Mui-disabled': {
    backgroundColor: colors.blue[500],
    color: colors.neutral.white,
  },
});

const StyledTimelineItem = styled(TimelineItem)({
  '&.MuiTimelineItem-root::before': {
    padding: 0,
  },
});

const TimelineConnectorStyles = {
  bgcolor: colors.blue[100],
  height: '160px',
};

export default function DevelopProcess() {
  return (
    <Stack height='62.5rem' padding={{ xs: '0 0', md: '2.5rem 6.25rem' }} justifyContent='center' alignItems='center'>
      <Typography variant='title' mb={7.5} fontWeight={700} lineHeight='120%'>
        QUÁ TRÌNH PHÁT TRIỂN
      </Typography>

      <Timeline position='alternate' sx={{ width: '100%' }}>
        <Grid container>
          {timelines.map((timeline, index) => (
            <StyledTimelineItem key={index}>
              <Grid item xs={12} md={5}>
                <TimelineOppositeContent sx={{ padding: 0 }}>
                  <TimelineContentCard title={timeline.title} description={timeline.description} index={index} />
                </TimelineOppositeContent>
              </Grid>

              <Grid item xs={12} md={2}>
                <TimelineSeparator>
                  <Stack width='100%' flexDirection='row' justifyContent='center' alignItems='center'>
                    <TimelineDot sx={TimelineDotStyles}>
                      {timeline.year === '2024' ? (
                        <Stack alignItems='center'>
                          <TimelineConnector sx={{ bgcolor: colors.blue[100], height: '20px' }} />
                          <CircleIcon sx={{ marginTop: '-3px', color: colors.blue[500] }} />
                        </Stack>
                      ) : (
                        <Milestone disabled>
                          <Typography variant='h6' fontWeight={700} lineHeight='160%'>
                            {timeline.year}
                          </Typography>
                        </Milestone>
                      )}
                    </TimelineDot>
                  </Stack>
                  {timeline.year !== '2024' ? <TimelineConnector sx={TimelineConnectorStyles} /> : null}
                </TimelineSeparator>
              </Grid>

              <Grid item xs={12} md={5}>
                <TimelineContent sx={{ padding: 0 }}>
                  <TimelineMilestoneCard date={timeline.date} index={index} />
                </TimelineContent>
              </Grid>
            </StyledTimelineItem>
          ))}
        </Grid>
      </Timeline>
    </Stack>
  );
}
