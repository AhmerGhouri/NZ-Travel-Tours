import { getTours } from '@/lib/cms';
import { Suspense } from 'react';
import ToursClient from './ToursClient';

export const metadata = {
  title: 'Our Tours | NZ Travels & Tours',
  description: 'Explore our premium selection of NZ travel & Tours packages.',
};

export default async function ToursPage() {
  const allTours = await getTours();

  return <ToursClient initialTours={allTours} />;
}

