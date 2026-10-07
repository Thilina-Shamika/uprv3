import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '@/components/site/ArrowIcon';
import { posts, postHref } from '@/lib/blog';
import { routes } from '@/lib/routes';
/* Shares the news strip's styling: the two sections are the same card row. */
import styles from './NewsStrip.module.css';

/** The three most recent articles; the full list lives on the journal page. */
const latest = posts.slice(0, 3);

export default function BlogStrip() {
  if (latest.length === 0) return null;

  return (
    <section className={styles.sectionAlt}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>From the journal</p>
            <h2 className={styles.title}>
              Reading on
              <br />
              responsible plastic.
            </h2>
          </div>
          <Link href={routes.blog} className={styles.headLink}>
            Read the journal
          </Link>
        </div>

        <div className={styles.grid}>
          {latest.map((post) => (
            <Link key={post.slug} href={postHref(post)} className={styles.card}>
              <span className={styles.media}>
                {post.image ? (
                  <Image
                    src={post.image.src}
                    alt=""
                    width={post.image.width}
                    height={post.image.height}
                    sizes="(max-width: 900px) 100vw, 380px"
                    className={styles.img}
                  />
                ) : (
                  <span className={styles.placeholder}>{post.category}</span>
                )}
              </span>
              <span className={styles.meta}>
                {post.category} · {post.date} · {post.read}
              </span>
              <span className={styles.cardTitle}>{post.title}</span>
              <span className={styles.excerpt}>{post.excerpt}</span>
              <span className={styles.more}>
                Read article{' '}
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
