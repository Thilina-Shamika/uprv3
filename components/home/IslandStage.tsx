'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { TOTAL_KG } from '@/lib/partners';
import styles from './IslandStage.module.css';

export default function IslandStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const format = (n: number) => Math.round(n).toLocaleString('en-US');

      if (reduced) {
        if (countRef.current) countRef.current.textContent = format(TOTAL_KG);
        return;
      }

      // The artwork sets the section's height, so every trigger below it is
      // re-measured once the image has loaded.
      const art = stageRef.current?.querySelector('img');
      if (art && !art.complete) {
        art.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
      }

      // The hero tally runs on load, not on scroll — it is already in view.
      const tally = { n: 0 };
      gsap.to(tally, {
        n: TOTAL_KG,
        duration: 2,
        delay: 0.35,
        // Cubic ease-out, the prototype's 1 - (1 - t)^3.
        ease: 'power2.out',
        onUpdate: () => {
          if (countRef.current) countRef.current.textContent = format(tally.n);
        },
      });
    },
    { scope: stageRef },
  );

  return (
    <div ref={stageRef} className={styles.stage}>
      <Image
        src="/assets/island.png"
        alt="Cross-section of an ocean island: polluted water on one side, thriving reef on the other"
        width={835}
        height={450}
        sizes="(max-width: 819px) 100vw, 1400px"
        className={styles.island}
        preload
      />
      <div className={styles.card}>
        <div
          className={styles.panel}
          style={{
            backdropFilter: 'blur(16px) saturate(1.3)',
            WebkitBackdropFilter: 'blur(16px) saturate(1.3)',
          }}
        >
          <p ref={countRef} className={styles.count}>
            0
          </p>
          <p className={styles.unit}>KILOGRAMS and Counting...</p>
          <p className={styles.note}>
            of sustainable material put back into production, tracked kilogram by kilogram.
          </p>
        </div>
      </div>
    </div>
  );
}
