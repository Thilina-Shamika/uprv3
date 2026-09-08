'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './Island.module.css';

export default function Island() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.fromTo(
        imgRef.current,
        { scale: 1 },
        {
          scale: 1.34,
          ease: 'none',
          scrollTrigger: {
            // Numeric start/end are absolute scroll positions, matching the
            // prototype's `scrollY / max(320, innerHeight * 0.85)` ramp.
            start: 0,
            end: () => Math.max(320, window.innerHeight * 0.85),
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: wrapRef },
  );

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <Image
        ref={imgRef}
        src="/assets/island.png"
        alt="Cross-section of an ocean island: polluted water on one side, thriving reef on the other"
        width={835}
        height={450}
        sizes="(max-width: 819px) 100vw, 1060px"
        className={styles.island}
        preload
      />
    </div>
  );
}
