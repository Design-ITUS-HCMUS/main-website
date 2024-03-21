import Image from 'next/image';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
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

export default function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ height: '31.25rem', margin: { xs: '0 1.125rem', md: '0 0' }, display: 'flex', alignItems: 'center' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          {!isMobile ? (
            <Image
              src='/decor/home/designitusaboutus.svg'
              width='0'
              height='300'
              style={{ width: 'auto' }}
              alt='Design Itus logo'
            />
          ) : (
            <Image
              src='/decor/home/designitusaboutus.svg'
              width='0'
              height='160'
              style={{ width: 'auto' }}
              alt='Design Itus logo'
            />
          )}
        </Grid>

        <Grid item xs={12} md={5} sx={TextContainerStyle}>
          <Typography variant='title' pt={2}>
            CHÚNG TÔI LÀ AI?
          </Typography>

          <Typography py={2}>
            Design ITUS là Câu lạc bộ Học thuật Thiết kế đầu tiên của khoa Công nghệ thông tin, trường ĐH Khoa học tự
            nhiên, ĐHQG TPHCM. Đây là nơi dành cho những bạn trẻ có niềm đam mê về thiết kế đồ hoạ, UI/UX, nhiếp ảnh,
            dựng phim, video, vẽ tay và kỹ thuật số. Bên cạnh đó còn có cuộc thi học thuật thường niên có tên Outr
            Space.
          </Typography>

          <Button endIcon={<ArrowRightIcon />}>Tìm hiểu thêm</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
