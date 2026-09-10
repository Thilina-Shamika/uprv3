import type { Metadata } from 'next';
import ComingSoon from '@/components/site/ComingSoon';

export const metadata: Metadata = {
  title: 'Awards & Accolades — Use Plastic Responsibly',
  description: 'WorldStar, Lanka Star and AsiaStar awards for sustainable packaging, plus the products that earned them.',
};

export default function Page() {
  return (
    <ComingSoon
      eyebrow={'Awards & Accolades'}
      title={'Recognised for doing it right.'}
      body={'WorldStar, Lanka Star and AsiaStar awards for sustainable packaging, plus the products that earned them.'}
    />
  );
}
