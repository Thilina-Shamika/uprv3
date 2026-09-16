import { ambition } from '@/lib/pledge';
import styles from './Pledge.module.css';

export default function PledgeAmbition() {
  return (
    <section className={styles.mist}>
      <div className={styles.wrap}>
        <div className={styles.panel} data-reveal="">
          <div className={styles.ringA} aria-hidden="true" />
          <div className={styles.ringB} aria-hidden="true" />
          <div className={styles.figureBlock}>
            <p className={styles.eyebrow}>Our ambition</p>
            <p className={styles.figureLead}>Almost</p>
            <p className={styles.figure}>{ambition.figure}</p>
            <p className={styles.statement}>{ambition.statement}</p>
          </div>
          <div className={styles.panelBody}>
            {ambition.paragraphs.map((text) => (
              <p key={text.slice(0, 32)} className={styles.p}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
