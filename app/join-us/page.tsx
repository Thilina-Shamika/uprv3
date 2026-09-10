import type { Metadata } from 'next';
import ComingSoon from '@/components/site/ComingSoon';

export const metadata: Metadata = {
  title: 'Join Us — Use Plastic Responsibly',
  description: 'Move your packaging to recycled or biodegradable material, and be recognised here as a champion of environmental sustainability.',
};

export default function Page() {
  return (
    <ComingSoon
      eyebrow={'Join Us'}
      title={'Partner with us.'}
      body={'Move your packaging to recycled or biodegradable material, and be recognised here as a champion of environmental sustainability.'}
    />
  );
}
