import Image from 'next/image';
import Eyebrow from '@/components/site/Eyebrow';
import styles from './TrophyCabinet.module.css';

const trophies = [
  {
    src: '/assets/trophy-wpo.png',
    name: 'WorldStar for Packaging',
    year: '2020',
    desc: 'World Packaging Organisation — Award for Packaging Excellence, honouring Polydime Group for the Biodegradable Grow Bag',
  },
  {
    src: '/assets/trophy-lankastar.png',
    name: 'Lanka Star Bronze',
    year: '2019',
    desc: 'Sri Lanka Institute of Packaging — Heavy Duty UV Stable Grow Bag',
  },
  {
    src: '/assets/trophy-asiastar.png',
    name: 'AsiaStar Award',
    year: '2019',
    desc: 'The Asian Packaging Federation — Heavy Duty UV Stable Grow Bag',
  },
];

export default function TrophyCabinet() {
  return (
    <>
      <div className={styles.ghost} aria-hidden="true">
        <div className={styles.ghostWord}>Recognised</div>
      </div>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.head} data-reveal="">
            <div className={styles.headMain}>
              <Eyebrow num="03" label="The trophy cabinet" translucent />
              <h2 className={styles.title}>
                Recognised at home <span className={styles.accent}>and abroad.</span>
              </h2>
            </div>
            <p className={styles.headCopy}>
              Awarded to Polydime International (Pvt) Ltd for packaging excellence.
            </p>
          </div>

          <div className={styles.grid}>
            {trophies.map((trophy, i) => (
              <div
                key={trophy.name}
                className={styles.trophy}
                data-reveal=""
                data-reveal-delay={i * 80}
              >
                <div className={styles.media}>
                  <Image
                    src={trophy.src}
                    alt={trophy.name}
                    fill
                    sizes="(max-width: 600px) 100vw, 400px"
                    className={styles.img}
                  />
                  <span className={styles.year}>{trophy.year}</span>
                </div>
                <div className={styles.body}>
                  <div className={styles.name}>{trophy.name}</div>
                  <div className={styles.rule} />
                  <div className={styles.desc}>{trophy.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
