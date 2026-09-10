import styles from './Eyebrow.module.css';

export default function Eyebrow({
  num,
  label,
  translucent = false,
}: {
  num: string;
  label: string;
  translucent?: boolean;
}) {
  return (
    <div className={translucent ? styles.translucent : styles.eyebrow}>
      <span className={styles.num}>{num}</span>
      <span className={styles.text}>{label}</span>
      <span className={styles.ring} aria-hidden="true" />
    </div>
  );
}
