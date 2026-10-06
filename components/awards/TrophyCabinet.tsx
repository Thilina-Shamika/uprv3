import Image from 'next/image';
import { programmes, trophies } from '@/lib/awards';
import styles from './Awards.module.css';

/** Every trophy, grouped by the award programme that gave it. */
export default function TrophyCabinet() {
  return (
    <section className={styles.sand} aria-labelledby="cabinet-heading">
      <div className={styles.wrap}>
        <div className={styles.sectionHead} data-reveal="">
          <p className={styles.eyebrow}>The trophy cabinet</p>
          <h2 id="cabinet-heading" className={styles.h2}>
            Every award, as it is engraved
          </h2>
          <p className={styles.sectionLede}>
            Recognition from the World Packaging Organisation, the Asian Packaging Federation and
            the Sri Lanka Institute of Packaging.
          </p>
        </div>

        {programmes.map((programme) => {
          const won = trophies.filter((t) => t.programme === programme.name);
          if (won.length === 0) return null;
          return (
            <div key={programme.name} className={styles.programme}>
              <div className={styles.programmeHead} data-reveal="">
                <h3 className={styles.programmeName}>{programme.name}</h3>
                <p className={styles.programmeBody}>{programme.body}</p>
                <span className={styles.programmeCount}>
                  {won.length} {won.length === 1 ? 'award' : 'awards'}
                </span>
              </div>

              <ul className={styles.cabinet}>
                {won.map((trophy, i) => (
                  <li
                    key={trophy.id}
                    className={styles.trophyCard}
                    data-reveal=""
                    data-reveal-delay={Math.min(i * 70, 210)}
                  >
                    <span className={styles.trophyStage}>
                      <Image
                        src={trophy.image.src}
                        alt={`${trophy.programme} ${trophy.year} trophy`}
                        width={trophy.image.width}
                        height={trophy.image.height}
                        sizes="(max-width: 640px) 60vw, 260px"
                        className={styles.trophyImg}
                      />
                    </span>
                    <p className={styles.trophyYear}>{trophy.year}</p>
                    <h4 className={styles.trophyEntry}>{trophy.entry}</h4>
                    {trophy.level && <p className={styles.trophyLevel}>{trophy.level}</p>}
                    <p className={styles.trophyTo}>{trophy.awardedTo}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
