// React and Next
import Image from 'next/image';

// Material UI Components
import { styled, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledDiv = styled('div')(({ theme }) => ({
  margin: '4.375rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    margin: '2rem 0',
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
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 3rem',
  },
  //Note: background color is not in colors.ts or theme.palette
}));

export function Quote() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledDiv>
      {!isMobile ? (
        <Image
          src='/decor/quoteheader.svg'
          width='0'
          height='0'
          style={{ width: '100%', height: 'auto' }}
          alt='Quote header'
        />
      ) : (
        <Image
          src='/decor/smallquoteheader.svg'
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
          src='/decor/quotefooter.svg'
          width='0'
          height='0'
          style={{ width: '100%', height: 'auto' }}
          alt='Quote footer'
        />
      ) : (
        <Image
          src='/decor/smallquotefooter.svg'
          width='0'
          height='0'
          style={{ width: '100%', height: 'auto' }}
          alt='Quote footer'
        />
      )}
    </StyledDiv>
  );
}
