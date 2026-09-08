import BadgeRail from '@/components/home/BadgeRail';
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import Island from '@/components/home/Island';
import Stats from '@/components/home/Stats';
import Footer from '@/components/home/Footer';
import styles from './page.module.css';

export default function Page() {
  return (
    <>
      {/* Kept outside the clipping wrapper so the fixed rail can never be
          affected by its overflow or stacking. */}
      <BadgeRail />
      <div className={styles.page}>
        <div className={styles.backdrop} />
        <div className={styles.glowLeft} />
        <div className={styles.glowRight} />
        <Header />
        <Hero />
        <Island />
        <Stats />
        <Footer />
      </div>
    </>
  );
}
