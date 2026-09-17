import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import HomeFooter from '@/components/home/HomeFooter';
import JoinHero from '@/components/join/JoinHero';
import MessageForm from '@/components/join/MessageForm';
import Social from '@/components/join/Social';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Join Us — Use Plastic Responsibly',
  description:
    'Tell us what you package and we will come back with the recycled or biodegradable structure that fits it.',
};

export default function Page() {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />
        <JoinHero />
        <MessageForm />
        <Social />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
