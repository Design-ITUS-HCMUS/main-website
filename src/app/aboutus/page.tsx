'use client';

import MainLayout from '../_components/Layout';
import { Department, DevelopProcess, FAQ, ImageView, Leaders, Quote } from './_components';

export default function AboutUs() {
  return (
    <MainLayout>
      <DevelopProcess />
      <Department />
      <Quote />
      <ImageView />
      <Leaders />
      <FAQ />
    </MainLayout>
  );
}
