import Image from 'next/image';
import { news, NEWS_HREF } from '@/lib/news';
import styles from './News.module.css';

export default function NewsList() {
  return (
    <section className={styles.mint} aria-labelledby="news-heading">
      <div className={styles.wrap}>
        <h2 id="news-heading" className={styles.srOnly}>
          All news
        </h2>

        {news.length === 0 ? (
          <p className={styles.empty}>No news yet. Check back soon.</p>
        ) : (
          <ul className={styles.list}>
            {news.map((item, i) => (
              <li key={item.title} data-reveal="" data-reveal-delay={Math.min(i * 70, 240)}>
                <a href={NEWS_HREF} className={styles.item}>
                  <span className={styles.itemMedia}>
                    {item.image ? (
                      <Image
                        src={item.image.src}
                        alt=""
                        width={item.image.width}
                        height={item.image.height}
                        sizes="(max-width: 860px) 100vw, 420px"
                        className={styles.cover}
                      />
                    ) : (
                      <span className={styles.placeholder}>{item.category}</span>
                    )}
                  </span>
                  <span className={styles.itemBody}>
                    <span className={styles.meta}>
                      {item.category} · {item.date}
                    </span>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemExcerpt}>{item.excerpt}</span>
                    <span className={styles.readMore}>
                      Read more <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
