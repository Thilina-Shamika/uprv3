import Link from 'next/link';
import styles from './JoinCta.module.css';

export default function JoinCta({
  eyebrowNum = '04',
  title,
  accent,
  lede,
}: {
  eyebrowNum?: string;
  title: string;
  accent: string;
  lede: string;
}) {
  return (
    <section id="join" className={styles.section}>
      <div className={styles.card} data-reveal="">
        <div className={styles.orbit} aria-hidden="true" />
        <div className={styles.body}>
          <div className={styles.copy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowNum}>{eyebrowNum}</span>
              <span className={styles.eyebrowText}>Take the pledge</span>
              <span className={styles.eyebrowRing} aria-hidden="true" />
            </div>
            <h2 className={styles.title}>
              {title} <span className={styles.accent}>{accent}</span>.
            </h2>
            <p className={styles.lede}>{lede}</p>
          </div>
          <div className={styles.actions}>
            <Link href="/join-us" className={styles.primary}>
              Join Us
              <span className={styles.primaryArrow} aria-hidden="true">
                →
              </span>
            </Link>
            <Link href="/pledge" className={styles.secondary}>
              Our pledge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
