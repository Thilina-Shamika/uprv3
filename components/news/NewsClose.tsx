import Link from 'next/link';
import { routes } from '@/lib/routes';
import styles from './News.module.css';

export default function NewsClose() {
  return (
    <section className={styles.sand}>
      <div className={styles.wrap}>
        <div className={styles.close} data-reveal="">
          <div>
            <p className={styles.closeEyebrow}>Work with us</p>
            <h2 className={styles.closeHeading}>Be part of the next announcement</h2>
            <p className={styles.closeBody}>
              Move to recycled or biodegradable options with us, and have your contribution
              measured and published on this platform.
            </p>
          </div>
          <div className={styles.closeActions}>
            <Link href={routes.joinUs} className={styles.closeCta}>
              Join Us <span aria-hidden="true">→</span>
            </Link>
            <Link href={routes.blog} className={styles.closeGhost}>
              Read the journal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
