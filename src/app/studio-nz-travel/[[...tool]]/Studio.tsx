'use client';

import dynamic from 'next/dynamic';

const NextStudioComponent = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
);

import config from '../../../../sanity.config';

export default function Studio() {
  return <NextStudioComponent config={config} />;
}
