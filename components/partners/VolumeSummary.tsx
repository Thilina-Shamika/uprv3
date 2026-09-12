import { ledgerTotals } from '@/lib/partners';
import styles from './VolumeSummary.module.css';

export default function VolumeSummary() {
  return (
    <section className={styles.section} aria-label="Volumes to date">
      <div className={styles.panel} data-reveal="">
        <div className={styles.row}>
          {ledgerTotals.map((total) => (
            <div key={total.label} className={total.lead ? styles.leadTile : styles.tile}>
              <div className={styles.value}>{total.value}</div>
              <div className={styles.label}>{total.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
