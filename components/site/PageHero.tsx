import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Eyebrow from '@/components/site/Eyebrow';
import { routes } from '@/lib/routes';
import styles from './PageHero.module.css';

export type HeroStat = {
  value: ReactNode;
  label: string;
  /** The lead figure is set in lime; the rest in white. */
  lime?: boolean;
  tabular?: boolean;
};

/**
 * The dark photographic hero shared by every inner page. The prototypes vary
 * only in image, scrim strength, line lengths and an optional eyebrow pill, so
 * those arrive as props rather than as six near-identical components.
 */
export default function PageHero({
  crumb,
  image,
  eyebrow,
  title,
  accent,
  lede,
  stats,
  imageOpacity,
  scrim,
  titleCh,
  ledeCh,
}: {
  crumb: string;
  image: { src: string; width: number; height: number };
  eyebrow?: { num: string; label: string };
  title: string;
  accent: string;
  lede: string;
  stats: HeroStat[];
  imageOpacity?: number;
  scrim?: string;
  titleCh?: number;
  ledeCh?: number;
}) {
  const vars = {
    '--hero-img-opacity': imageOpacity,
    '--hero-scrim': scrim,
    '--hero-title-ch': titleCh ? `${titleCh}ch` : undefined,
    '--hero-lede-ch': ledeCh ? `${ledeCh}ch` : undefined,
  } as CSSProperties;

  return (
    <header id="top" className={styles.hero} style={vars}>
      <Image
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        className={styles.bg}
        preload
      />
      <div className={styles.scrim} />
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.crumbs}>
          <Link href={routes.home}>Home</Link>
          <span className={styles.slash}>/</span>
          <span className={styles.here}>{crumb}</span>
        </div>
        {eyebrow && <Eyebrow num={eyebrow.num} label={eyebrow.label} translucent />}
        <h1 className={eyebrow ? styles.titleAfterEyebrow : styles.title}>
          {title} <span className={styles.accent}>{accent}</span>
        </h1>
        <p className={styles.lede}>{lede}</p>
        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className={`${stat.lime ? styles.statValueLime : styles.statValue} ${
                  stat.tabular ? styles.tabular : ''
                }`.trim()}
              >
                {stat.value}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

/** Half-size suffix for hero figures, e.g. the "%" in "~40%". */
export function HeroUnit({ children }: { children: ReactNode }) {
  return <span className={styles.unit}>{children}</span>;
}
