import Image from 'next/image';
import { overview, pillars } from '@/lib/pledge';
import styles from './Pledge.module.css';

export default function PledgeOverview() {
  return (
    <section id="pillars" className={styles.tint}>
      <div className={styles.wrap}>
        <div className={styles.overviewHead}>
          <div data-reveal="">
            <p className={styles.eyebrow}>Our pledge</p>
            <h2 className={styles.h2}>{overview.heading}</h2>
            <p className={styles.sub}>{overview.subheading}</p>
          </div>
          <div data-reveal="" data-reveal-delay="100">
            {overview.paragraphs.map((text) => (
              <p key={text.slice(0, 32)} className={styles.p}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.cards}>
          {pillars.map((pillar, i) => (
            <a
              key={pillar.id}
              href={`#${pillar.id}`}
              className={styles.card}
              data-reveal=""
              data-reveal-delay={i * 80}
            >
              <span className={styles.tile}>
                <Image
                  src={pillar.icon.src}
                  alt=""
                  width={pillar.icon.width}
                  height={pillar.icon.height}
                  sizes="64px"
                  className={styles.tileImg}
                />
              </span>
              <span>
                <span className={styles.cardNum}>{pillar.num}</span>
                <span className={styles.cardName}>{pillar.name}</span>
                <span className={styles.cardTitle}>{pillar.title}</span>
              </span>
              <span className={styles.cardArrow} aria-hidden="true">
                Read more ↓
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
