import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import PageHero from '@/components/site/PageHero';
import Tape from '@/components/site/Tape';
import JoinCta from '@/components/site/JoinCta';
import HomeFooter from '@/components/home/HomeFooter';
import AwardProducts from '@/components/awards/AwardProducts';
import TrophyCabinet from '@/components/awards/TrophyCabinet';
import { routes } from '@/lib/routes';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Awards & Accolades — Use Plastic Responsibly',
  description:
    'WorldStar, Lanka Star and AsiaStar awards for sustainable packaging — and the three products that earned them.',
};

const tapeItems = [
  'Awards & accolades',
  'Presidential environment award',
  'Sustainable packaging',
  'Recognised locally & globally',
];

export default function Page() {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />
        <PageHero
          crumb="Awards and Accolades"
          image={{ src: '/assets/award-hero.png', width: 1600, height: 620 }}
          imageOpacity={0.85}
          scrim="linear-gradient(100deg, rgba(6, 28, 19, 0.82), rgba(6, 28, 19, 0.42) 62%, rgba(6, 28, 19, 0.24))"
          eyebrow={{ num: '01', label: 'Awards & Accolades', solid: true }}
          title="Awards and accolades for"
          accent="sustainability"
          titleCh={16}
          lede="We have been successful in winning many awards for sustainability and sustainable products, in both the local and global arena."
          stats={[
            { value: '03', label: 'Award-winning products', lime: true },
            { value: '03', label: 'International awards' },
            {
              value: (
                <>
                  2019<span className={styles.dash}>–</span>20
                </>
              ),
              label: 'Years recognised',
            },
          ]}
        />
        <Tape label="Awards & accolades" items={tapeItems} />
        <AwardProducts />
        <TrophyCabinet />
        <JoinCta
          title="Build award-winning packaging with"
          accent="us"
          lede="Partner with us to reduce virgin plastic in the environment — and get your product featured on our platform as a champion of sustainability."
          secondary={{ href: routes.products, label: 'See products' }}
        />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
