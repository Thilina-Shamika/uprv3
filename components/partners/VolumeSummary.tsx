import { ledgerTotals } from '@/lib/partners';
import styles from './Partners.module.css';

export default function VolumeSummary() {
  return (
    <section className={styles.summary} aria-label="Volumes to date">
      <div className={styles.wrap}>
        <p className={styles.summaryLabel}>Volumes to date, by material</p>
        <dl className={styles.totals} data-reveal="">
          {ledgerTotals.map((total) => (
            <div key={total.label} className={total.lead ? styles.totalLead : styles.total}>
              <dt className={styles.totalLabel}>{total.label}</dt>
              <dd className={styles.totalValue}>{total.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
