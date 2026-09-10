import Link from 'next/link';
import HomeHeader from '@/components/home/HomeHeader';
import HomeFooter from '@/components/home/HomeFooter';
import { routes } from '@/lib/routes';
import styles from './ComingSoon.module.css';

/**
 * Stand-in for routes whose designs exist in the handoff bundle but have not
 * been built yet. Keeps every navigation link resolving instead of 404ing.
 */
export default function ComingSoon({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div id="top" className={styles.page}>
      <HomeHeader />
      <main className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.body}>{body}</p>
          <div className={styles.actions}>
            <Link href={routes.materials} className={styles.primary}>
              Explore Materials
            </Link>
            <Link href={routes.home} className={styles.secondary}>
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <HomeFooter />
    </div>
  );
}
