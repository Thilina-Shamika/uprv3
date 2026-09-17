import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/lib/routes';
import styles from './Partners.module.css';

const stats = [
  { value: '22,346,157', label: 'KG sustainable material used' },
  { value: '18', label: 'Partner organisations' },
  { value: '03', label: 'Markets served' },
];

export default function PartnersHero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <div className={styles.crumbs}>
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.crumbHere}>Our Partners</span>
          </div>
          <p className={styles.eyebrow}>Our partners</p>
          <h1 className={styles.h1}>We measure and value every partner&rsquo;s contribution</h1>
          <p className={styles.heroLede}>
            Thanks to the hard work and commitment of our partners, we have been able to reduce the
            amount of virgin plastic dumped into the environment. Together we reduce our plastic
            footprint and re-use this material we cannot live without.
          </p>

          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.heroArt} aria-hidden="true">
          <Image
            src="/assets/partners-hero-island.png"
            alt=""
            width={1506}
            height={934}
            sizes="(max-width: 980px) 90vw, 660px"
            preload
            className={styles.heroImg}
          />
        </div>
      </div>
    </header>
  );
}
