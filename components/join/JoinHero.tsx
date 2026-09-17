import Link from 'next/link';
import { contact, routes } from '@/lib/routes';
import styles from './Join.module.css';

const phones = [
  { href: contact.phoneHref, label: contact.phone, note: 'Hotline' },
  { href: 'tel:+94773876054', label: '(+94) 773 876 054', note: 'Hotline' },
  { href: 'tel:+94117496470', label: '(+94) 117 496 470', note: 'Office' },
];

/** Intro and actions on the left; every way to reach us in one card on the right. */
export default function JoinHero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <div className={styles.crumbs}>
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.crumbHere}>Join Us</span>
          </div>
          <p className={styles.eyebrow}>Join us</p>
          <h1 className={styles.h1}>Let&rsquo;s take virgin plastic out of the loop</h1>
          <p className={styles.heroLede}>
            Tell us what you package and we will come back with the recycled or biodegradable
            structure that fits it. Your message goes directly to our staff, who answer as soon as
            they can.
          </p>
          <div className={styles.actions}>
            <a href="#message" className={styles.cta}>
              Send a message <span aria-hidden="true">↓</span>
            </a>
            <a href={contact.phoneHref} className={styles.ghostCta}>
              Call us now
            </a>
          </div>
        </div>

        <aside className={styles.contactCard} aria-label="Contact details">
          <div className={styles.contactRow}>
            <p className={styles.contactLabel}>Address</p>
            <address className={styles.contactValue}>
              No: 122, Stratford Avenue, Kirulapone,
              <br />
              Colombo 06, Sri Lanka.
            </address>
          </div>
          <div className={styles.contactRow}>
            <p className={styles.contactLabel}>Email</p>
            <a href={`mailto:${contact.email}`} className={styles.contactLink}>
              {contact.email}
            </a>
            <p className={styles.contactNote}>We reply within one working day.</p>
          </div>
          <div className={styles.contactRow}>
            <p className={styles.contactLabel}>Phone</p>
            <ul className={styles.phones}>
              {phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className={styles.phone}>
                    <span>{phone.label}</span>
                    <span className={styles.phoneNote}>{phone.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className={styles.hours}>
            <span className={styles.liveDot} aria-hidden="true" />
            Open 9AM – 6PM · Monday to Friday
          </p>
        </aside>
      </div>
    </header>
  );
}
