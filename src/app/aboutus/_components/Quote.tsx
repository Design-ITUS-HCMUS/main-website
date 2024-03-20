import Image from 'next/image';

import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const TextContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: { xs: 'center', md: 'flex-start' },
  textAlign: { xs: 'center', md: 'left' },
};

export default function Quote() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack height='28.125rem' padding='3.75rem 7.5rem' alignItems='center'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          {!isMobile ? (
            <Image
              src='/decor/aboutus/quote.svg'
              width='0'
              height='300'
              style={{ width: 'auto' }}
              alt='Design Itus logo'
            />
          ) : (
            <Image
              src='/decor/aboutus/quote.svg'
              width='0'
              height='160'
              style={{ width: 'auto' }}
              alt='Design Itus logo'
            />
          )}
        </Grid>

        <Grid item xs={12} md={5} sx={TextContainerStyle}>
          <Typography variant='title' pt={2}>
            THINKING OUTSIDE THE BOX
          </Typography>

          <Typography py={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore. <br />
            Cras tincidunt lobortis feugiat vivamus at. Eu nisl nunc mi ipsum faucibus vitae aliquet. <br />
            Urna nunc id cursus metus aliquam eleifend. Feugiat in fermentum posuere urna nec tincidunt praesent.
          </Typography>

          <Button endIcon={<ArrowRightIcon />}>Tìm hiểu thêm</Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
