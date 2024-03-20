'use client';

import { AboutUs, HeroBanner, LatestEvents, Leaders, Partners, Quote } from './_components';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <LatestEvents />
      <Quote />
      <Partners />
      <Leaders />
    </>
  );
}
