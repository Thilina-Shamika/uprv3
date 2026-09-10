'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from '@/lib/gsap';
import { pillars, type Pillar } from '@/lib/pledge';
import styles from './Pillars.module.css';

export default function Pillars() {
  const [active, setActive] = useState<Pillar['id']>(pillars[0].id);
  const stackRef = useRef<HTMLDivElement>(null);

  // Scroll-spy: the current pillar is the last one whose top has crossed 45%
  // of the viewport — the bottom edge of the prototype's IntersectionObserver
  // band (rootMargin -30% 0 -55% 0). Picking "last crossed" rather than
  // toggling per card avoids two cards claiming the band at once across the
  // gap between them.
  useGSAP(
    () => {
      const stack = stackRef.current;
      if (!stack) return;
      const cards = Array.from(stack.querySelectorAll<HTMLElement>('article'));
      const pick = () => {
        const line = window.innerHeight * 0.45;
        let current = cards[0];
        for (const card of cards) {
          if (card.getBoundingClientRect().top <= line) current = card;
        }
        setActive(current.id as Pillar['id']);
      };
      ScrollTrigger.create({
        trigger: stack,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: pick,
        onRefresh: pick,
      });
    },
    { scope: stackRef },
  );

  return (
    <>
      <div className={styles.ghost} aria-hidden="true">
        <div className={styles.ghostWord}>Our pledge</div>
      </div>
      <section className={styles.section}>
        <div className={styles.inner}>
          <nav className={styles.rail} aria-label="Pledge pillars">
            <div className={styles.railLabel}>Four pillars</div>
            {pillars.map((pillar) => (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className={styles.railItem}
                aria-current={active === pillar.id ? 'true' : undefined}
                onClick={() => setActive(pillar.id)}
              >
                <span className={styles.railNum}>{pillar.num}</span>
                <span className={styles.railName}>{pillar.title}</span>
              </a>
            ))}
          </nav>

          <div ref={stackRef} className={styles.stack}>
            {pillars.map((pillar) => (
              <article
                key={pillar.id}
                id={pillar.id}
                className={styles[pillar.theme]}
                data-reveal=""
              >
                <div className={styles.index} aria-hidden="true">
                  {pillar.num}
                </div>
                <div className={styles.body}>
                  <div className={styles.main}>
                    <div className={styles.kickerRow}>
                      <span className={styles.badge}>{pillar.num}</span>
                      <span className={styles.kicker}>Pillar</span>
                    </div>
                    <h3 className={styles.title}>{pillar.title}</h3>
                    <p className={styles.lede}>{pillar.lede}</p>
                    <p className={styles.detail}>{pillar.detail}</p>
                    <span className={styles.soon}>
                      <span className={styles.soonRule} aria-hidden="true" />
                      Detail page coming soon
                    </span>
                  </div>
                  <div className={styles.aside}>
                    <div className={styles.plate}>
                      <Image
                        src={pillar.icon.src}
                        alt={pillar.title}
                        width={pillar.icon.width}
                        height={pillar.icon.height}
                        sizes="168px"
                        className={styles.icon}
                      />
                    </div>
                    <div className={styles.specs}>
                      {pillar.specs.map(([label, value]) => (
                        <div key={label} className={styles.spec}>
                          <span className={styles.specLabel}>{label}</span>
                          <span className={styles.specValue}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
