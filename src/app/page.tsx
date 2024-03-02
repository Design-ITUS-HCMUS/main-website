'use client';

//Material UI Components
import Stack from '@mui/material/Stack';

//Local Imports
import { AboutUs } from '@/app/_components/AboutUs';
import { HeroBanner } from '@/app/_components/HeroBanner';
import { LatestEvents } from '@/app/_components/LatestEvents';
import { Leaders } from '@/app/_components/Leaders';
import { Partners } from '@/app/_components/Partners';
import { Quote } from '@/app/_components/Quote';
import { Footer } from '@components/Footer';
import Navbar from '@components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Stack marginTop={{ xs: '3rem', md: '4rem' }}>
        <HeroBanner />
        <AboutUs />
        <LatestEvents />
        <Quote />
        <Partners />
        <Leaders />
      </Stack>
      <Footer />
    </>
  );
}
