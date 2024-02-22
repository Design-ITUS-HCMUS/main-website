// React and Next
import Image from 'next/image';

// Material UI Components
import { styled, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// Material UI Icons
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const StyledDiv = styled('div')(({ theme }) => ({
  margin: '3.75rem 1rem',
  [theme.breakpoints.down('sm')]: {
    margin: '2rem 1rem 1.5rem 1rem',
  },
}));

const TextContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: { xs: 'center', md: 'flex-start' },
  textAlign: { xs: 'center', md: 'left' },
};

export function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StyledDiv id='AboutUs'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          {!isMobile ? (
            <Image
              src='/decor/designitusaboutus.svg'
              width='0'
              height='300'
              style={{ width: 'auto' }}
              alt='Design Itus logo'
            />
          ) : (
            <Image
              src='/decor/designitusaboutus.svg'
              width='0'
              height='160'
              style={{ width: 'auto' }}
              alt='Design Itus logo'
            />
          )}
        </Grid>

        <Grid item xs={12} md={6} lg={5} sx={TextContainerStyle}>
          <Typography variant='title' pt={2}>
            CHÚNG TÔI LÀ AI?
          </Typography>

          <Typography variant='body2' py={2}>
            Design ITUS là Câu lạc bộ Học thuật Thiết kế đầu tiên của khoa Công nghệ thông tin, trường ĐH Khoa học tự
            nhiên, ĐHQG TPHCM. Đây là nơi dành cho những bạn trẻ có niềm đam mê về thiết kế đồ hoạ, UI/UX, nhiếp ảnh,
            dựng phim, video, vẽ tay và kỹ thuật số. Bên cạnh đó còn có cuộc thi học thuật thường niên có tên Outr
            Space.
          </Typography>

          <Button variant='contained'>
            Tìm hiểu thêm <ArrowRightIcon sx={{ fontSize: '200%' }} />
          </Button>
        </Grid>
      </Grid>
    </StyledDiv>
  );
}
