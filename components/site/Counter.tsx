'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

/**
 * Counts up to `value` when scrolled into view. Values of 1000 or more are
 * thousands-separated, matching the prototype's formatter.
 */
export default function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const format = (n: number) =>
        value >= 1000 ? Math.floor(n).toLocaleString('en-US') : String(Math.floor(n));

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = format(value);
        return;
      }

      const tally = { n: 0 };
      gsap.to(tally, {
        n: value,
        duration: 1.9,
        // Cubic ease-out — the prototype's 1 - (1 - t)^3.
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate: () => {
          el.textContent = format(tally.n);
        },
        onComplete: () => {
          el.textContent = format(value);
        },
      });
    },
    { scope: ref },
  );

  return <span ref={ref}>0</span>;
}
