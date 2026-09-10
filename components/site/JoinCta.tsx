import Link from 'next/link';
import Eyebrow from '@/components/site/Eyebrow';
import { routes } from '@/lib/routes';
import styles from './JoinCta.module.css';

export default function JoinCta({
  eyebrowNum = '04',
  translucentEyebrow = false,
  title,
  accent,
  lede,
  secondary = { href: routes.pledge, label: 'Our pledge' },
  flushTop = false,
}: {
  eyebrowNum?: string;
  /** Materials sets the pill on dark green; Partners lets the card show through. */
  translucentEyebrow?: boolean;
  title: string;
  accent: string;
  lede: string;
  secondary?: { href: string; label: string };
  /** Drop the top padding when the section above already provides the gap. */
  flushTop?: boolean;
}) {
  return (
    <section id="join" className={flushTop ? styles.sectionFlush : styles.section}>
      <div className={styles.card} data-reveal="">
        <div className={styles.orbit} aria-hidden="true" />
        <div className={styles.body}>
          <div className={styles.copy}>
            <Eyebrow num={eyebrowNum} label="Take the pledge" translucent={translucentEyebrow} />
            <h2 className={styles.title}>
              {title} <span className={styles.accent}>{accent}</span>.
            </h2>
            <p className={styles.lede}>{lede}</p>
          </div>
          <div className={styles.actions}>
            <Link href={routes.joinUs} className={styles.primary}>
              Join Us
              <span className={styles.primaryArrow} aria-hidden="true">
                →
              </span>
            </Link>
            <Link href={secondary.href} className={styles.secondary}>
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
