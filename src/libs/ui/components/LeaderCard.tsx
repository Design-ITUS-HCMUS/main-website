import * as React from 'react';
import Image from 'next/image';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import colors from '@/libs/ui/colors';

const CardMediaStyle = {
  borderBottom: {
    xs: '2px solid ' + colors.blue[900],
    lg: 'none',
  },
  borderRight: {
    xs: 'none',
    lg: '2px solid ' + colors.blue[900],
  },
};

interface LeaderContent {
  name: string;
  position: string;
  image: string;
  description: string;
}

export default function LeaderCard({ name, position, image, description }: LeaderContent) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const aspectRatio = isMobile ? '1 / 1' : '3 / 4';
  return (
    <Card sx={{ border: '2px solid ' + colors.blue[900], borderRadius: 0 }}>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <CardMedia sx={CardMediaStyle}>
          <Image
            src={image}
            alt={name + ' image'}
            width={0}
            height={0}
            sizes='50vw'
            style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: aspectRatio }}
          />
        </CardMedia>

        <Stack sx={{ padding: { xs: '1rem', md: '2.5rem' }, gap: { xs: '0.5rem', md: '2rem' } }}>
          <Typography variant='h6'>&quot; {description} &quot;</Typography>
          <Box>
            <Typography variant='h6'>{position}</Typography>
            <Typography variant='h6'>
              <b>{name}</b>
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}
