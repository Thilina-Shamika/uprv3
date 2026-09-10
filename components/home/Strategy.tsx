import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/lib/routes';
import styles from './Strategy.module.css';

const pillars = [
  {
    hash: 'recycle',
    src: '/assets/pledge/pledge-recycle.png',
    label: 'Recycle',
    value: '40%',
    unit: 'of Production',
  },
  {
    hash: 'biodegradable',
    src: '/assets/pledge/pledge-biodegradable.png',
    label: 'Biodegradable Products',
    value: '15%',
    unit: 'of Production',
  },
  {
    hash: 'netzero',
    src: '/assets/pledge/pledge-netzero.png',
    label: 'Net Zero Energy',
    value: '75MT',
    unit: 'Per Month',
  },
  {
    hash: 'educate',
    src: '/assets/pledge/pledge-educate.png',
    label: 'Educate',
    value: '25+',
    unit: 'Schools/Year',
  },
];

export default function Strategy() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>Our Strategy</p>
          <h2 className={styles.title}>
            Making plastic
            <br />
            <span className={styles.accent}>sustainable.</span>
          </h2>
          <p className={styles.blurb}>
            Using plastic responsibly is about the freedom and convenience of plastic
            products, used responsibly. We pledge to operate and improve the circular
            economy we have created for plastic.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <Link
              key={pillar.hash}
              href={`${routes.pledge}#${pillar.hash}`}
              className={styles.card}
            >
              <span className={styles.plate}>
                <Image
                  src={pillar.src}
                  alt={pillar.label}
                  width={795}
                  height={604}
                  sizes="120px"
                  style={{ width: '78%', height: '78%' }}
                  className={styles.plateImg}
                />
              </span>
              <div className={styles.body}>
                <p className={styles.label}>{pillar.label}</p>
                <p className={styles.value}>{pillar.value}</p>
                <p className={styles.unit}>{pillar.unit}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
