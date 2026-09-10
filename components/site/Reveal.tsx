'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

/**
 * Drives every `[data-reveal]` element inside its subtree. Keeping the
 * behaviour here means the sections themselves stay server components and only
 * need to mark up intent with an attribute, matching the prototype.
 *
 * `data-reveal-delay` is read in milliseconds, as in the prototype.
 */
export default function Reveal({
  children,
  y = 26,
  duration = 0.9,
}: {
  children: React.ReactNode;
  /** Travel distance of the rise, in px. The two prototypes differ slightly. */
  y?: number;
  duration?: number;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]');
      gsap.set(targets, { y });
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      targets.forEach((el) => {
        const delay = Number(el.dataset.revealDelay ?? 0) / 1000;
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      // Sections above the fold can settle before images finish loading, which
      // shifts every trigger below them.
      ScrollTrigger.refresh();
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
