'use client';

import Stack from '@mui/material/Stack';

import Footer from '@/libs/ui/components/Footer';
import Navbar from '@/libs/ui/components/Navbar';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Stack marginTop={{ xs: '3rem', md: '4rem' }}>
      <Navbar />
      {children}
      <Footer />
    </Stack>
  );
}
