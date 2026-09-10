import Image from 'next/image';
import styles from './Quote.module.css';

export default function Quote() {
  return (
    <section className={styles.section}>
      <Image
        src="/assets/quote-river.png"
        alt="A polluted industrial riverbank on one side and a clean, green river valley on the other"
        width={1672}
        height={941}
        className={styles.bg}
      />
      <div className={styles.scrim} />
      <div className={styles.inner} data-reveal="">
        <div className={styles.main}>
          <div className={styles.mark} aria-hidden="true">
            &ldquo;
          </div>
          <blockquote className={styles.quote}>
            The idea that people would throw plastic away is bizarre.
          </blockquote>
          <div className={styles.byline}>
            <div>
              <div className={styles.name}>Sten Gustaf Thulin</div>
              <div className={styles.role}>
                Inventor of the plastic shopping bag · 1914–2006
              </div>
            </div>
            <span className={styles.badge}>Designed to be reused</span>
          </div>
        </div>
        <div className={styles.aside}>
          <div className={styles.asideTitle}>Context</div>
          <p className={styles.asideBody}>
            Thulin designed the bag in 1959 to be carried, folded and used again — a
            durable alternative to paper. Disposal was never the intent, and it still
            does not have to be.
          </p>
        </div>
      </div>
    </section>
  );
}
