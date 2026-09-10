import { contact } from '@/lib/routes';
import styles from './HeroActions.module.css';

export default function HeroActions() {
  return (
    <div className={styles.actions}>
      <a href={contact.phoneHref} className={styles.primary}>
        Call us now
        <span className={styles.primaryIcon} aria-hidden="true">
          ↗
        </span>
      </a>
      <a href="#message" className={styles.secondary}>
        Send a message
      </a>
    </div>
  );
}
