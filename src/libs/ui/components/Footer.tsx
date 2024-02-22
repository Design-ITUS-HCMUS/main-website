// React and Next
import Image from 'next/image';

// Material UI Components
import { styled, useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// Material UI Icons
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

// Local Imports
import { colors } from '..';
import { Logo } from '.';

const StyledDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: colors.neutral.white,
  backgroundColor: colors.blue[800],
}));

const DividerContainer = styled('div')(({ theme }) => ({
  padding: '0 7.5rem',
  [theme.breakpoints.down('sm')]: {
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

export function Footer() {
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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image src='/decor/triangle.svg' width='0' height={height} style={{ width: 'auto' }} alt='Footer gap' />

        <Image
          src='decor/triangle.svg'
          width='0'
          height={height}
          style={{ width: 'auto', transform: 'rotate(-90deg)' }}
          alt='Footer gap'
        />
      </div>

      <StyledDiv>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Image
            src='decor/triangle.svg'
            width='0'
            height={height}
            style={{ width: 'auto', transform: 'rotate(90deg)' }}
            alt='Footer gap'
          />

          <Grid container sx={{ margin: '1.875rem 0' }}>
            <Grid item xs={12} lg={6}>
              <Grid container>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <a href='/'>{!isMobile ? <Logo size='extraLarge' /> : <Logo size='large' />}</a>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body1' fontWeight={700} mb={2.25}>
                    Design ITUS - CLB học thuật thiết kế
                  </Typography>

                  <Stack direction='row' sx={{ marginBottom: 1.5, display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon sx={{ marginRight: 1 }} />
                    <Typography variant='body2'>0939 074 483 - 0939 074 483</Typography>
                  </Stack>

                  <Stack direction='row' sx={{ marginBottom: 1.5, display: 'flex', alignItems: 'center' }}>
                    <FacebookRounded sx={{ marginRight: 1 }} />
                    <Typography variant='body2'>
                      <a href='https://www.facebook.com/design.itus'>facebook.com/design.itus</a>
                    </Typography>
                  </Stack>

                  <Stack direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
                    <MailOutlineIcon sx={{ marginRight: 1 }} />
                    <Typography variant='body2'>designclub@fit.hcmus.edu.vn</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={2} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>

            <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block' } }}>
              <Grid container>
                <Grid item sm={4} sx={FooterInfoStyles}>
                  <Typography variant='body1' fontWeight={700}>
                    <a href='/'>Trang chủ</a>
                  </Typography>
                  <Typography variant='body2'>
                    <a href='AboutUs' onClick={smoothScroll}>
                      Chúng tôi là ai
                    </a>
                  </Typography>
                  <Typography variant='body2'>
                    <a href='LastestEvents' onClick={smoothScroll}>
                      Sự kiện gần đây
                    </a>
                  </Typography>
                  <Typography variant='body2'>
                    <a href='Partners' onClick={smoothScroll}>
                      Đối tác
                    </a>
                  </Typography>
                  <Typography variant='body2'>
                    <a href='Leaders' onClick={smoothScroll}>
                      Người dẫn đầu
                    </a>
                  </Typography>
                </Grid>
                <Grid item sm={4} sx={FooterInfoStyles}>
                  <Typography variant='body1' fontWeight={700}>
                    <a href='/'>Giới thiệu</a>
                  </Typography>
                  <Typography variant='body2'>Lịch sử</Typography>
                  <Typography variant='body2'>Các ban</Typography>
                  <Typography variant='body2'>Gallery</Typography>
                  <Typography variant='body2'>Liên hệ</Typography>
                </Grid>
                <Grid item sm={4} sx={FooterInfoStyles}>
                  <Typography variant='body1' fontWeight={700}>
                    <a href='/'>Sự kiện</a>
                  </Typography>
                  <Typography variant='body2'>Outr Space</Typography>
                  <Typography variant='body2'>Sự kiện khác</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Image
            src='/decor/triangle.svg'
            width='0'
            height={height}
            style={{ width: 'auto', transform: 'rotate(180deg)' }}
            alt='Footer gap'
          />
        </div>
        <DividerContainer>
          <Divider sx={{ height: 0, border: '0.0625rem solid white' }} />
          <Typography variant='body2' sx={{ padding: { xs: '0.5rem 0 1rem 0', md: '1rem 0 2rem 0' } }}>
            © 2022 Design ITUS. All right reserved.
          </Typography>
        </DividerContainer>
      </StyledDiv>
    </footer>
  );
}
