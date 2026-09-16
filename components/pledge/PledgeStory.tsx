import { story } from '@/lib/pledge';
import styles from './Pledge.module.css';

export default function PledgeStory() {
  return (
    <section className={styles.white}>
      <div className={`${styles.wrap} ${styles.split}`}>
        <div className={styles.stickyHead} data-reveal="">
          <p className={styles.eyebrow}>Why UPR</p>
          <h2 className={styles.h2}>{story.heading}</h2>
        </div>
        <div data-reveal="" data-reveal-delay="100">
          {story.paragraphs.map((text) => (
            <p key={text.slice(0, 32)} className={styles.p}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
