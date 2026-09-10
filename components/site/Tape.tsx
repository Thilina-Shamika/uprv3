import styles from './Tape.module.css';

export default function Tape({
  label,
  items,
  ariaLabel,
}: {
  label: string;
  items: string[];
  ariaLabel?: string;
}) {
  return (
    <section className={styles.tape} aria-label={ariaLabel ?? label}>
      <div className={styles.row}>
        <div className={styles.label}>
          <span className={styles.blip} aria-hidden="true" />
          <span className={styles.labelText}>{label}</span>
        </div>
        <div className={styles.viewport}>
          <div className={styles.track} aria-hidden="true">
            {/* Duplicated so the marquee wraps without a visible seam. */}
            {[...items, ...items].map((item, i) => (
              <span key={`${item}-${i}`} className={styles.item}>
                {item}
                <span className={styles.diamond}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
