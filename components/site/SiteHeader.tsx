'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { contact, primaryNav, routes } from '@/lib/routes';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Same behaviour as the home page menu: the page behind stays put while the
  // drawer is open, and Escape always closes it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className={styles.header}>
        <Link href={routes.home} className={styles.logoLink}>
          <Image
            src="/assets/logo-upr.png"
            alt="Use Plastic Responsibly — Inspired by Polydime"
            width={572}
            height={192}
            className={styles.logo}
            preload
          />
        </Link>

        <nav className={styles.nav}>
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
          <Link href={routes.joinUs} className={styles.joinBtn}>
            Join Us
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          className={styles.burger}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Kept outside the header: its backdrop-filter would otherwise become the
          containing block for these fixed layers and clip them to the bar. */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className={styles.overlay}
        data-open={String(open)}
        onClick={() => setOpen(false)}
      />

      <aside aria-label="Menu" className={styles.drawer} data-open={String(open)}>
        <div className={styles.drawerHead}>
          <span className={styles.drawerLabel}>Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            className={styles.close}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.drawerLink}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={routes.joinUs}
          className={styles.drawerJoin}
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        >
          Join Us
        </Link>

        <div className={styles.drawerFoot}>
          <a
            href={`mailto:${contact.email}`}
            className={styles.drawerEmail}
            tabIndex={open ? 0 : -1}
          >
            {contact.email}
          </a>
          <span>{contact.phone}</span>
        </div>
      </aside>
    </>
  );
}
