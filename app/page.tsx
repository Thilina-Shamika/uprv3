import CertRail from '@/components/home/CertRail';
import HomeHeader from '@/components/home/HomeHeader';
import Hero from '@/components/home/Hero';
import IslandStage from '@/components/home/IslandStage';
import Ledger from '@/components/home/Ledger';
import Strategy from '@/components/home/Strategy';
import PartnerLedger from '@/components/partners/Milestones';
import Reveal from '@/components/site/Reveal';
import NewsStrip from '@/components/home/NewsStrip';
import HomeFooter from '@/components/home/HomeFooter';
import { routes } from '@/lib/routes';
import styles from './page.module.css';

export default function Page() {
  return (
    <>
      {/* Kept outside the clipping wrapper so the fixed rail and the menu
          drawer can never be affected by its overflow or stacking. */}
      <CertRail />
      <div id="top" className={styles.page}>
        <div className={styles.backdrop} />
        <div className={styles.glowLeft} />
        <div className={styles.glowRight} />
        <HomeHeader />
        <Hero />
        <IslandStage />
        <Ledger />
        <Strategy />
        {/* The ledger marks its parts with data-reveal, which start hidden; the
            home page has no page-level Reveal, so it gets its own here. */}
        <Reveal>
          <PartnerLedger
            gutter
            eyebrow="Our Partners"
            heading="The programmes behind the numbers"
            lede="Amount of sustainable material used to date in our production, by partner and product."
            action={{ href: routes.partners, label: 'See the full ledger' }}
          />
        </Reveal>
        <NewsStrip />
        <HomeFooter />
      </div>
    </>
  );
}
