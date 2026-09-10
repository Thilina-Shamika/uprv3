import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Eyebrow from '@/components/site/Eyebrow';
import hero from '@/components/site/PageHero.module.css';
import { routes } from '@/lib/routes';
import styles from './BlogHero.module.css';

const vars = {
  '--hero-img-opacity': 0.9,
  '--hero-scrim':
    'linear-gradient(100deg, rgba(6, 28, 19, 0.82), rgba(6, 28, 19, 0.44) 62%, rgba(6, 28, 19, 0.26))',
} as CSSProperties;

export default function BlogHero() {
  return (
    <header id="top" className={styles.hero} style={vars}>
      <Image
        src="/assets/quote-river.png"
        alt=""
        width={1672}
        height={941}
        className={hero.bg}
        preload
      />
      <div className={hero.scrim} />
      <div className={hero.orbit} aria-hidden="true" />
      <div className={hero.inner}>
        <div className={hero.crumbs}>
          <Link href={routes.home}>Home</Link>
          <span className={hero.slash}>/</span>
          <span className={hero.here}>Journal</span>
        </div>
        <div className={styles.split}>
          <div className={styles.main}>
            <Eyebrow num="01" label="Journal" translucent />
            <h1 className={styles.title}>
              Rethinking plastic, <span className={hero.accent}>one read at a time</span>
            </h1>
          </div>
          <p className={styles.lede}>
            Research, guides and field notes on recycling, biodegradable materials and the
            circular economy for plastic.
          </p>
        </div>
      </div>
    </header>
  );
}
