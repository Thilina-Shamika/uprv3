'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { routes } from '@/lib/routes';
import styles from './Ledger.module.css';

const RECOVERED_KG = 22346157;

const stats = [
  ['40%', 'Recycled content', 'of our product is recycled plastic'],
  ['3', 'Recyclable structures', 'PE, PE Plus & PE Plus Xtra'],
  ['20+', 'Years of expertise', "shaping Sri Lanka's plastics industry"],
];

export default function Ledger() {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const format = (n: number) => Math.round(n).toLocaleString('en-US');
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set(innerRef.current, { opacity: 1 });
        if (countRef.current) countRef.current.textContent = format(RECOVERED_KG);
        return;
      }

      // One trigger drives the fade and the tally so they stay in step.
      const trigger = { trigger: sectionRef.current, start: 'top 80%', once: true };

      gsap.to(innerRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: 'power1.out',
        scrollTrigger: trigger,
      });

      const tally = { n: 0 };
      gsap.to(tally, {
        n: RECOVERED_KG,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: trigger,
        onUpdate: () => {
          if (countRef.current) countRef.current.textContent = format(tally.n);
        },
        onComplete: () => {
          if (countRef.current) countRef.current.textContent = format(RECOVERED_KG);
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={innerRef} className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Measured Impact</p>
            <h2 className={styles.title}>
              Numbers that keep
              <br />
              the loop turning.
            </h2>
          </div>
          <p className={styles.blurb}>
            Real, measurable progress toward a circular economy for plastic — recorded,
            not rounded up.
          </p>
        </div>

        <div className={styles.panel}>
          <div className={styles.ringA} aria-hidden="true" />
          <div className={styles.ringB} aria-hidden="true" />
          <div className={styles.ringC} aria-hidden="true" />
          <div className={styles.big}>
            <p ref={countRef} className={styles.bigCount}>
              0
            </p>
            <p className={styles.bigUnit}>Kilograms</p>
            <p className={styles.bigNote}>
              of sustainable material put back into production, tracked kilogram by
              kilogram.
            </p>
          </div>
          <div className={styles.trio}>
            {stats.map(([value, title, desc]) => (
              <div key={title} className={styles.stat}>
                <p className={styles.statValue}>{value}</p>
                <p className={styles.statTitle}>{title}</p>
                <p className={styles.statDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.foot}>
          <p className={styles.footNote}>Across 22 partner programmes</p>
          <Link href={routes.pledge} className={styles.footCta}>
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
          </Link>
        </div>
      </div>
    </section>
  );
}
