'use client';

import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { ledger, tagAccent } from '@/lib/partners';
import styles from './Partners.module.css';

/** Everything a visitor might type: name, place, product, type or figure. */
const haystacks = ledger.map((p) =>
  [p.rank, p.tag, p.name, p.country, p.desc, p.num, 'kilograms'].join(' ').toLowerCase(),
);

export default function Milestones() {
  const [query, setQuery] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return haystacks.map((h) => !q || h.includes(q));
  }, [query]);
  const shown = matches.filter(Boolean).length;

  // Filtered-out cards stay mounted (just hidden) so the page-level reveal keeps
  // its handle on them. Once someone is searching they are looking at the list,
  // so every match is shown at rest instead of waiting on a scroll trigger, and
  // the triggers below are re-measured for the new layout.
  useLayoutEffect(() => {
    if (!query) return;
    const cards = listRef.current?.querySelectorAll<HTMLElement>('[data-reveal]');
    if (cards) gsap.set(cards, { opacity: 1, y: 0 });
    ScrollTrigger.refresh();
  }, [query]);

  return (
    <section className={styles.white} aria-labelledby="ledger-heading">
      <div className={styles.wrap}>
        <div className={styles.sectionHead} data-reveal="">
          <p className={styles.eyebrow}>Sustainability milestones</p>
          <h2 id="ledger-heading" className={styles.h2}>
            Every kilogram, accounted for
          </h2>
          <p className={styles.sectionLede}>
            Amount of sustainable material used to date in our production, by partner and product.
          </p>
        </div>

        <div className={styles.toolbar}>
          <label className={styles.search}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4.2-4.2" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search partners, countries or products"
              aria-label="Search partners"
              className={styles.input}
            />
          </label>
          <div className={styles.legend}>
            {Object.entries(tagAccent).map(([label, colour]) => (
              <span key={label} className={styles.legendItem}>
                <span className={styles.dot} style={{ background: colour }} />
                {label}
              </span>
            ))}
            <span className={styles.count} aria-live="polite">
              {shown} {shown === 1 ? 'programme' : 'programmes'}
            </span>
          </div>
        </div>

        <div ref={listRef} className={styles.ledger}>
          {shown === 0 && <p className={styles.empty}>No partner matches that search.</p>}
          {ledger.map((partner, i) => (
            <article
              key={partner.rank}
              className={styles.card}
              hidden={!matches[i]}
              style={{ '--accent': tagAccent[partner.tag] } as CSSProperties}
              data-reveal=""
              data-reveal-delay={Math.min(i * 40, 240)}
            >
              <div className={styles.cardTop}>
                <span className={styles.rank}>{partner.rank}</span>
                <span className={styles.tag}>
                  <span className={styles.dot} />
                  {partner.tag}
                </span>
              </div>
              <span className={styles.logoBox}>
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={300}
                  height={150}
                  sizes="180px"
                  className={styles.logo}
                />
              </span>
              <h3 className={styles.name}>{partner.name}</h3>
              <p className={styles.country}>{partner.country}</p>
              <p className={styles.desc}>{partner.desc}</p>
              <p className={styles.figure}>
                <span className={styles.num}>{partner.num}</span>
                <span className={styles.unit}>kg</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
