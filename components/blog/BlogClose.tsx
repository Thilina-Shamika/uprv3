import Link from 'next/link';
import { routes } from '@/lib/routes';
import styles from './Blog.module.css';

export default function BlogClose() {
  return (
    <section className={styles.white}>
      <div className={styles.wrap}>
        <div className={styles.close} data-reveal="">
          <div>
            <p className={styles.closeEyebrow}>Take the next step</p>
            <h2 className={styles.closeHeading}>Reading is a start. Packaging is the change.</h2>
            <p className={styles.closeBody}>
              Move to recycled or biodegradable options with us, and have your contribution measured
              and published on this platform.
            </p>
          </div>
          <div className={styles.closeActions}>
            <Link href={routes.joinUs} className={styles.closeCta}>
              Join Us <span aria-hidden="true">→</span>
            </Link>
            <Link href={routes.partners} className={styles.closeGhost}>
              See our partners
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
