import CertRail from '@/components/home/CertRail';
import HomeHeader from '@/components/home/HomeHeader';
import Hero from '@/components/home/Hero';
import IslandStage from '@/components/home/IslandStage';
import Ledger from '@/components/home/Ledger';
import Strategy from '@/components/home/Strategy';
import PartnerLedger from '@/components/home/PartnerLedger';
import HomeFooter from '@/components/home/HomeFooter';
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
        <PartnerLedger />
        <HomeFooter />
      </div>
    </>
  );
}
