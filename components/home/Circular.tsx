import Link from 'next/link';
import styles from './Circular.module.css';

const stages = [
  ['01', 'Raw Material', 'Recycled feedstock chosen over virgin polymer wherever the application allows.'],
  ['02', 'Manufacturing', 'Extruded into PE, PE Plus and PE Plus Xtra film.'],
  ['03', 'Consumer Use', 'Safe, convenient packaging that protects what is inside.'],
  ['04', 'Collection', 'Sorted through our own supply chain — not sent to landfill.'],
  ['05', 'Recycling', 'Washed and reprocessed into usable film-grade material.'],
  ['06', 'New Packaging', 'Back into stage 01 as new film. The loop closes here.'],
];

export default function Circular() {
  return (
    <>
      <div className={styles.ghost} aria-hidden="true">
        <div className={styles.ghostWord}>Circular</div>
      </div>
      <section id="circular" className={styles.section}>
        <div className={styles.orbit} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.intro} data-reveal="">
            <div className={styles.kicker}>
              <span className={styles.tick} aria-hidden="true" />
              <span className={styles.kickerText}>The circular economy</span>
            </div>
            <h2 className={styles.title}>
              Plastic that never leaves <span className={styles.accent}>the loop</span>
            </h2>
            <p className={styles.lede}>
              Instead of take–make–dispose, we extend the cycle: collect, recycle,
              re-make — cutting the virgin polymer entering the system and reusing what
              is already here.
            </p>
            <div className={styles.stageRow}>
              <div className={styles.stageCount}>06</div>
              <div className={styles.stageNote}>
                stages, and stage six feeds straight back into stage one.
              </div>
            </div>
            <Link href="/materials" className={styles.cta}>
              See the grades <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.grid}>
            {stages.map(([num, title, desc], i) => {
              const closing = i === stages.length - 1;
              return (
                <div
                  key={num}
                  className={closing ? styles.closing : styles.card}
                  data-reveal=""
                  data-reveal-delay={i * 70}
                >
                  <span className={styles.bar} aria-hidden="true" />
                  <div className={styles.cardHead}>
                    <span className={styles.cardNum}>{num}</span>
                    {closing && (
                      <span className={styles.loopIcon} aria-hidden="true">
                        ↺
                      </span>
                    )}
                  </div>
                  <div className={styles.cardTitle}>{title}</div>
                  <div className={styles.cardDesc}>{desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
