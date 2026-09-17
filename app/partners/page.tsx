import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import HomeFooter from '@/components/home/HomeFooter';
import PartnersHero from '@/components/partners/PartnersHero';
import VolumeSummary from '@/components/partners/VolumeSummary';
import Milestones from '@/components/partners/Milestones';
import LogoLanes from '@/components/partners/LogoLanes';
import WhyPartner from '@/components/partners/WhyPartner';
import PartnersClose from '@/components/partners/PartnersClose';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Partners — Use Plastic Responsibly',
  description:
    'The growers, manufacturers and exporters who have moved to recycled or biodegradable packaging — every kilogram measured and published.',
};

export default function Page() {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />
        <PartnersHero />
        <VolumeSummary />
        <Milestones />
        <LogoLanes />
        <WhyPartner />
        <PartnersClose />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
