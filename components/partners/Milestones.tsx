'use client';

import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { ledger, summarise, tagAccent } from '@/lib/partners';
import styles from './Partners.module.css';

/** Everything a visitor might type: name, place, product, type or figure. */
const haystacks = ledger.map((p) =>
  [p.rank, p.tag, p.name, p.country, p.desc, p.num, 'kilograms'].join(' ').toLowerCase(),
);

export default function Milestones() {
  const [query, setQuery] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const listRef = useRef<HTMLDivElement>(null);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return haystacks.map((h) => !q || h.includes(q));
  }, [query]);
  const shown = matches.filter(Boolean).length;

  // Totals follow the search, so the summary always describes what is on screen.
  const totals = useMemo(() => summarise(ledger.filter((_, i) => matches[i])), [matches]);

  // Filtered-out cards stay mounted (just hidden) so the page-level reveal keeps
  // its handle on them. Once someone is searching they are looking at the list,
  // so every match is shown at rest instead of waiting on a scroll trigger, and
  // the triggers below are re-measured for the new layout.
  useLayoutEffect(() => {
    if (!query && view === 'grid') return;
    const cards = listRef.current?.querySelectorAll<HTMLElement>('[data-reveal]');
    if (cards) gsap.set(cards, { opacity: 1, y: 0 });
    ScrollTrigger.refresh();
  }, [query, view]);

  return (
    <section className={styles.mint} aria-labelledby="ledger-heading">
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
          </div>

          <div className={styles.views} role="group" aria-label="View as">
            <button
              type="button"
              className={styles.viewBtn}
              aria-pressed={view === 'grid'}
              onClick={() => setView('grid')}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="1" y="1" width="6" height="6" rx="1.5" />
                <rect x="9" y="1" width="6" height="6" rx="1.5" />
                <rect x="1" y="9" width="6" height="6" rx="1.5" />
                <rect x="9" y="9" width="6" height="6" rx="1.5" />
              </svg>
              Grid
            </button>
            <button
              type="button"
              className={styles.viewBtn}
              aria-pressed={view === 'list'}
              onClick={() => setView('list')}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="1" y="2" width="14" height="2.4" rx="1.2" />
                <rect x="1" y="6.8" width="14" height="2.4" rx="1.2" />
                <rect x="1" y="11.6" width="14" height="2.4" rx="1.2" />
              </svg>
              List
            </button>
          </div>
        </div>

        <dl className={styles.listTotals} aria-live="polite">
          <div className={styles.listTotalLead}>
            <dt className={styles.listTotalLabel}>Total kilograms</dt>
            <dd className={styles.listTotalValue}>{totals.kilograms.toLocaleString('en-US')}</dd>
            <dd className={styles.listTotalSub}>
              {totals.programmes} {totals.programmes === 1 ? 'programme' : 'programmes'} shown
            </dd>
          </div>
          {totals.byTag.map((entry) => (
            <div key={entry.tag} className={styles.listTotal}>
              <dt className={styles.listTotalLabel}>
                <span className={styles.dot} style={{ background: tagAccent[entry.tag] }} />
                {entry.tag}
              </dt>
              <dd className={styles.listTotalValue}>{entry.companies}</dd>
              <dd className={styles.listTotalSub}>{entry.kilograms.toLocaleString('en-US')} kg</dd>
            </div>
          ))}
        </dl>

        <div ref={listRef} className={view === 'list' ? styles.rowsView : styles.ledger}>
          {shown === 0 && <p className={styles.empty}>No partner matches that search.</p>}
          {ledger.map((partner, i) => (
            <article
              key={partner.rank}
              className={view === 'list' ? styles.rowItem : styles.card}
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
              <div className={styles.nameBlock}>
                <h3 className={styles.name}>{partner.name}</h3>
                <p className={styles.country}>{partner.country}</p>
              </div>
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
