import Image from 'next/image';
import Link from 'next/link';
import Eyebrow from '@/components/site/Eyebrow';
import styles from './Blog.module.css';

const posts = [
  {
    img: '/assets/hero-growbag.jpg',
    w: 1752,
    h: 898,
    title: 'The circular economy for plastics',
    kicker: 'Circular Economy · 6 min read',
    excerpt:
      'Why moving beyond take–make–dispose is the single biggest lever for reducing virgin polymer in the system.',
  },
  {
    img: '/assets/hero-sprout.jpg',
    w: 1752,
    h: 898,
    title: 'Biodegradable shopping bags buried for three years still work',
    kicker: 'Innovation · 4 min read',
    excerpt:
      'A long-running field study puts common claims about degradable plastics to the test.',
  },
  {
    img: '/assets/award-scrap.png',
    w: 923,
    h: 982,
    title: 'The recycling crisis: learn how to do it right',
    kicker: 'Guides · 5 min read',
    excerpt:
      'Sorting, washing and stream separation — the habits that decide whether a pack is actually recovered.',
  },
  {
    img: '/assets/award-pouch.png',
    w: 1122,
    h: 835,
    title: '6 technologies used to tackle plastic pollution',
    kicker: 'Technology · 7 min read',
    excerpt:
      'From chemical recycling to mono-material barriers, the tools reshaping the packaging industry.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <div className={styles.headMain}>
            <Eyebrow num="04" label="From the Blog" />
            <div className={styles.gap} />
            <h2 className={styles.title}>
              Rethinking plastic, <span className={styles.mark}>one read at a time</span>
            </h2>
          </div>
          <Link href="/blog" className={styles.all}>
            All articles <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.list}>
          {posts.map((post, i) => (
            <Link
              key={post.title}
              href="/blog"
              className={styles.row}
              data-reveal=""
              data-reveal-delay={i * 90}
            >
              <span className={styles.thumb}>
                <Image
                  src={post.img}
                  alt=""
                  width={post.w}
                  height={post.h}
                  className={styles.thumbImg}
                />
              </span>
              <div className={styles.meta}>
                <div className={styles.postTitle}>{post.title}</div>
                <div className={styles.kicker}>{post.kicker}</div>
              </div>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <span className={styles.more}>
                Read more
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
