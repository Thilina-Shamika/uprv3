import type { Metadata } from 'next';
import ComingSoon from '@/components/site/ComingSoon';

export const metadata: Metadata = {
  title: 'Blog — Use Plastic Responsibly',
  description: 'Field studies, guides and industry notes on recycling, biodegradable film and the circular economy for plastics.',
};

export default function Page() {
  return (
    <ComingSoon
      eyebrow={'From the Blog'}
      title={'Rethinking plastic, one read at a time.'}
      body={'Field studies, guides and industry notes on recycling, biodegradable film and the circular economy for plastics.'}
    />
  );
}
