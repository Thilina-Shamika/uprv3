'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from '@/lib/gsap';
import styles from './Nav.module.css';

export const navLinks = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/materials', label: 'Materials', key: 'materials' },
  { href: '/pledge', label: 'Our Pledge', key: 'pledge' },
  { href: '/awards', label: 'Awards & Accolades', key: 'awards' },
  { href: '/partners', label: 'Partners', key: 'partners' },
  { href: '/blog', label: 'Blog', key: 'blog' },
] as const;

export type NavKey = (typeof navLinks)[number]['key'];

export default function Nav({ active }: { active: NavKey }) {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Condenses the bar past 24px of scroll, as the prototype's listener did.
    const trigger = ScrollTrigger.create({
      start: 24,
      end: 'max',
      onToggle: (self) =>
        navRef.current?.setAttribute('data-scrolled', String(self.isActive)),
    });
    return () => trigger.kill();
  });

  return (
    <nav ref={navRef} className={styles.nav} data-scrolled="false">
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/assets/logo-upr.png"
          alt="Use Plastic Responsibly"
          width={572}
          height={192}
          className={styles.logo}
          preload
        />
      </Link>
      <div className={styles.links}>
        {navLinks.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={styles.link}
            data-active={String(item.key === active)}
          >
            <span>{item.label}</span>
            <span className={styles.line} aria-hidden="true" />
          </Link>
        ))}
      </div>
      <Link href="/join-us" className={styles.cta}>
        Join Us <span aria-hidden="true">→</span>
      </Link>
    </nav>
  );
}
