import Image, { ImageProps } from 'next/image';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Arrow from '/public/decor/aboutus/polygon.svg';
import { colors } from '@/libs/ui';

interface StyledImageProps extends ImageProps {
  left: boolean;
}

const StyledImage = styled(Image, {
  shouldForwardProp: (props) => props !== 'left',
})<StyledImageProps>(({ left }) => ({
  transform: left ? 'rotate(0) translate(-1px, 16px)' : 'rotate(180deg) translate(-1px, -16px)',
}));

export default function TimelineContentCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const left = index % 2 === 0;

  return (
    <Box sx={{ display: 'flex', flexDirection: left ? 'row' : 'row-reverse' }}>
      <Box sx={{ padding: '16px', border: `1px solid ${colors.blue[500]}` }}>
        <Typography variant='h5' fontWeight={600} textAlign='left'>
          {title}
        </Typography>
        <Typography textAlign='left'>{description}</Typography>
      </Box>
      <StyledImage src={Arrow} left={left} alt='Arrow' />
    </Box>
  );
}
