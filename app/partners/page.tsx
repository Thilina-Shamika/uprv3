import type { Metadata } from 'next';
import ComingSoon from '@/components/site/ComingSoon';

export const metadata: Metadata = {
  title: 'Our Partners — Use Plastic Responsibly',
  description: 'Every brand and grower producing with recovered material, ranked by the kilograms each has put back into production.',
};

export default function Page() {
  return (
    <ComingSoon
      eyebrow={'Our Partners'}
      title={'The full recovery ledger.'}
      body={'Every brand and grower producing with recovered material, ranked by the kilograms each has put back into production.'}
    />
  );
}
