import Image from 'next/image';
import Link from 'next/link';
import { overview, seo } from '@/lib/pledge';
import { routes } from '@/lib/routes';
import styles from './Pledge.module.css';

export default function PledgeHero() {
  const [lead, ...rest] = seo.h1.split(': ');
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.heroArt} aria-hidden="true">
        <Image
          src="/assets/pledge/pledge-hero.png"
          alt=""
          width={1533}
          height={1026}
          sizes="(max-width: 980px) 100vw, 64vw"
          preload
          className={styles.heroImg}
        />
      </div>
      <div className={styles.heroText}>
        <div className={styles.crumbs}>
          <Link href={routes.home}>Home</Link>
          <span aria-hidden="true">/</span>
          <span className={styles.crumbHere}>Our Pledge</span>
        </div>
        {/* Text content stays the supplied H1: "UPR: Our Four-Pillar Sustainability Pledge". */}
        <h1 className={styles.h1}>
          <span className={styles.h1Lead}>{lead}:</span> {rest.join(': ')}
        </h1>
        <p className={styles.heroLede}>{overview.lede}</p>
        <a href="#pillars" className={styles.cta}>
          <span>Explore the four pillars</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}
