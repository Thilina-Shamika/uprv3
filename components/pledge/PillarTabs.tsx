import { pillars } from '@/lib/pledge';
import styles from './PillarTabs.module.css';

/** Jump links from the hero down to each pillar. */
export default function PillarTabs() {
  return (
    <div className={styles.tabs}>
      {pillars.map((pillar) => (
        <a key={pillar.id} href={`#${pillar.id}`} className={styles.tab}>
          <span className={styles.bar} aria-hidden="true" />
          <span className={styles.num}>{pillar.num}</span>
          <span className={styles.name}>{pillar.tab}</span>
          <span className={styles.summary}>{pillar.summary}</span>
        </a>
      ))}
    </div>
  );
}
