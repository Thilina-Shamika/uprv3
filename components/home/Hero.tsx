'use client';

import { Fragment, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './Hero.module.css';

type Solution = { href: string; mark: string; w: number; h: number; name: string; grow: number };

const recyclable: Solution[] = [
  { href: '/materials', mark: '/assets/mark-pe-white.png', w: 1600, h: 1418, name: 'PE', grow: 1 },
  { href: '/materials', mark: '/assets/mark-pe-plus-white.png', w: 1600, h: 1649, name: 'PE Plus', grow: 1 },
  { href: '/materials', mark: '/assets/mark-pe-plus-xtra-white.png', w: 1600, h: 1649, name: 'PE Plus Xtra', grow: 1 },
];

const innovations: Solution[] = [
  { href: '/pledge', mark: '/assets/mark-biocomp-white.png', w: 1600, h: 897, name: 'Biocomp', grow: 1.25 },
  { href: '/materials', mark: '/assets/mark-ecoshield-white.png', w: 1600, h: 969, name: 'EcoShield', grow: 1.4 },
  { href: '/materials', mark: '/assets/mark-ecopure-white.png', w: 1600, h: 437, name: 'Eco Pure', grow: 1.5 },
];

function SolutionGroup({
  label,
  items,
  groupId,
}: {
  label: string;
  items: Solution[];
  groupId: string;
}) {
  return (
    <div className={styles.group} data-group={groupId}>
      <div className={styles.groupLabel}>{label}</div>
      <div className={styles.groupRow}>
        {items.map((item, i) => (
          <Fragment key={item.name}>
            {i > 0 && <span className={styles.divider} aria-hidden="true" />}
            <Link
              href={item.href}
              className={styles.sol}
              style={{ flexGrow: item.grow }}
            >
              <span className={styles.solBody}>
                <Image
                  src={item.mark}
                  alt={`${item.name} mark`}
                  width={item.w}
                  height={item.h}
                  className={styles.solMark}
                />
                <span className={styles.solName}>{item.name}</span>
              </span>
              <span className={styles.solArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      // Mirrors the prototype's staggered CSS animation delays as one timeline.
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      const rise = { opacity: 0, y: 20 };
      const word = { opacity: 0, y: 26 };

      tl.from(`.${styles.eyebrow}`, { ...rise, duration: 0.8 }, 0.15)
        .from(`.${styles.titleTop}`, { ...word, duration: 0.9 }, 0.3)
        .from(`.${styles.titleBottom}`, { ...word, duration: 0.9 }, 0.52)
        .from(`.${styles.actions}`, { ...rise, duration: 0.8 }, 0.78)
        .from(`.${styles.strip}`, { ...rise, duration: 1 }, 0.95)
        .from('[data-group="1"] > div:first-child', { ...rise, duration: 0.7 }, 1.05)
        .from('[data-group="1"] a', { ...rise, duration: 0.7, stagger: 0.08 }, 1.15)
        .from('[data-group="2"] > div:first-child', { ...rise, duration: 0.7 }, 1.2)
        .from('[data-group="2"] a', { ...rise, duration: 0.7, stagger: 0.08 }, 1.39);
    },
    { scope: heroRef },
  );

  return (
    <header id="top" ref={heroRef} className={styles.hero}>
      <div className={styles.bgWrap}>
        <Image
          src="/assets/hero-ocean-split.png"
          alt=""
          width={1672}
          height={941}
          className={styles.bg}
          preload
        />
        <div className={styles.scrimSide} />
        <div className={styles.scrimVert} />
      </div>

      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowText}>Inspired by Polydime · Sri Lanka</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleTop}>
            Plastic isn&apos;t
            <br />
            the problem.
          </span>
          <span className={styles.titleBottom}>What happens to it next is.</span>
        </h1>

        <div className={styles.actions}>
          <Link href="/materials" className={styles.primary}>
            Discover Possibilities <span aria-hidden="true">→</span>
          </Link>
          <Link href="/pledge" className={styles.secondary}>
            Our Pledge
          </Link>
        </div>

        <div className={styles.strip}>
          <div className={styles.stripIntro}>
            <span className={styles.stripRule} aria-hidden="true" />
            <div className={styles.stripTitle}>Our material solutions</div>
            <p className={styles.stripSub}>Six technologies. One circular future.</p>
          </div>
          <SolutionGroup
            label="Recyclable materials"
            items={recyclable}
            groupId="1"
          />
          <SolutionGroup
            label="Sustainable innovations"
            items={innovations}
            groupId="2"
          />
        </div>
      </div>
    </header>
  );
}
