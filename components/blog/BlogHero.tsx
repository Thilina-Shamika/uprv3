import Image from 'next/image';
import Link from 'next/link';
import { featured, postHref } from '@/lib/blog';
import { routes } from '@/lib/routes';
import styles from './Blog.module.css';
import ArrowIcon from '@/components/site/ArrowIcon';

/** Intro on the left, the featured article on the right. */
export default function BlogHero() {
  const image = featured.image;
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <div className={styles.crumbs}>
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.crumbHere}>Journal</span>
          </div>
          <p className={styles.eyebrow}>Journal</p>
          <h1 className={styles.h1}>Rethinking plastic, one read at a time</h1>
          <p className={styles.heroLede}>
            Research, guides and field notes on recycling, biodegradable materials and the circular
            economy for plastic.
          </p>
        </div>

        <Link href={postHref(featured)} className={styles.featured}>
          <span className={styles.featuredMedia}>
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 980px) 100vw, 620px"
                preload
                className={styles.cover}
              />
            ) : (
              <span className={styles.placeholder}>{featured.category}</span>
            )}
            <span className={styles.badge}>Featured</span>
          </span>
          <span className={styles.featuredBody}>
            <span className={styles.meta}>
              {featured.category} · {featured.date} · {featured.read}
            </span>
            <span className={styles.featuredTitle}>{featured.title}</span>
            <span className={styles.featuredExcerpt}>{featured.excerpt}</span>
            <span className={styles.readMore}>
              Read article{' '}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}
