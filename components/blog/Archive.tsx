'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Eyebrow from '@/components/site/Eyebrow';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { categories, POST_HREF, posts } from '@/lib/blog';
import styles from './Archive.module.css';

export default function Archive() {
  const [category, setCategory] = useState('All');
  const listRef = useRef<HTMLDivElement>(null);
  const shown = posts.filter((p) => category === 'All' || p.category === category).length;

  // Filtered-out rows stay mounted (just hidden) so the page-level reveal keeps
  // its handle on them. Once someone filters, the matches are shown at rest and
  // the scroll triggers are re-measured for the shorter list.
  const hasFiltered = useRef(false);
  useLayoutEffect(() => {
    if (!hasFiltered.current) return;
    const rows = listRef.current?.querySelectorAll<HTMLElement>('[data-reveal]');
    if (rows) gsap.set(rows, { opacity: 1, y: 0 });
    ScrollTrigger.refresh();
  }, [category]);

  return (
    <>
      <div className={styles.ghost} aria-hidden="true">
        <div className={styles.ghostWord}>Archive</div>
      </div>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.head} data-reveal="">
            <div className={styles.headMain}>
              <Eyebrow num="03" label="All articles" />
              <h2 className={styles.title}>
                The <span className={styles.mark}>archive.</span>
              </h2>
            </div>
            <span className={styles.count} aria-live="polite">
              {shown} {shown === 1 ? 'article' : 'articles'}
            </span>
          </div>

          <div className={styles.chips} data-reveal="" data-reveal-delay="60">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={styles.chip}
                aria-pressed={category === c}
                onClick={() => {
                  hasFiltered.current = true;
                  setCategory(c);
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div ref={listRef} className={styles.list}>
            {posts.map((post, i) => (
              <a
                key={post.title}
                href={POST_HREF}
                className={styles.row}
                hidden={category !== 'All' && post.category !== category}
                data-reveal=""
                data-reveal-delay={Math.min(60 + i * 60, 240)}
              >
                <span className={styles.thumb}>
                  {post.image ? (
                    <Image
                      src={post.image.src}
                      alt={post.title}
                      fill
                      sizes="172px"
                      className={styles.thumbImg}
                    />
                  ) : (
                    <span className={styles.placeholder}>
                      Image
                      <br />
                      to come
                    </span>
                  )}
                </span>
                <span className={styles.text}>
                  <span className={styles.postTitle}>{post.title}</span>
                  <span className={styles.meta}>
                    <span className={styles.cat}>{post.category}</span>
                    <span className={styles.dash} aria-hidden="true" />
                    <span>{post.date}</span>
                    <span className={styles.dash} aria-hidden="true" />
                    <span>{post.read}</span>
                  </span>
                </span>
                <span className={styles.excerpt}>{post.excerpt}</span>
                <span className={styles.read}>
                  Read article
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
