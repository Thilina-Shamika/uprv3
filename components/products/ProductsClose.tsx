import Link from 'next/link';
import { routes } from '@/lib/routes';
import styles from './Products.module.css';

export default function ProductsClose() {
  return (
    <section className={styles.white}>
      <div className={styles.wrap}>
        <div className={styles.close} data-reveal="">
          <div>
            <p className={styles.closeEyebrow}>Work with us</p>
            <h2 className={styles.closeHeading}>Not sure which product you need?</h2>
            <p className={styles.closeBody}>
              Partner with us to reduce virgin plastic in the environment, and get your product
              featured on our platform as a champion of sustainability.
            </p>
          </div>
          <Link href={routes.joinUs} className={styles.closeCta}>
            Ask us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
