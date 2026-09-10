import Image from 'next/image';
import Link from 'next/link';
import Eyebrow from '@/components/site/Eyebrow';
import styles from './MaterialCards.module.css';

const materials = [
  {
    href: '/materials',
    mark: '/assets/mark-pe-white.png',
    w: 1600,
    h: 1418,
    name: 'PE',
    pill: 'Standard',
    tagline: 'Standard polyethylene',
    points: [
      'Fully recyclable structure',
      'Widely used across packaging',
      'Reliable everyday performance',
    ],
  },
  {
    href: '/materials',
    mark: '/assets/mark-pe-plus-white.png',
    w: 1600,
    h: 1649,
    name: 'PE Plus',
    pill: 'Multi-polymer',
    tagline: 'Multi-polymer structure',
    points: [
      'Enhanced material performance',
      'Multi-layer, still recyclable',
      'For more demanding applications',
    ],
  },
  {
    href: '/materials',
    mark: '/assets/mark-pe-plus-xtra-white.png',
    w: 1600,
    h: 1649,
    name: 'PE Plus Xtra',
    pill: 'Premium',
    tagline: 'Advanced barrier structure',
    points: [
      'Metalised barrier coating',
      'Enhanced barrier performance',
      'For premium packaging',
    ],
  },
  {
    href: '/pledge',
    mark: '/assets/mark-biocomp-white.png',
    w: 1600,
    h: 897,
    name: 'BioComp',
    pill: 'Compostable',
    tagline: 'Starch-based biodegradable range',
    points: [
      '100% biodegradable and compostable',
      'Certified starch-based material',
      'Grow bags, lunch sheets, carriers',
    ],
  },
  {
    href: '/materials',
    mark: '/assets/mark-ecoshield-white.png',
    w: 1600,
    h: 969,
    name: 'EcoShield',
    pill: 'Protective',
    tagline: 'Barrier protection layer',
    points: [
      'Moisture and oxygen protection',
      'Extends product shelf life',
      'Recyclable mono-material build',
    ],
  },
  {
    href: '/materials',
    mark: '/assets/mark-ecopure-white.png',
    w: 1600,
    h: 437,
    name: 'Eco Pure',
    pill: 'Multi-polymer',
    tagline: 'Cleaner polymer blend',
    points: [
      'Reduced additive load',
      'Food-contact suitable grades',
      'Designed for recovery streams',
    ],
  },
];

const delays = [0, 100, 200, 300, 360, 420];

export default function MaterialCards() {
  return (
    <section id="materials" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <Eyebrow num="02" label="Our Materials" />
          <h2 className={styles.title}>
            Six recyclable structures. <span className={styles.mark}>One promise.</span>
          </h2>
          <p className={styles.blurb}>
            Every structure we produce is engineered to be recovered and used again. Open
            any material for the full breakdown and applications.
          </p>
        </div>

        <div className={styles.list}>
          {materials.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className={styles.card}
              data-reveal=""
              data-reveal-delay={delays[i]}
            >
              <span className={styles.plate}>
                <Image
                  src={item.mark}
                  alt={`${item.name} recyclable material logo`}
                  width={item.w}
                  height={item.h}
                  className={styles.plateImg}
                />
              </span>
              <div className={styles.meta}>
                <div className={styles.nameRow}>
                  <div className={styles.name}>{item.name}</div>
                  <span className={styles.pill}>{item.pill}</span>
                </div>
                <div className={styles.tagline}>{item.tagline}</div>
              </div>
              <ul className={styles.points}>
                {item.points.map((point) => (
                  <li key={point} className={styles.point}>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <span className={styles.arrow} aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
