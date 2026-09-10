import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import JoinCta from '@/components/site/JoinCta';
import HomeFooter from '@/components/home/HomeFooter';
import BlogHero from '@/components/blog/BlogHero';
import Featured from '@/components/blog/Featured';
import Archive from '@/components/blog/Archive';
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
        <Featured />
        <Archive />
        <JoinCta
          translucentEyebrow
          title="Reading is a start."
          accent="Packaging is the change"
          lede="Move to recycled or biodegradable options with us, and have your contribution measured and published on this platform."
        />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
