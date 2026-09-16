import Image from 'next/image';
import Link from 'next/link';
import { contact, routes } from '@/lib/routes';
import styles from './HomeFooter.module.css';

const explore = [
  { href: routes.home, label: 'Home' },
  { href: routes.products, label: 'Products' },
  { href: routes.pledge, label: 'Our Pledge' },
  { href: routes.partners, label: 'Partners' },
  { href: routes.awards, label: 'Awards' },
  { href: routes.blog, label: 'Blog' },
  { href: routes.joinUs, label: 'Join Us' },
];

const products = [
  'PE Recyclable',
  'PE Plus',
  'PE Plus Xtra',
  'BioComp',
  'EcoPure',
  'ECOshield',
];

const pledge = ['Recycle', 'Educate', 'Net Zero Energy', 'Biodegrade', 'Certifications'];

export default function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.grid}>
        <div className={styles.brandCol}>
          <div className={styles.logoPlate}>
            <Image
              src="/assets/logo-upr.png"
              alt="Use Plastic Responsibly"
              width={572}
              height={192}
              className={styles.logo}
            />
          </div>
          <p className={styles.brandBody}>
            The Polydime group is among the largest processors of recycled plastic film
            in Sri Lanka. Approximately 40% of our product is made from recycled
            plastic.
          </p>
          <div className={styles.diverted}>
            <span className={styles.dot} aria-hidden="true" />
            22,346,157 KG diverted
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Explore</div>
          <div className={styles.links}>
            {explore.map((item) => (
              <Link key={item.label} href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Products</div>
          <div className={styles.links}>
            {products.map((label) => (
              <Link key={label} href={routes.products} className={styles.link}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Our Pledge</div>
          <div className={styles.links}>
            {pledge.map((label) => (
              <Link key={label} href={routes.pledge} className={styles.link}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.contactCol}>
          <div className={styles.colTitle}>Contact</div>
          <div className={styles.links}>
            <a href={`mailto:${contact.email}`} className={styles.email}>
              {contact.email}
            </a>
            <a href={contact.phoneHref} className={styles.link}>
              {contact.phone}
            </a>
            <span className={styles.address}>{contact.address}</span>
            <span className={styles.hours}>{contact.hours}</span>
          </div>
          <div className={styles.signup}>
            <div className={styles.colTitle}>Stay in the loop</div>
            <div className={styles.field}>
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email address"
                className={styles.input}
              />
              <button type="button" aria-label="Subscribe" className={styles.submit}>
                <svg width="17" height="11" viewBox="0 0 18 11" fill="none" aria-hidden="true">
                  <path
                    d="M1 5.5h15M12 1l4.6 4.5L12 10"
                    stroke="#0d3324"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.legal}>
        <span>Copyright 2026 Use Plastic Responsibly · Inspired by Polydime</span>
        <div className={styles.legalLinks}>
          <Link href={routes.privacyPolicy} className={styles.legalLink}>
            Privacy
          </Link>
          <Link href={routes.termsAndConditions} className={styles.legalLink}>
            Terms
          </Link>
          <Link href={`${routes.products}#certifications`} className={styles.legalLink}>
            Certifications
          </Link>
          <a href="#top" className={styles.legalLink}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
