import styles from './Footer.module.css';

const solutions = ['PE', 'PE Plus', 'PE Plus Xtra', 'BioComp'];
const company = ['About', 'Sustainability', 'Industries', 'Contact'];
const legal = ['Privacy', 'Terms', 'Certifications'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <p className={styles.brandTitle}>
            Use plastic
            <br />
            responsibly.
          </p>
          <p className={styles.brandBody}>
            Smarter material solutions from Sri Lanka, engineered to keep packaging
            useful, recoverable and accountable.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.label}>Solutions</p>
          {solutions.map((item) => (
            <a key={item} href="#" className={styles.link}>
              {item}
            </a>
          ))}
        </div>

        <div className={styles.col}>
          <p className={styles.label}>Company</p>
          {company.map((item) => (
            <a key={item} href="#" className={styles.link}>
              {item}
            </a>
          ))}
        </div>

        <div className={styles.signup}>
          <p className={styles.signupLabel}>Stay in the loop</p>
          <p className={styles.signupBody}>
            Quarterly notes on recovery volumes and material research.
          </p>
          <div className={styles.field}>
            <input
              type="email"
              placeholder="you@company.com"
              aria-label="Email address"
              className={styles.input}
            />
            <button type="button" className={styles.submit} aria-label="Subscribe">
              <svg width="18" height="11" viewBox="0 0 18 11" fill="none" aria-hidden="true">
                <path
                  d="M1 5.5h15M12 1l4.6 4.5L12 10"
                  stroke="#0c3d20"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.legal}>
        <p className={styles.copyright}>© 2026 Polydime. All rights reserved.</p>
        <div className={styles.legalLinks}>
          {legal.map((item) => (
            <a key={item} href="#" className={styles.legalLink}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
