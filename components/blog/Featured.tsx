import Image from 'next/image';
import Eyebrow from '@/components/site/Eyebrow';
import { featured, POST_HREF } from '@/lib/blog';
import styles from './Featured.module.css';

export default function Featured() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <Eyebrow num="02" label="Featured" />
          <span className={styles.updated}>Updated weekly</span>
        </div>
        <a href={POST_HREF} className={styles.card} data-reveal="" data-reveal-delay="60">
          <div className={styles.media}>
            <Image
              src={featured.image.src}
              alt={featured.alt}
              fill
              sizes="(max-width: 700px) 100vw, 620px"
              className={styles.img}
            />
            <span className={styles.pill}>Featured</span>
          </div>
          <div className={styles.body}>
            <div className={styles.meta}>
              <span>{featured.category}</span>
              <span className={styles.dash} aria-hidden="true" />
              <span>{featured.date}</span>
              <span className={styles.dash} aria-hidden="true" />
              <span>{featured.read}</span>
            </div>
            <h2 className={styles.title}>{featured.title}</h2>
            <p className={styles.excerpt}>{featured.excerpt}</p>
            <div className={styles.more}>
              Read article
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
