import Image from 'next/image';

import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import InfiniteLooper from '@components/InfiniteLooper';

const StyledDiv = styled('div')(({ theme }) => ({
  height: '31.25rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '12.5rem',
  },
}));

export default function Partners() {
  const partners = [
    {
      text: 'Cuộc thi An toàn thông tin - HCMUS CTF',
      src: '/partners/CTF.svg',
    },
    {
      text: 'Cuộc thi học thuật Thách thức',
      src: '/partners/ThachThuc.svg',
    },
    {
      text: 'Câu lạc bộ SAB',
      src: '/partners/SAB.svg',
    },
    {
      text: 'CLB An toàn thông tin - Khoa Công nghệ thông tin - Trường Đại học Khoa học Tự nhiên',
      src: '/partners/BlackPinker.svg',
    },
    {
      text: 'Bản lĩnh IT',
      src: '/partners/BLIT.svg',
    },
    {
      text: 'Hội sinh viên',
      src: '/partners/HSV.svg',
    },
  ];

  return (
    <StyledDiv id='Partners'>
      <Typography variant='title' marginBottom={{ xs: 2, md: 4.5 }}>
        ĐỐI TÁC
      </Typography>
      <InfiniteLooper speed='12' direction='left'>
        {partners.map((partner, index) => (
          <Image
            src={partner.src}
            width='0'
            height='0'
            style={{ width: 'auto', height: 'auto' }}
            alt={partner.text}
            key={index}
          />
        ))}
      </InfiniteLooper>
    </StyledDiv>
  );
}
