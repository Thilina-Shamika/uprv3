'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { categories, POST_HREF, posts } from '@/lib/blog';
import styles from './Blog.module.css';

export default function Archive() {
  const [category, setCategory] = useState('All');
  const listRef = useRef<HTMLDivElement>(null);
  const shown = posts.filter((p) => category === 'All' || p.category === category).length;

  // Filtered-out cards stay mounted (just hidden) so the page-level reveal keeps
  // its handle on them. Once someone filters, the matches are shown at rest and
  // the scroll triggers are re-measured for the shorter list.
  const hasFiltered = useRef(false);
  useLayoutEffect(() => {
    if (!hasFiltered.current) return;
    const cards = listRef.current?.querySelectorAll<HTMLElement>('[data-reveal]');
    if (cards) gsap.set(cards, { opacity: 1, y: 0 });
    ScrollTrigger.refresh();
  }, [category]);

  return (
    <section className={styles.white} aria-labelledby="archive-heading">
      <div className={styles.wrap}>
        <div className={styles.archiveHead} data-reveal="">
          <div>
            <p className={styles.eyebrow}>All articles</p>
            <h2 id="archive-heading" className={styles.h2}>
              The archive
            </h2>
          </div>
          <span className={styles.count} aria-live="polite">
            {shown} {shown === 1 ? 'article' : 'articles'}
          </span>
        </div>

        <div className={styles.chips} role="group" aria-label="Filter by category">
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

        <div ref={listRef} className={styles.grid}>
          {posts.map((post, i) => (
            <a
              key={post.title}
              href={POST_HREF}
              className={styles.post}
              hidden={category !== 'All' && post.category !== category}
              data-reveal=""
              data-reveal-delay={Math.min(i * 60, 240)}
            >
              <span className={styles.postMedia}>
                {post.image ? (
                  <Image
                    src={post.image.src}
                    alt=""
                    width={post.image.width}
                    height={post.image.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 400px"
                    className={styles.cover}
                  />
                ) : (
                  <span className={styles.placeholder}>{post.category}</span>
                )}
              </span>
              <span className={styles.meta}>
                {post.category} · {post.date} · {post.read}
              </span>
              <span className={styles.postTitle}>{post.title}</span>
              <span className={styles.postExcerpt}>{post.excerpt}</span>
              <span className={styles.readMore}>
                Read article <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
