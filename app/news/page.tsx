import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import HomeFooter from '@/components/home/HomeFooter';
import NewsHero from '@/components/news/NewsHero';
import NewsList from '@/components/news/NewsList';
import NewsClose from '@/components/news/NewsClose';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'News — Use Plastic Responsibly',
  description:
    'Certifications, awards, partnerships and programmes from UPR and Polydime, as they happen.',
};

export default function Page() {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />
        <NewsHero />
        <NewsList />
        <NewsClose />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
