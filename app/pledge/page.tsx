import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import HomeFooter from '@/components/home/HomeFooter';
import PledgeHero from '@/components/pledge/PledgeHero';
import PledgeStory from '@/components/pledge/PledgeStory';
import PledgeOverview from '@/components/pledge/PledgeOverview';
import PledgeAmbition from '@/components/pledge/PledgeAmbition';
import PillarDock from '@/components/pledge/PillarDock';
import PillarDetail from '@/components/pledge/PillarDetail';
import PledgeClose from '@/components/pledge/PledgeClose';
import { pillars, seo } from '@/lib/pledge';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function Page() {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />
        <PledgeHero />
        <PledgeStory />
        <PledgeOverview />
        <PledgeAmbition />
        {pillars.map((pillar, i) => (
          <PillarDetail key={pillar.id} pillar={pillar} tinted={i % 2 === 1} />
        ))}
        <PledgeClose />
        <PillarDock />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
