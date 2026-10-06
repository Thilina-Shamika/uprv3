'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { routes } from '@/lib/routes';
import styles from './Hero.module.css';
import ArrowIcon from '@/components/site/ArrowIcon';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // The headline and button fade out as the page scrolls, leaving the artwork.
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.to(heroRef.current, {
        opacity: 0,
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=360',
          scrub: true,
        },
      });
    },
    { scope: heroRef },
  );

  return (
    <section ref={heroRef} className={styles.hero}>
      <p className={styles.eyebrow}>Products for a Circular Future</p>
      <h1 className={styles.title}>
        Rethinking Plastic.
        <br />
        Designing Tomorrow.
      </h1>
      <p className={styles.sub}>
        Smarter material solutions that help packaging stay useful, recoverable and responsible.
      </p>
      <Link href={routes.products} className={styles.cta}>
        <span>Explore Solutions</span>
        <ArrowIcon size={16} />
      </Link>
    </section>
  );
}
