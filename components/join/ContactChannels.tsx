import Eyebrow from '@/components/site/Eyebrow';
import { contact } from '@/lib/routes';
import styles from './ContactChannels.module.css';

const phones = [
  { href: contact.phoneHref, label: `Hotline ${contact.phone}` },
  { href: 'tel:+94773876054', label: 'Hotline (+94) 773 876 054' },
  { href: 'tel:+94117496470', label: 'Office (+94) 117 496 470' },
];

export default function ContactChannels() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <div className={styles.headMain}>
            <Eyebrow num="02" label="Contact" />
            <h2 className={styles.title}>
              Three ways to <span className={styles.mark}>reach us.</span>
            </h2>
          </div>
          <p className={styles.headCopy}>Open 9AM – 6PM, Monday to Friday.</p>
        </div>

        <div className={styles.panel}>
          <div className={styles.row} data-reveal="">
            <span className={styles.num}>01</span>
            <span className={styles.label}>Address</span>
            <span className={styles.values}>
              <address className={styles.address}>
                No: 122, Stratford Avenue, Kirulapone,
                <br />
                Colombo 06, Sri Lanka.
              </address>
            </span>
          </div>
          <div className={styles.row} data-reveal="" data-reveal-delay="80">
            <span className={styles.num}>02</span>
            <span className={styles.label}>Email</span>
            <span className={styles.values}>
              <a href={`mailto:${contact.email}`} className={styles.email}>
                {contact.email}
              </a>
              <span className={styles.note}>We reply within one working day.</span>
            </span>
          </div>
          <div className={styles.rowFinal} data-reveal="" data-reveal-delay="160">
            <span className={styles.num}>03</span>
            <span className={styles.label}>Phone</span>
            <span className={styles.values}>
              {phones.map((phone) => (
                <a key={phone.href} href={phone.href} className={styles.phone}>
                  {phone.label}
                </a>
              ))}
            </span>
          </div>
          <div className={styles.foot}>
            <span className={styles.hours}>Open 9AM – 6PM · Monday to Friday</span>
            <a href="#message" className={styles.cta}>
              Send a message <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
