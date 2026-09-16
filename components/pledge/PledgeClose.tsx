import Link from 'next/link';
import { pledge } from '@/lib/pledge';
import { routes } from '@/lib/routes';
import styles from './Pledge.module.css';

export default function PledgeClose() {
  return (
    <section className={styles.white}>
      <div className={styles.wrap}>
        <div className={styles.close} data-reveal="">
          <p className={styles.closeEyebrow}>Our pledge</p>
          <h2 className={styles.closeHeading}>{pledge.heading}</h2>

          <ol className={styles.commitments}>
            {pledge.commitments.map((line, i) => (
              <li key={line} className={styles.commitment}>
                <span className={styles.commitmentNum}>{String(i + 1).padStart(2, '0')}</span>
                {line}
              </li>
            ))}
          </ol>

          <p className={styles.closeIntro}>{pledge.intro}</p>
          <p className={styles.closeAmbition}>{pledge.ambition}</p>
          {pledge.paragraphs.map((text) => (
            <p key={text.slice(0, 32)} className={styles.closeBody}>
              {text}
            </p>
          ))}

          <div className={styles.closeFoot}>
            <p className={styles.closing}>{pledge.closing}</p>
            <Link href={routes.joinUs} className={styles.closeCta}>
              Join Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
