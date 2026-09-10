import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import PageHero from '@/components/site/PageHero';
import Tape from '@/components/site/Tape';
import HomeFooter from '@/components/home/HomeFooter';
import HeroActions from '@/components/join/HeroActions';
import ContactChannels from '@/components/join/ContactChannels';
import MessageForm from '@/components/join/MessageForm';
import Social from '@/components/join/Social';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Join Us — Use Plastic Responsibly',
  description:
    'Tell us what you package and we will come back with the recycled or biodegradable structure that fits it.',
};

const tapeItems = [
  'Partner with us',
  'Recycled alternatives',
  'Biodegradable options',
  'Get featured on our platform',
];

export default function Page() {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />
        <PageHero
          crumb="Join Us"
          image={{ src: '/assets/hero-sprout.jpg', width: 1752, height: 898 }}
          imageOpacity={0.9}
          scrim="linear-gradient(100deg, rgba(6, 28, 19, 0.8), rgba(6, 28, 19, 0.42) 62%, rgba(6, 28, 19, 0.24))"
          eyebrow={{ num: '01', label: 'Join us' }}
          title="Let's take virgin plastic"
          accent="out of the loop"
          lede="Tell us what you package and we will come back with the recycled or biodegradable structure that fits it. Your message goes directly to our staff, who answer as soon as they can."
          ledeCh={58}
        >
          <HeroActions />
        </PageHero>
        <Tape label="Join us" items={tapeItems} />
        <ContactChannels />
        <MessageForm />
        <Social />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
