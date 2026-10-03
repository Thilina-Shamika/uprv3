import Link from 'next/link';
import { routes } from '@/lib/routes';
import styles from './News.module.css';

export default function NewsHero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <div className={styles.crumbs}>
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.crumbHere}>News</span>
          </div>
          <p className={styles.eyebrow}>News</p>
          <h1 className={styles.h1}>What&rsquo;s happening at UPR</h1>
          <p className={styles.heroLede}>
            Certifications, awards, partnerships and programmes, as they happen.
          </p>
        </div>
      </div>
    </header>
  );
}
