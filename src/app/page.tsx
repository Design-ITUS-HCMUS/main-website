'use client';

import MainLayout from './_components/Layout';
import { AboutUs, HeroBanner, LatestEvents, Leaders, Partners, Quote } from './_components';

export default function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <AboutUs />
      <LatestEvents />
      <Quote />
      <Partners />
      <Leaders />
    </MainLayout>
  );
}
