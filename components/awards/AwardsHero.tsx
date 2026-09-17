import Image from 'next/image';
import Link from 'next/link';
import { awardsIntro } from '@/lib/awards';
import { routes } from '@/lib/routes';
import styles from './Awards.module.css';

const stats = [
  { value: '03', label: 'Award-winning products' },
  { value: '03', label: 'International awards' },
  { value: '2019–20', label: 'Years recognised' },
];

export default function AwardsHero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <div className={styles.crumbs}>
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.crumbHere}>Awards &amp; Accolades</span>
          </div>
          <p className={styles.eyebrow}>Awards &amp; Accolades</p>
          <h1 className={styles.h1}>{awardsIntro.title}</h1>
          <p className={styles.heroLede}>{awardsIntro.lede}</p>

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
            src="/assets/awards-hero-trophy-island.png"
            alt=""
            width={1533}
            height={1026}
            sizes="(max-width: 980px) 90vw, 640px"
            preload
            className={styles.heroImg}
          />
        </div>
      </div>
    </header>
  );
}
