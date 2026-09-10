import Link from 'next/link';
import Counter from '@/components/site/Counter';
import styles from './Proof.module.css';

export default function Proof() {
  return (
    <section className={styles.section}>
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.ghost} aria-hidden="true">
        Measurable
      </div>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <div className={styles.kicker}>
            <span className={styles.tick} aria-hidden="true" />
            <span className={styles.kickerText}>Measurable impact</span>
          </div>
          <a href="#impact" className={styles.jump}>
            Full numbers <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={styles.grid}>
          <div data-reveal="">
            <div className={styles.bigRow}>
              <div className={styles.big}>
                <Counter value={40} />
              </div>
              <div className={styles.pct}>%</div>
            </div>
            <div className={styles.bigCaption}>
              <div className={styles.bigTitle}>Recycled content</div>
              <div className={styles.bigDesc}>
                of our product is made from recovered plastic — the figure the whole
                business is measured against.
              </div>
            </div>
            <div className={styles.actions}>
              <Link href="/partners" className={styles.ledger}>
                See the ledger <span aria-hidden="true">→</span>
              </Link>
              <span className={styles.note}>22,346,157 kg recovered to date</span>
            </div>
          </div>

          <div className={styles.rows}>
            {[
              ['02', '22', 'Partner programmes', 'brands already producing with recovered material'],
              ['03', '03', 'Recyclable grades', 'PE, PE Plus and PE Plus Xtra — one recovery route'],
            ].map(([num, value, title, desc], i) => (
              <div
                key={num}
                className={styles.row}
                data-reveal=""
                data-reveal-delay={180 + i * 90}
              >
                <span className={styles.bar} aria-hidden="true" />
                <div className={styles.rowHead}>
                  <span className={styles.rowNum}>{num}</span>
                  <span className={styles.rowValue}>{value}</span>
                </div>
                <div className={styles.rowTitle}>{title}</div>
                <div className={styles.rowDesc}>{desc}</div>
              </div>
            ))}
            <div className={styles.row} data-reveal="" data-reveal-delay="360">
              <span className={styles.bar} aria-hidden="true" />
              <div className={styles.rowHead}>
                <span className={styles.rowNum}>04</span>
                <span className={styles.rowValue}>
                  <Counter value={20} />
                  <span className={styles.plus}>+</span>
                </span>
              </div>
              <div className={styles.rowTitle}>Years in plastics</div>
              <div className={styles.rowDesc}>
                shaping Sri Lanka&apos;s industry since the start
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
