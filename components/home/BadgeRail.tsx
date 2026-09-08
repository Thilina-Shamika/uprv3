'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { badges } from '@/lib/badges';
import styles from './BadgeRail.module.css';

/** Dock-style falloff: the hovered badge grows most, its neighbours less. */
function scaleFor(distance: number) {
  if (distance === 0) return 1.34;
  if (distance === 1) return 1.14;
  if (distance === 2) return 1.04;
  return 1;
}

export default function BadgeRail() {
  const [hover, setHover] = useState(-1);
  const railRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const highlightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tipRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const t = (seconds: number) => (reduced ? 0 : seconds);

      badges.forEach((_, i) => {
        // No hover means every badge is "far", so all fall back to rest state.
        const distance = hover < 0 ? Infinity : Math.abs(i - hover);
        const active = distance === 0;

        const item = itemRefs.current[i];
        if (item) {
          gsap.to(item, {
            scale: scaleFor(distance),
            duration: t(0.28),
            ease: 'back.out(1.7)',
            overwrite: 'auto',
          });
          // Stacking is instant so a growing badge is never clipped by the next.
          gsap.set(item, { zIndex: distance === 0 ? 3 : distance === 1 ? 2 : 1 });
        }

        gsap.to(highlightRefs.current[i], {
          opacity: active ? 1 : 0,
          duration: t(0.24),
          ease: 'power1.out',
          overwrite: 'auto',
        });

        gsap.to(tipRefs.current[i], {
          opacity: active ? 1 : 0,
          x: active ? 0 : -10,
          duration: t(0.28),
          ease: 'back.out(1.4)',
          overwrite: 'auto',
        });
      });
    },
    { dependencies: [hover], scope: railRef },
  );

  return (
    <>
      <aside ref={railRef} className={styles.rail} aria-label="Certifications">
        <div className={styles.stack}>
          {badges.map((badge, i) => (
            <div
              key={badge.name}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={styles.item}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover((current) => (current === i ? -1 : current))}
            >
              <div
                ref={(el) => {
                  highlightRefs.current[i] = el;
                }}
                className={styles.highlight}
              />
              <Image
                src={badge.src}
                alt={badge.name}
                width={badge.width}
                height={badge.height}
                className={styles.badgeImg}
              />
              <div className={styles.tipAnchor}>
                <div
                  ref={(el) => {
                    tipRefs.current[i] = el;
                  }}
                  className={styles.tip}
                >
                  <div className={styles.arrow} />
                  <div className={styles.card}>
                    <p className={styles.cardName}>{badge.name}</p>
                    <p className={styles.cardDesc}>{badge.desc}</p>
                    <p className={styles.cardTag}>{badge.tag}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <nav aria-label="Certifications" className={styles.mobileBar}>
        {badges.map((badge) => (
          <a key={badge.name} href="#" className={styles.mobileItem}>
            <Image
              src={badge.src}
              alt={badge.name}
              width={badge.width}
              height={badge.height}
              className={styles.mobileImg}
            />
            <span className={styles.mobileLabel}>{badge.name}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
