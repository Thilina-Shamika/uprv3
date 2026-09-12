import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import PageHero from '@/components/site/PageHero';
import Tape from '@/components/site/Tape';
import JoinCta from '@/components/site/JoinCta';
import HomeFooter from '@/components/home/HomeFooter';
import Strategy from '@/components/pledge/Strategy';
import Pillars from '@/components/pledge/Pillars';
import { routes } from '@/lib/routes';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Pledge — Use Plastic Responsibly',
  description:
    'Recycle, biodegradable products, net zero energy and education — the four pillars of our pledge to make plastic sustainable.',
};

const tapeItems = ['Recycle', 'Biodegradable', 'Net zero', 'Educate', 'Use plastic responsibly'];

export default function Page() {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />
        <PageHero
          crumb="Our Pledge"
          image={{ src: '/assets/hero-growbag.jpg', width: 1752, height: 898 }}
          imageOpacity={0.9}
          scrim="linear-gradient(100deg, rgba(6, 28, 19, 0.8), rgba(6, 28, 19, 0.42) 62%, rgba(6, 28, 19, 0.24))"
          kicker="Our pledge"
          title="Making plastic"
          accent="sustainable"
          titleCh={16}
          lede="Using plastic responsibly is about the freedom and convenience of plastic products, used responsibly. We pledge to operate and improve the circular economy we have created for plastic."
          ledeCh={62}
        />
        <Tape label="Our pledge" items={tapeItems} />
        <Pillars />
        <Strategy />
        <JoinCta
          eyebrowNum="03"
          translucentEyebrow
          flushTop
          title="Pledge with us to use plastic"
          accent="responsibly"
          lede="Move to recycled or biodegradable options with us, and have your contribution measured and published on this platform."
          secondary={{ href: routes.partners, label: 'See our partners' }}
        />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
