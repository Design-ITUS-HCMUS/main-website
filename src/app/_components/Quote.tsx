import Image from 'next/image';

import { styled, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledDiv = styled('div')(({ theme }) => ({
  height: '37.5rem',
  margin: '0 7.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    height: 'fit-content',
    margin: '0 1.125rem',
  },
}));

const QuoteContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '3rem 6rem',
  width: '100%',
  backgroundColor: '#E6F6FF',
  [theme.breakpoints.down('md')]: {
    padding: '3rem 3rem',
  },
  //Note: background color is not in colors.ts or theme.palette
}));

export default function Quote() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StyledDiv>
      {!isMobile ? (
        <Image
          src='/decor/home/md_quoteheader.svg'
          width='0'
          height='0'
          style={{ width: '100%', height: 'auto' }}
          alt='Quote header'
        />
      ) : (
        <Image
          src='/decor/home/xs_quoteheader.svg'
          width='0'
          height='0'
          style={{ width: '100%', height: 'auto' }}
          alt='Quote header'
        />
      )}

      <QuoteContainer>
        <Typography variant='h5' fontWeight='700' mb={1}>
          &quot;Người trí thức nói điều đơn giản theo cách phức tạp.
        </Typography>
        <Typography variant='h5' fontWeight='700'>
          Người nghệ sĩ nói điều phức tạp theo cách đơn giản.&quot;
        </Typography>
        <Typography variant='h6' fontWeight='400' mt={2}>
          Charles Bukowski
        </Typography>
      </QuoteContainer>

      {!isMobile ? (
        <Image
          src='/decor/home/md_quotefooter.svg'
          width='0'
          height='0'
          style={{ width: '100%', height: 'auto' }}
          alt='Quote footer'
        />
      ) : (
        <Image
          src='/decor/home/xs_quotefooter.svg'
          width='0'
          height='0'
          style={{ width: '100%', height: 'auto' }}
          alt='Quote footer'
        />
      )}
    </StyledDiv>
  );
}
