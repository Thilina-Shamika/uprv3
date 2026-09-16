'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { pillars } from '@/lib/pledge';
import styles from './PillarDock.module.css';

/**
 * Floating pillar switcher. Visible from page load so readers can jump
 * straight to a pillar; highlights the one on screen and steps aside when
 * the footer arrives.
 */
export default function PillarDock() {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = pillars
      .map((p) => document.getElementById(p.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const footer = document.querySelector('footer');
      setVisible(!footer || footer.getBoundingClientRect().top > vh * 0.85);

      let current: string | null = null;
      for (const el of sections) {
        const box = el.getBoundingClientRect();
        if (box.top <= vh * 0.45 && box.bottom > vh * 0.45) current = el.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      className={styles.dock}
      data-visible={visible || undefined}
      aria-label="Jump to a pillar"
      aria-hidden={!visible}
    >
      <ul className={styles.list}>
        {pillars.map((pillar) => {
          const isActive = pillar.id === active;
          return (
            <li key={pillar.id}>
              <a
                href={`#${pillar.id}`}
                className={styles.item}
                data-active={isActive || undefined}
                aria-current={isActive ? 'location' : undefined}
                tabIndex={visible ? undefined : -1}
              >
                <span className={styles.tile}>
                  <Image
                    src={pillar.icon.src}
                    alt=""
                    width={pillar.icon.width}
                    height={pillar.icon.height}
                    sizes="40px"
                    className={styles.icon}
                  />
                </span>
                <span className={styles.label}>{pillar.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
