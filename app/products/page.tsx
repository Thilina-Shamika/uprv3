import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import Tape from '@/components/site/Tape';
import JoinCta from '@/components/site/JoinCta';
import HomeFooter from '@/components/home/HomeFooter';
import SiteHeader from '@/components/site/SiteHeader';
import PageHero, { HeroUnit } from '@/components/site/PageHero';
import Certifications from '@/components/products/Certifications';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Products — Use Plastic Responsibly',
  description:
    'Three recyclable structures, one promise. PE, PE Plus and PE Plus Xtra, engineered to be recovered.',
};

const tapeItems = [
  'PE',
  'PE Plus',
  'PE Plus Xtra',
  'Mono-material by design',
  'Recovered, not discarded',
];

export default function Page() {
  return (
    <Reveal>
      {/* No certification rail on this page, so the shared footer's gutter
          collapses back to an ordinary page margin. */}
      <div className={styles.page}>
        <SiteHeader />
        <PageHero
          crumb="Products"
          image={{ src: '/assets/hero-pouch.jpg', width: 1752, height: 898 }}
          title="Three recyclable grades,"
          accent="one promise"
          lede="PE, PE Plus and PE Plus Xtra cover everyday packaging through to metalised barrier film. Every structure is engineered to be recovered and used again."
          stats={[
            { value: '03', label: 'Recyclable grades', lime: true },
            { value: <>~40<HeroUnit>%</HeroUnit></>, label: 'Recycled content' },
            { value: <>100<HeroUnit>%</HeroUnit></>, label: 'Designed for recovery' },
          ]}
        />
        <Tape label="Products" items={tapeItems} />
        <Certifications />
        <JoinCta
          title="Not sure which grade you need?"
          accent="Ask us"
          lede="Partner with us to reduce virgin plastic in the environment — and get your product featured on our platform as a champion of sustainability."
        />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
