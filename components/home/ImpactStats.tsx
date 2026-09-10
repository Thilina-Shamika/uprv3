'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import Counter from '@/components/site/Counter';
import Eyebrow from '@/components/site/Eyebrow';
import styles from './ImpactStats.module.css';

const cards = [
  { num: '01', value: 40, suffix: '%', title: 'Recycled content', desc: 'of our product is recycled plastic', pct: 40 },
  { num: '02', value: 3, suffix: '', title: 'Recyclable structures', desc: 'PE, PE Plus & PE Plus Xtra', pct: 100 },
  { num: '03', value: 20, suffix: '+', title: 'Years of expertise', desc: "shaping Sri Lanka's plastics industry", pct: 80 },
];

export default function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const bars = gsap.utils.toArray<HTMLElement>(`.${styles.meterFill}`);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(bars, { scaleX: 1 });
        return;
      }

      bars.forEach((bar, i) => {
        gsap.to(bar, {
          scaleX: 1,
          duration: 1.2,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: bar, start: 'top 92%', once: true },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="impact" ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <Eyebrow num="03" label="By the numbers" />
          <h2 className={styles.title}>
            Numbers that keep <span className={styles.mark}>the loop turning</span>
          </h2>
          <p className={styles.blurb}>
            Real, measurable progress toward a circular economy for plastic — recorded,
            not rounded up.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.feature} data-reveal="">
            <div className={styles.orbit} aria-hidden="true" />
            <div className={styles.kicker}>
              <span className={styles.tick} aria-hidden="true" />
              <span className={styles.kickerText}>Material recovered to date</span>
            </div>
            <div className={styles.bigWrap}>
              <div className={styles.big}>
                <Counter value={22346157} />
              </div>
              <div className={styles.bigCaption}>
                <span className={styles.unit}>KILOGRAMS</span>
                <span className={styles.unitNote}>
                  of sustainable material put back into production, tracked kilogram by
                  kilogram.
                </span>
              </div>
            </div>
            <div className={styles.featureFoot}>
              <span className={styles.note}>Across 22 partner programmes</span>
              <Link href="/partners" className={styles.ledger}>
                See the ledger <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className={styles.column}>
            {cards.map((card, i) => (
              <div
                key={card.num}
                className={styles.card}
                data-reveal=""
                data-reveal-delay={i * 80}
              >
                <span className={styles.cardNum}>{card.num}</span>
                <div className={styles.cardValue}>
                  <Counter value={card.value} />
                  {card.suffix}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTitle}>{card.title}</div>
                  <div className={styles.cardDesc}>{card.desc}</div>
                  <div className={styles.meter}>
                    <span
                      className={styles.meterFill}
                      style={{ width: `${card.pct}%` }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
