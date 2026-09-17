import Link from 'next/link';
import { routes } from '@/lib/routes';
import styles from './Partners.module.css';

export default function PartnersClose() {
  return (
    <section className={styles.white}>
      <div className={styles.wrap}>
        <div className={styles.close} data-reveal="">
          <div>
            <p className={styles.closeEyebrow}>Become a partner</p>
            <h2 className={styles.closeHeading}>Join the partners cutting virgin plastic</h2>
            <p className={styles.closeBody}>
              Move to recycled or biodegradable options with us, and have your contribution measured
              and published alongside these organisations.
            </p>
          </div>
          <div className={styles.closeActions}>
            <Link href={routes.joinUs} className={styles.closeCta}>
              Join Us <span aria-hidden="true">→</span>
            </Link>
            <Link href={routes.awards} className={styles.closeGhost}>
              See our awards
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
