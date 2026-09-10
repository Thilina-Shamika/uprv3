'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PARTNER_INITIAL, PARTNER_PAGE, partners } from '@/lib/partners';
import { routes } from '@/lib/routes';
import styles from './PartnerLedger.module.css';

export default function PartnerLedger() {
  const [shown, setShown] = useState(PARTNER_INITIAL);
  const remaining = partners.length - shown;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Our Partners</p>
            <h2 className={styles.title}>
              The programmes
              <br />
              behind the numbers.
            </h2>
          </div>
          <Link href={routes.partners} className={styles.headLink}>
            See the full ledger
          </Link>
        </div>

        <div className={styles.grid}>
          {partners.slice(0, shown).map((partner) => (
            <div key={partner.rank} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.rank}>{partner.rank}</span>
                <span className={styles.tag}>{partner.tag}</span>
              </div>
              <span className={styles.logoBox}>
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="180px"
                  style={{ padding: '12px 16px' }}
                  className={styles.logo}
                />
              </span>
              <div className={styles.meta}>
                <span className={styles.name}>{partner.name}</span>
                <span className={styles.country}>{partner.country}</span>
              </div>
              <p className={styles.desc}>{partner.desc}</p>
              <div className={styles.figure}>
                <span className={styles.num}>{partner.num}</span>
                <span className={styles.numUnit}>kilograms</span>
              </div>
            </div>
          ))}
        </div>

        {remaining > 0 && (
          <div className={styles.more}>
            <button
              type="button"
              className={styles.moreBtn}
              onClick={() =>
                setShown((current) =>
                  Math.min(partners.length, current + PARTNER_PAGE),
                )
              }
            >
              <span>Load more partners</span>
              <span className={styles.moreCount}>
                +{Math.min(PARTNER_PAGE, remaining)}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
