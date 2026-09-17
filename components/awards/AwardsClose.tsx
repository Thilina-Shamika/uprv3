import Link from 'next/link';
import { routes } from '@/lib/routes';
import styles from './Awards.module.css';

export default function AwardsClose() {
  return (
    <section className={styles.white}>
      <div className={styles.wrap}>
        <div className={styles.close} data-reveal="">
          <div>
            <p className={styles.closeEyebrow}>Work with us</p>
            <h2 className={styles.closeHeading}>Build award-winning packaging with us</h2>
            <p className={styles.closeBody}>
              Partner with us to reduce virgin plastic in the environment, and get your product
              featured on our platform as a champion of sustainability.
            </p>
          </div>
          <div className={styles.closeActions}>
            <Link href={routes.joinUs} className={styles.closeCta}>
              Join Us <span aria-hidden="true">→</span>
            </Link>
            <Link href={routes.products} className={styles.closeGhost}>
              See products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
