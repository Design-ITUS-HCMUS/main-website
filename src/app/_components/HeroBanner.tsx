'use client';

// React and Next
import Image from 'next/image';

import { styled, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// Material UI Components
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const StyledHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  lineHeight: '120%',
}));

export function HeroBanner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ padding: { xs: '2.5rem 0 0 0', sm: '3.75rem 0' } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <StyledHeading variant='title'>THE STANDARD LOREM IPSUM PASSAGE, USED SINCE THE 1500S</StyledHeading>

          <Typography variant='body2' py={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }} width='100%' sx={{ gap: { xs: 2, md: 4 } }}>
            <Stack direction='row' alignItems='center' gap={1.25}>
              <Image
                src='/decor/codeslash.svg'
                width='0'
                height='30'
                style={{ width: 'auto', backgroundColor: 'transparent' }}
                alt='Code slash'
              />
              <Typography variant='subtitle1' fontWeight='600' color='primary.main'>
                Creativity is a drug
              </Typography>
            </Stack>
            <Button variant='contained'>Đi tới sự kiện</Button>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sm={7}
          sx={{ justifyContent: 'flex-end', position: 'relative', top: { xs: '-6rem', sm: 0 } }}>
          <Image
            src={isMobile ? '/decor/smallgeometrics.svg' : '/decor/geometrics.svg'}
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
