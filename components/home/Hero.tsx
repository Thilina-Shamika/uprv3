import Link from 'next/link';
import { routes } from '@/lib/routes';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Materials for a Circular Future</p>
      <h1 className={styles.title}>
        Rethinking Plastic.
        <br />
        Designing Tomorrow.
      </h1>
      <p className={styles.sub}>
        Smarter material solutions that help packaging stay useful, recoverable and
        responsible.
      </p>
      <Link href={routes.materials} className={styles.cta}>
        <span>Explore Solutions</span>
        <svg width="26" height="14" viewBox="0 0 26 14" fill="none" aria-hidden="true">
          <path
            d="M1 7h23M18.5 1L24.8 7l-6.3 6"
            stroke="#ffffff"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}
