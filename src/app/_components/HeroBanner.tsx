'use client';

import Image from 'next/image';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Icon } from '@/libs/ui/components/Icon';

const ContainerStyles = {
  height: {
    xs: '37.5rem',
    md: '43.75rem',
  },
  margin: {
    xs: '0 1.125rem',
    md: '0 7.5rem',
  },
  display: 'flex',
  alignItems: 'center',
};

export default function HeroBanner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={ContainerStyles}>
      <Grid container>
        <Grid item xs={12} sm={5}>
          <Typography variant='title' fontWeight={700} lineHeight='120%'>
            THE STANDARD LOREM IPSUM PASSAGE, USED SINCE THE 1500S
          </Typography>

          <Typography py={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }} width='100%' sx={{ gap: { xs: 2, md: 4 } }}>
            <Stack direction='row' alignItems='center' gap={1.25}>
              <Icon image='/decor/home/codeslash.svg' name='Code slash' size='small' />

              <Typography variant='subtitle1' fontWeight='600' color='primary.main'>
                Creativity is a drug
              </Typography>
            </Stack>
            <Button>Đi tới sự kiện</Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={7} sx={{ marginTop: { xs: '-5rem', md: '0' } }}>
          <Image
            src={isMobile ? '/decor/home/xs_geometrics.svg' : '/decor/home/md_geometrics.svg'}
            width='0'
            height={isMobile ? '350' : '550'}
            style={{ width: '100%', height: '100%' }}
            alt='Hero banner'
          />
        </Grid>
      </Grid>
    </Box>
  );
}
