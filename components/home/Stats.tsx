'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './Stats.module.css';

const RECOVERED_KG = 22346157;

const stats = [
  {
    value: '40%',
    title: 'Recycled content',
    desc: 'of our product is recycled plastic',
  },
  {
    value: '3',
    title: 'Recyclable structures',
    desc: 'PE, PE Plus & PE Plus Xtra',
  },
  {
    value: '20+',
    title: 'Years of expertise',
    desc: "shaping Sri Lanka's plastics industry",
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const ledeRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set([ledeRef.current, gridRef.current], { opacity: 1 });
        if (counterRef.current) {
          counterRef.current.textContent = RECOVERED_KG.toLocaleString('en-US');
        }
        return;
      }

      // One trigger drives the whole section, so the copy, the grid and the
      // count-up stay in step no matter how fast the user scrolls past.
      const trigger = {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
      };

      gsap.to(ledeRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: 'power1.out',
        scrollTrigger: trigger,
      });

      gsap.to(gridRef.current, {
        opacity: 1,
        duration: 0.9,
        delay: 0.15,
        ease: 'power1.out',
        scrollTrigger: trigger,
      });

      const tally = { value: 0 };
      gsap.to(tally, {
        value: RECOVERED_KG,
        duration: 1.8,
        // Cubic ease-out, matching the prototype's 1 - (1 - t)^3 ramp.
        ease: 'power2.out',
        scrollTrigger: trigger,
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(tally.value).toLocaleString('en-US');
          }
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <div ref={ledeRef} className={styles.lede}>
          <p className={styles.eyebrow}>Measured Impact</p>
          <h2 className={styles.heading}>
            Numbers that keep
            <br />
            the loop turning.
          </h2>
          <p className={styles.blurb}>
            Real, measurable progress toward a circular economy for plastic — recorded,
            not rounded up.
          </p>

          <p ref={counterRef} className={styles.counter}>
            0
          </p>
          <p className={styles.unit}>Kilograms</p>
          <p className={styles.unitNote}>
            of sustainable material put back into production, tracked kilogram by
            kilogram.
          </p>

          <p className={styles.programmes}>Across 22 partner programmes</p>
          <a href="#" className={styles.ledger}>
            <span>See the ledger</span>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true">
              <path
                d="M1 6h19M15.2 1L20.8 6l-5.6 5"
                stroke="#ffffff"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.title} className={styles.stat}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statTitle}>{stat.title}</p>
              <p className={styles.statDesc}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
