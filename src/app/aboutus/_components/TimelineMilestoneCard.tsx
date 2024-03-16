import Image, { ImageProps } from 'next/image';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Arrow from '/public/decor/aboutus/polygon.svg';
import { colors } from '@/libs/ui';

const StyledImage = styled(Image)<ImageProps & { isRight: boolean }>(({ isRight }) => ({
  transform: isRight ? 'rotate(0) translate(-1px, 16px)' : 'rotate(180deg) translate(-1px, -16px)',
}));

export default function TimelineMilestoneCard({ date, index }: { date: string; index: number }) {
  const isRight = index % 2 === 1;
  return (
    <Box sx={{ display: 'flex', flexDirection: isRight ? 'row' : 'row-reverse', justifyContent: 'flex-end' }}>
      <Box sx={{ padding: '8px 16px', border: `1px solid ${colors.blue[500]}` }}>
        <Typography variant='h6'>{date}</Typography>
      </Box>
      <StyledImage src={Arrow} isRight={isRight} alt='Arrow' />
    </Box>
  );
}
