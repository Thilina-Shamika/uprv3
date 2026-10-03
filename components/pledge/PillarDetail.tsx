import Image from 'next/image';
import type { Pillar } from '@/lib/pledge';
import PillarSlider from './PillarSlider';
import styles from './Pledge.module.css';

/** One pillar in full: story on the left, its focus areas alongside. */
/** Each pillar sits on its own ground so the four read as distinct sections. */
const tones = ['white', 'sky', 'sand', 'mint'] as const;

export default function PillarDetail({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <section id={pillar.id} className={`${styles[tones[index % tones.length]]} ${styles.pillar}`}>
      <div className={styles.wrap}>
        <div className={styles.pillarHead} data-reveal="">
          <span className={styles.tileLarge}>
            <Image
              src={pillar.icon.src}
              alt={pillar.name}
              width={pillar.icon.width}
              height={pillar.icon.height}
              sizes="112px"
              className={styles.tileImg}
            />
          </span>
          <p className={styles.pillarLabel}>
            <span className={styles.pillarNum}>{pillar.num}</span>
            <span className={styles.pillarName}>{pillar.name}</span>
          </p>
        </div>
        <h2 className={styles.pillarTitle} data-reveal="">
          {pillar.title}
        </h2>

        <div className={styles.pillarGrid}>
          <div data-reveal="">
            {pillar.body.map((text) => (
              <p key={text.slice(0, 32)} className={styles.p}>
                {text}
              </p>
            ))}
            {pillar.highlight && <p className={styles.highlight}>{pillar.highlight}</p>}
          </div>

          <aside className={styles.focus} data-reveal="" data-reveal-delay="100">
            <p className={styles.focusLabel}>Our focus</p>
            <ul className={styles.focusList}>
              {pillar.focus.map((item) => (
                <li key={item} className={styles.focusItem}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {pillar.gallery && <PillarSlider images={pillar.gallery} label={pillar.name} />}

        <div className={styles.callout} data-reveal="">
          <h3 className={styles.calloutTitle}>{pillar.callout.title}</h3>
          {pillar.callout.body.map((text) => (
            <p key={text.slice(0, 32)} className={styles.calloutBody}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
