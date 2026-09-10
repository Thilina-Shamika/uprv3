'use client';

import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import Eyebrow from '@/components/site/Eyebrow';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { ledgerTotals, partners, tagAccent } from '@/lib/partners';
import styles from './Milestones.module.css';

/** Everything a visitor might type: name, place, product, type or figure. */
const haystacks = partners.map((p) =>
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
    <>
      <div className={styles.ghost} aria-hidden="true">
        <div className={styles.ghostWord}>Together</div>
      </div>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.head} data-reveal="">
            <div className={styles.headMain}>
              <Eyebrow num="04" label="Sustainability milestones" />
              <h2 className={styles.title}>
                Every kilogram, <span className={styles.mark}>accounted for.</span>
              </h2>
            </div>
            <p className={styles.headCopy}>
              Amount of sustainable material used to date in our production, by partner
              and product.
            </p>
          </div>

          <div className={styles.totals} data-reveal="" data-reveal-delay="60">
            <div className={styles.totalsRow}>
              {ledgerTotals.map((total) => (
                <div key={total.label} className={total.lead ? styles.leadTile : styles.tile}>
                  <div className={styles.tileValue}>{total.value}</div>
                  <div className={styles.tileLabel}>{total.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.searchRow}>
            <label className={styles.search}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6c8175"
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
            <div className={styles.meta} aria-live="polite">
              {shown} {shown === 1 ? 'programme' : 'programmes'}
            </div>
          </div>

          <div className={styles.legendRow}>
            <div className={styles.meta}>Partner ledger · ranked by volume</div>
            <div className={styles.legend}>
              {Object.entries(tagAccent).map(([label, colour]) => (
                <span key={label} className={styles.legendItem}>
                  <span className={styles.swatch} style={{ background: colour }} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div ref={listRef} className={styles.list}>
            {shown === 0 && <div className={styles.empty}>No partner matches that search.</div>}
            {partners.map((partner, i) => (
              <div
                key={partner.rank}
                className={styles.card}
                hidden={!matches[i]}
                style={{ '--accent': tagAccent[partner.tag] } as CSSProperties}
                data-reveal=""
                data-reveal-delay={Math.min(i * 40, 240)}
              >
                <div className={styles.cardHead}>
                  <span className={styles.rank}>{partner.rank}</span>
                  <span className={styles.tag}>{partner.tag}</span>
                </div>
                <span className={styles.logoBox}>
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={300}
                    height={150}
                    sizes="190px"
                    className={styles.logo}
                  />
                </span>
                <div className={styles.nameBlock}>
                  <span className={styles.name}>{partner.name}</span>
                  <span className={styles.country}>{partner.country}</span>
                </div>
                <p className={styles.desc}>{partner.desc}</p>
                <div className={styles.figure}>
                  <span className={styles.num}>{partner.num}</span>
                  <span className={styles.unit}>kilograms</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
