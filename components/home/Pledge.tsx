import Image from 'next/image';
import Link from 'next/link';
import Eyebrow from '@/components/site/Eyebrow';
import styles from './Pledge.module.css';

const pledges = [
  { src: '/assets/pledge/pledge-recycle.png', label: 'Recycle' },
  { src: '/assets/pledge/pledge-biodegradable.png', label: 'Biodegradable Products' },
  { src: '/assets/pledge/pledge-netzero.png', label: 'Net Zero Energy' },
  { src: '/assets/pledge/pledge-educate.png', label: 'Educate' },
];

export default function Pledge() {
  return (
    <section id="pledge" className={styles.section}>
      <div className={styles.inner}>
        <div data-reveal="">
          <Eyebrow num="01" label="Our Pledge" centred ring={false} className={styles.badge} />
        </div>
        <div className={styles.head} data-reveal="">
          <h2 className={styles.title}>
            Making plastic <span className={styles.accent}>sustainable</span>
          </h2>
          <p className={styles.blurb}>
            Using plastic responsibly is about the freedom and convenience of plastic
            products, used responsibly. We pledge to operate and improve the circular
            economy we have created for plastic.
          </p>
        </div>
        <div className={styles.grid}>
          {pledges.map((item, i) => (
            <Link
              key={item.label}
              href="/pledge"
              aria-label={item.label}
              className={styles.card}
              data-reveal=""
              data-reveal-delay={50 + i * 90}
            >
              <Image
                src={item.src}
                alt={item.label}
                width={795}
                height={604}
                className={styles.mark}
              />
              <span className={styles.label}>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
