'use client';

import Stack from '@mui/material/Stack';

import Department from './_components/Department';
import DevelopProcess from './_components/DevelopProcess';
import FAQ from './_components/FAQ';
import ImageView from './_components/ImageView';
import Quote from './_components/Quote';

import Footer from '@/libs/ui/components/Footer';
import Leaders from '@/libs/ui/components/Leaders';
import Navbar from '@/libs/ui/components/Navbar';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Stack marginTop={{ xs: '3rem', md: '4rem' }}>
        <DevelopProcess />
        <Department />
        <Quote />
        <ImageView />
        <Leaders />
        <FAQ />
      </Stack>
      <Footer />
    </>
  );
}
