import Image from 'next/image';
import { trophies } from '@/lib/awards';
import styles from './Awards.module.css';

export default function AwardsList() {
  return (
    <section className={styles.white} aria-labelledby="awards-heading">
      <div className={styles.wrap}>
        <div className={styles.sectionHead} data-reveal="">
          <p className={styles.eyebrow}>The awards</p>
          <h2 id="awards-heading" className={styles.h2}>
            Recognised at home and abroad
          </h2>
          <p className={styles.sectionLede}>
            Awarded to Polydime International (Pvt) Ltd for packaging excellence.
          </p>
        </div>

        <ul className={styles.trophies}>
          {trophies.map((trophy, i) => (
            <li
              key={trophy.name}
              className={styles.trophy}
              data-reveal=""
              data-reveal-delay={i * 80}
            >
              <div className={styles.trophyMedia}>
                <Image
                  src={trophy.src}
                  alt={`${trophy.name} trophy`}
                  width={760}
                  height={1013}
                  sizes="(max-width: 760px) 100vw, 400px"
                  className={styles.cover}
                />
              </div>
              <p className={styles.trophyYear}>{trophy.year}</p>
              <h3 className={styles.trophyName}>{trophy.name}</h3>
              <p className={styles.trophyDesc}>{trophy.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
