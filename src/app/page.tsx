'use client';

import { styled } from '@mui/material';
import Button from '@mui/material/Button';

import { AboutUs } from '@/app/_components/AboutUs';
import { HeroBanner } from '@/app/_components/HeroBanner';
import { LatestEvents } from '@/app/_components/LastestEvents';
import { Leaders } from '@/app/_components/Leaders';
import { Partners } from '@/app/_components/Partners';
import { Quote } from '@/app/_components/Quote';
import { colors } from '@/libs/ui';
import { Footer } from '@/libs/ui/components/Footer';
import Navbar from '@/libs/ui/components/Navbar';
import { Logo } from '@components';

const StyledDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'background.default',
  margin: '4rem 7.5rem 0 7.5rem',
  [theme.breakpoints.down('md')]: {
    margin: '4rem 3.75rem 0 3.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '3rem 1.125rem 0 1.125rem',
  },
}));

export default function Home() {
  return (
    <>
      <Navbar />
      <StyledDiv>
        <HeroBanner />
        <AboutUs />
        <LatestEvents />
        <Quote />
        <Partners />
        <Leaders />
      </StyledDiv>
      <Footer />
    </>
  );
}
