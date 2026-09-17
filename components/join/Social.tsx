import styles from './Join.module.css';

/**
 * The design has no profile URLs yet, so these point to the top of the page as
 * the prototype does. Swap in the real links when they are available.
 */
const SOCIAL_HREF = '#top';

export default function Social() {
  return (
    <section className={styles.white} aria-labelledby="social-heading">
      <div className={`${styles.wrap} ${styles.social}`} data-reveal="">
        <div>
          <p className={styles.eyebrow}>Stay in touch</p>
          <h2 id="social-heading" className={styles.socialTitle}>
            Follow the programme
          </h2>
          <p className={styles.sectionLede}>Updates on materials, partners and milestones.</p>
        </div>
        <div className={styles.icons}>
          <a href={SOCIAL_HREF} aria-label="Facebook" className={styles.icon}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
            </svg>
          </a>
          <a href={SOCIAL_HREF} aria-label="Instagram" className={styles.icon}>
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="3.8" />
              <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href={SOCIAL_HREF} aria-label="LinkedIn" className={styles.icon}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M5 9h3v10H5zM6.5 4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM10 9h3v1.4c.5-.9 1.6-1.6 3-1.6 2.3 0 3.5 1.5 3.5 4.2V19h-3v-5.3c0-1.3-.5-2.1-1.6-2.1-1 0-1.7.7-1.9 1.4V19h-3z" />
            </svg>
          </a>
          <a href={SOCIAL_HREF} aria-label="YouTube" className={styles.icon}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.2 8.4a2.6 2.6 0 0 0-1.8-1.8C17.7 6.1 12 6.1 12 6.1s-5.7 0-7.4.5A2.6 2.6 0 0 0 2.8 8.4C2.3 10.1 2.3 12 2.3 12s0 1.9.5 3.6a2.6 2.6 0 0 0 1.8 1.8c1.7.5 7.4.5 7.4.5s5.7 0 7.4-.5a2.6 2.6 0 0 0 1.8-1.8c.5-1.7.5-3.6.5-3.6s0-1.9-.5-3.6zM10.2 15.1V8.9l5.3 3.1z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
