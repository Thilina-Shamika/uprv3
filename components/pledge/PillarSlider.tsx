'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { GalleryImage } from '@/lib/pledge';
import styles from './PillarSlider.module.css';

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Photo slider built on native scroll-snap, so touch swiping and trackpads
 * work without extra code. Arrows and thumbnails drive the same track.
 */
export default function PillarSlider({ images, label }: { images: GalleryImage[]; label: string }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setIndex(Math.round(track.scrollLeft / track.clientWidth));
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Keep the active thumbnail in view without moving the page.
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    const left = thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2;
    strip.scrollTo({ left, behavior: 'smooth' });
  }, [index]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (i + images.length) % images.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <div
      className={styles.slider}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${label} in pictures`}
      data-reveal=""
    >
      <ul
        ref={trackRef}
        className={styles.track}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            goTo(index + 1);
          }
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goTo(index - 1);
          }
        }}
      >
        {images.map((image, i) => (
          <li
            key={image.src}
            className={styles.slide}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${images.length}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 1240px) 92vw, 1240px"
              className={styles.img}
            />
          </li>
        ))}
      </ul>

      <div className={styles.bar}>
        <span className={styles.count} aria-live="polite">
          <b>{pad(index + 1)}</b> / {pad(images.length)}
        </span>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => goTo(index - 1)}
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => goTo(index + 1)}
            aria-label="Next photo"
          >
            →
          </button>
        </div>
      </div>

      <div ref={thumbsRef} className={styles.thumbs}>
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            className={styles.thumb}
            data-active={i === index || undefined}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index || undefined}
            onClick={() => goTo(i)}
          >
            <Image
              src={image.src}
              alt=""
              width={image.width}
              height={image.height}
              sizes="120px"
              className={styles.img}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
