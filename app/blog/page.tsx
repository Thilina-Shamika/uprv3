import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import HomeFooter from '@/components/home/HomeFooter';
import BlogHero from '@/components/blog/BlogHero';
import Archive from '@/components/blog/Archive';
import BlogClose from '@/components/blog/BlogClose';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Journal — Use Plastic Responsibly',
  description:
    'Research, guides and field notes on recycling, biodegradable materials and the circular economy for plastic.',
};

export default function Page() {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />
        <BlogHero />
        <Archive />
        <BlogClose />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
