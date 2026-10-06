'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { routes } from '@/lib/routes';
import { PROGRAMME_COUNT, TOTAL_KG } from '@/lib/partners';
import styles from './Ledger.module.css';
import ArrowIcon from '@/components/site/ArrowIcon';

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
        if (countRef.current) countRef.current.textContent = format(TOTAL_KG);
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
        n: TOTAL_KG,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: trigger,
        onUpdate: () => {
          if (countRef.current) countRef.current.textContent = format(tally.n);
        },
        onComplete: () => {
          if (countRef.current) countRef.current.textContent = format(TOTAL_KG);
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
            Real, measurable progress toward a circular economy for plastic — recorded, not rounded
            up.
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
              of sustainable material put back into production, tracked kilogram by kilogram.
            </p>
          </div>
        </div>

        <div className={styles.foot}>
          <p className={styles.footNote}>Across {PROGRAMME_COUNT} partner programmes</p>
          <Link href={routes.pledge} className={styles.footCta}>
            <span>See the ledger</span>
            <ArrowIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
