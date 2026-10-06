import Image from 'next/image';
import Link from 'next/link';
import { news, NEWS_HREF } from '@/lib/news';
import { routes } from '@/lib/routes';
import styles from './NewsStrip.module.css';
import ArrowIcon from '@/components/site/ArrowIcon';

/** The three most recent items; the full list lives on the news page. */
const latest = news.slice(0, 3);

export default function NewsStrip() {
  if (latest.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Latest news</p>
            <h2 className={styles.title}>
              What&rsquo;s happening
              <br />
              at UPR.
            </h2>
          </div>
          <Link href={routes.news} className={styles.headLink}>
            See all news
          </Link>
        </div>

        <div className={styles.grid}>
          {latest.map((item) => (
            <Link key={item.title} href={`${routes.news}${NEWS_HREF}`} className={styles.card}>
              <span className={styles.media}>
                {item.image ? (
                  <Image
                    src={item.image.src}
                    alt=""
                    width={item.image.width}
                    height={item.image.height}
                    sizes="(max-width: 900px) 100vw, 380px"
                    className={styles.img}
                  />
                ) : (
                  <span className={styles.placeholder}>{item.category}</span>
                )}
              </span>
              <span className={styles.meta}>
                {item.category} · {item.date}
              </span>
              <span className={styles.cardTitle}>{item.title}</span>
              <span className={styles.excerpt}>{item.excerpt}</span>
              <span className={styles.more}>
                Read more{' '}
                <span aria-hidden="true">
                  <ArrowIcon />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
