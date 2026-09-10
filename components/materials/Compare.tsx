import Image from 'next/image';
import styles from './Compare.module.css';

const grades = ['PE', 'PE Plus', 'PE Plus Xtra'];

const rows = [
  { label: 'Structure', values: ['Single polymer', 'Multi-polymer laminate', 'Metalised barrier laminate'] },
  { label: 'Barrier level', values: ['Standard', 'Enhanced', 'High (metalised)'] },
  { label: 'Recyclable', values: ['Yes', 'Yes', 'Yes'] },
  { label: 'Recycled content', values: ['Up to 40%', 'Up to 40%', 'Available on request'] },
  {
    label: 'Typical use',
    values: [
      'Everyday packaging, liners, bags',
      'Demanding retail packaging',
      'Premium food & personal care',
    ],
  },
  { label: 'Print', values: ['Surface & reverse', 'Reverse print', 'Reverse print, high definition'] },
];

export default function Compare() {
  return (
    <section id="compare" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <h2 className={styles.title}>Compare the grades at a glance</h2>
          <div className={styles.headAside}>
            <p className={styles.headCopy}>
              Same recyclable intent, different barrier and performance. Pick the
              lightest structure that does the job.
            </p>
            <Image
              src="/assets/mark-40-scrap-v2.png"
              alt="Contains 40% scrap mark"
              width={573}
              height={568}
              className={styles.mark}
            />
          </div>
        </div>

        <div className={styles.table} data-reveal="" data-reveal-delay="60">
          <div className={styles.headRow}>
            <span className={styles.colLabel}>Property</span>
            {grades.map((label) => (
              <span key={label} className={styles.colHead}>
                {label}
              </span>
            ))}
          </div>
          {rows.map((row) => (
            <div key={row.label} className={styles.bodyRow}>
              <span className={styles.rowLabel}>{row.label}</span>
              {row.values.map((value, i) => (
                <span key={i} className={styles.cell}>
                  {value}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
