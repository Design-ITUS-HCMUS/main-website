// React and Next
import * as React from 'react';
import Image from 'next/image';

// Material UI Components
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Local Imports
import colors from '@/libs/ui/colors';

const CardMediaStyle = {
  width: '100%',
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

export function LeaderCard({ name, position, image, description }: LeaderContent) {
  return (
    <Card sx={{ border: '2px solid ' + colors.blue[900], borderRadius: 0 }}>
      <Stack direction={{ xs: 'column', lg: 'row' }}>
        <CardMedia sx={CardMediaStyle}>
          <Image
            width={287}
            height={339}
            style={{ width: '100%', objectFit: 'cover' }}
            src={image}
            alt='Leader image'
          />
        </CardMedia>

        <Stack sx={{ padding: { xs: '1rem', lg: '2.5rem' }, gap: { xs: '0.5rem', lg: '2rem' } }}>
          <Typography variant='h6' fontSize={{ xs: '1rem', lg: '1.25rem' }}>
            {description}
          </Typography>
          <Box>
            <Typography variant='h6' fontSize={{ xs: '1rem', lg: '1.25rem' }}>
              {position}
            </Typography>
            <Typography variant='h6' fontSize={{ xs: '1rem', lg: '1.25rem' }}>
              <b>{name}</b>
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}
