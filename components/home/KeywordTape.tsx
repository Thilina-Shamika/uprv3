import Link from 'next/link';
import styles from './KeywordTape.module.css';

const ticks = [
  { num: '01', label: 'Rethink Plastic', meta: '22,346,157 KG', href: '#circular' },
  { num: '02', label: 'Recycle', meta: '3 structures', href: '#materials' },
  { num: '03', label: 'Re-make', meta: '40% recycled', href: '#circular' },
  { num: '04', label: 'Circular Economy', meta: '6 stages', href: '#circular' },
  { num: '05', label: 'Net Zero', meta: 'in progress', href: '#join' },
  { num: '06', label: 'Resource Efficient', meta: '20+ yrs', href: '#join' },
  { num: '07', label: 'Sustainable Manufacturing', meta: 'Colombo', href: '#join' },
  { num: '08', label: 'Responsible Consumption', meta: '14 partners', href: '#join' },
];

export default function KeywordTape() {
  return (
    <section className={styles.band} aria-label="Sustainability themes">
      <div className={styles.row}>
        <div className={styles.label}>
          <span className={styles.blip} aria-hidden="true" />
          <span className={styles.labelText}>What we stand for</span>
        </div>
        <div className={styles.viewport}>
          <div className={styles.track}>
            {ticks.map((tick) => (
              <Link key={tick.num} href={tick.href} className={styles.tick}>
                <span className={styles.tickNum}>{tick.num}</span>
                <span className={styles.tickLabel}>{tick.label}</span>
                <span className={styles.tickMeta}>{tick.meta}</span>
              </Link>
            ))}
            {/* Duplicate pass keeps the -50% loop seamless. */}
            {ticks.map((tick) => (
              <span key={`${tick.num}-dup`} className={styles.tick} aria-hidden="true">
                <span className={styles.tickNum}>{tick.num}</span>
                <span className={styles.tickLabel}>{tick.label}</span>
                <span className={styles.tickMeta}>{tick.meta}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
