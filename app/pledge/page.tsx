import type { Metadata } from 'next';
import ComingSoon from '@/components/site/ComingSoon';

export const metadata: Metadata = {
  title: 'Our Pledge — Use Plastic Responsibly',
  description: 'Recycle, biodegradable products, net zero energy and education — the four commitments behind our circular economy, with the numbers against each.',
};

export default function Page() {
  return (
    <ComingSoon
      eyebrow={'Our Pledge'}
      title={'Our pledge, in detail.'}
      body={'Recycle, biodegradable products, net zero energy and education — the four commitments behind our circular economy, with the numbers against each.'}
    />
  );
}
