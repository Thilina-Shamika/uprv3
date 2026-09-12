'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './IslandStage.module.css';

const RECOVERED_KG = 22346157;

export default function IslandStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const format = (n: number) => Math.round(n).toLocaleString('en-US');

      if (reduced) {
        if (countRef.current) countRef.current.textContent = format(RECOVERED_KG);
        return;
      }

      // The hero tally runs on load, not on scroll — it is already in view.
      const tally = { n: 0 };
      gsap.to(tally, {
        n: RECOVERED_KG,
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
        <div className={styles.panel}>
          <p ref={countRef} className={styles.count}>
            0
          </p>
          <p className={styles.unit}>KILOGRAMS and Counting...</p>
          <p className={styles.note}>
            of sustainable material put back into production, tracked kilogram by
            kilogram.
          </p>
        </div>
      </div>
    </div>
  );
}
