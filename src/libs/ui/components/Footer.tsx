import Image from 'next/image';
import Link from 'next/link';

import { styled, useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import FacebookRounded from '@mui/icons-material/FacebookRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

import { colors } from '..';
import { Logo } from '.';

const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  color: colors.neutral.white,
  backgroundColor: colors.blue[800],
});

const DividerContainer = styled('div')(({ theme }) => ({
  padding: '0 7.5rem',
  [theme.breakpoints.down('md')]: {
    padding: '0 1.875rem',
  },
}));

function smoothScroll(event: React.MouseEvent<HTMLElement>) {
  // Prevent href from taking effect
  event.preventDefault();

  const yOffset = -6 * 16; // 6rem
  const element = document.getElementById(event.currentTarget.getAttribute('href') || '');
  if (!element) return;
  const y = (element?.getBoundingClientRect().top || 0) + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
}

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const FooterInfoStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 1,
  };

  const height = isMobile ? 36 : 120;

  return (
    <footer>
      <Stack direction='row' justifyContent='space-between'>
        <Image src='/decor/footer/triangle.svg' width='0' height={height} style={{ width: 'auto' }} alt='Footer gap' />

        <Image
          src='/decor/footer/triangle.svg'
          width='0'
          height={height}
          style={{ width: 'auto', transform: 'rotate(-90deg)' }}
          alt='Footer gap'
        />
      </Stack>

      <StyledDiv>
        <Stack direction='row' justifyContent='space-between'>
          <Image
            src='/decor/footer/triangle.svg'
            width='0'
            height={height}
            style={{ width: 'auto', transform: 'rotate(90deg)' }}
            alt='Footer gap'
          />

          <Grid container sx={{ margin: '1.875rem 0' }}>
            <Grid item xs={12} lg={6}>
              <Grid container>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link href='/'>{!isMobile ? <Logo size='extraLarge' /> : <Logo size='large' />}</Link>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body1' fontWeight={700} mb={2.25}>
                    Design ITUS - CLB học thuật thiết kế
                  </Typography>

                  <Stack direction='row' sx={{ marginBottom: 1.5, display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon sx={{ marginRight: 1 }} />
                    <Typography>0939 074 483 - 0939 074 483</Typography>
                  </Stack>

                  <Stack direction='row' sx={{ marginBottom: 1.5, display: 'flex', alignItems: 'center' }}>
                    <FacebookRounded sx={{ marginRight: 1 }} />
                    <Typography component={Link} href='https://www.facebook.com/design.itus' target='_blank'>
                      facebook.com/design.itus
                    </Typography>
                  </Stack>

                  <Stack direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
                    <MailOutlineIcon sx={{ marginRight: 1 }} />
                    <Typography component={Link} href='mailto:designclub@fit.hcmus.edu.vn'>
                      designclub@fit.hcmus.edu.vn
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={2} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>

            <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block' } }}>
              <Grid container>
                <Grid item sm={4} sx={FooterInfoStyles}>
                  <Typography variant='body1' fontWeight={700}>
                    <Link href='/'>Trang chủ</Link>
                  </Typography>
                  <Typography>
                    <Link href='AboutUs' onClick={smoothScroll}>
                      Chúng tôi là ai
                    </Link>
                  </Typography>
                  <Typography>
                    <Link href='LastestEvents' onClick={smoothScroll}>
                      Sự kiện gần đây
                    </Link>
                  </Typography>
                  <Typography>
                    <Link href='Partners' onClick={smoothScroll}>
                      Đối tác
                    </Link>
                  </Typography>
                  <Typography>
                    <Link href='Leaders' onClick={smoothScroll}>
                      Người dẫn đầu
                    </Link>
                  </Typography>
                </Grid>
                <Grid item sm={4} sx={FooterInfoStyles}>
                  <Typography variant='body1' fontWeight={700}>
                    <Link href='/'>Giới thiệu</Link>
                  </Typography>
                  <Typography>Lịch sử</Typography>
                  <Typography>Các ban</Typography>
                  <Typography>Gallery</Typography>
                  <Typography>Liên hệ</Typography>
                </Grid>
                <Grid item sm={4} sx={FooterInfoStyles}>
                  <Typography variant='body1' fontWeight={700}>
                    <Link href='/'>Sự kiện</Link>
                  </Typography>
                  <Typography>Outr Space</Typography>
                  <Typography>Sự kiện khác</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Image
            src='/decor/footer/triangle.svg'
            width='0'
            height={height}
            style={{ width: 'auto', transform: 'rotate(180deg)' }}
            alt='Footer gap'
          />
        </Stack>
        <DividerContainer>
          <Divider sx={{ height: 0, border: '0.0625rem solid white' }} />
          <Typography sx={{ padding: { xs: '0.5rem 0 1rem 0', md: '1rem 0 2rem 0' } }}>
            © 2022 Design ITUS. All right reserved.
          </Typography>
        </DividerContainer>
      </StyledDiv>
    </footer>
  );
}
