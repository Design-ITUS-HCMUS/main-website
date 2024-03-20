import Stack from '@mui/material/Stack';

import Footer from '@/libs/ui/components/Footer';
import Navbar from '@/libs/ui/components/Navbar';

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack marginTop={{ xs: '3rem', md: '4rem' }}>
      <Navbar />
      {children}
      <Footer />
    </Stack>
  );
}
