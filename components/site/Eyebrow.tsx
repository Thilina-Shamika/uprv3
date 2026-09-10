import styles from './Eyebrow.module.css';

export default function Eyebrow({
  num,
  label,
  centred = false,
  onGreen = false,
  ring = true,
  className = '',
}: {
  num: string;
  label: string;
  centred?: boolean;
  onGreen?: boolean;
  /** The prototype omits the sweeping ring on a couple of pills. */
  ring?: boolean;
  className?: string;
}) {
  const base = onGreen ? styles.onGreen : styles.eyebrow;
  return (
    <div
      className={`${base} ${centred ? styles.centred : ''} ${className}`.trim()}
    >
      <span className={styles.num}>{num}</span>
      <span className={styles.text}>{label}</span>
      {ring && <span className={styles.ring} aria-hidden="true" />}
    </div>
  );
}
