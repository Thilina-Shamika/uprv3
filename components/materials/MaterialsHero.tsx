import Image from 'next/image';
import Link from 'next/link';
import styles from './MaterialsHero.module.css';

export default function MaterialsHero() {
  return (
    <header id="top" className={styles.hero}>
      <Image
        src="/assets/hero-pouch.jpg"
        alt=""
        width={1752}
        height={898}
        className={styles.bg}
        preload
      />
      <div className={styles.scrim} />
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.crumbs}>
          <Link href="/">Home</Link>
          <span className={styles.slash}>/</span>
          <span className={styles.here}>Materials</span>
        </div>
        <h1 className={styles.title}>
          Three recyclable grades, <span className={styles.accent}>one promise</span>
        </h1>
        <p className={styles.lede}>
          PE, PE Plus and PE Plus Xtra cover everyday packaging through to metalised
          barrier film. Every structure is engineered to be recovered and used again.
        </p>
        <div className={styles.stats}>
          <div>
            <div className={styles.statValueLime}>03</div>
            <div className={styles.statLabel}>Recyclable grades</div>
          </div>
          <div>
            <div className={styles.statValue}>
              ~40<span className={styles.unit}>%</span>
            </div>
            <div className={styles.statLabel}>Recycled content</div>
          </div>
          <div>
            <div className={styles.statValue}>
              100<span className={styles.unit}>%</span>
            </div>
            <div className={styles.statLabel}>Designed for recovery</div>
          </div>
        </div>
      </div>
    </header>
  );
}
