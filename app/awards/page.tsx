import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import HomeFooter from '@/components/home/HomeFooter';
import AwardsHero from '@/components/awards/AwardsHero';
import AwardsList from '@/components/awards/AwardsList';
import AwardWinners from '@/components/awards/AwardWinners';
import AwardsClose from '@/components/awards/AwardsClose';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Awards & Accolades — Use Plastic Responsibly',
  description:
    'WorldStar, Lanka Star and AsiaStar awards for sustainable packaging — and the three products that earned them.',
};

export default function Page() {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />
        <AwardsHero />
        <AwardsList />
        <AwardWinners />
        <AwardsClose />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
