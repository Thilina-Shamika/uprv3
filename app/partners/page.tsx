import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import PageHero from '@/components/site/PageHero';
import Tape from '@/components/site/Tape';
import JoinCta from '@/components/site/JoinCta';
import HomeFooter from '@/components/home/HomeFooter';
import VolumeSummary from '@/components/partners/VolumeSummary';
import LogoLanes from '@/components/partners/LogoLanes';
import WhyPartner from '@/components/partners/WhyPartner';
import Milestones from '@/components/partners/Milestones';
import { routes } from '@/lib/routes';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Partners — Use Plastic Responsibly',
  description:
    'The growers, manufacturers and exporters who have moved to recycled or biodegradable packaging — every kilogram measured and published.',
};

const tapeItems = [
  '22 partner programmes',
  '22,346,157 kg recovered',
  'Sri Lanka · India · Global',
  'Every kilogram accounted for',
];

export default function Page() {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />
        <PageHero
          crumb="Our Partners"
          image={{ src: '/assets/award-hero.png', width: 1600, height: 620 }}
          imageOpacity={0.85}
          scrim="linear-gradient(100deg, rgba(6, 28, 19, 0.82), rgba(6, 28, 19, 0.44) 62%, rgba(6, 28, 19, 0.26))"
          eyebrow={{ num: '01', label: 'Our Partners' }}
          title="We measure and value every partner's"
          accent="contribution"
          titleCh={18}
          lede="Thanks to the hard work and commitment of our partners, we have been able to reduce the amount of virgin plastic dumped into the environment. Together we reduce our plastic footprint and re-use this material we cannot live without."
          ledeCh={62}
          stats={[
            { value: '22,346,157', label: 'KG sustainable material used', lime: true, tabular: true },
            { value: '18', label: 'Partner organisations' },
            { value: '03', label: 'Markets served' },
          ]}
        />
        <Tape label="Our partners" ariaLabel="Our partners" items={tapeItems} />
        <VolumeSummary />
        <Milestones />
        <LogoLanes />
        <WhyPartner />
        <JoinCta
          eyebrowNum="05"
          translucentEyebrow
          title="Join the partners cutting"
          accent="virgin plastic"
          lede="Move to recycled or biodegradable options with us, and have your contribution measured and published alongside these organisations."
          secondary={{ href: routes.awards, label: 'See our awards' }}
        />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
