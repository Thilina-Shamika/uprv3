import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const explore = [
  { href: '/materials', label: 'Materials' },
  { href: '/#circular', label: 'The Loop' },
  { href: '/#impact', label: 'Impact' },
  { href: '/awards', label: 'Awards' },
  { href: '/blog', label: 'Blog' },
];

const pledge = [
  { href: '/#circular', label: 'Recycle' },
  { href: '/blog', label: 'Educate' },
  { href: '/#impact', label: 'Net Zero Energy' },
  { href: '/materials', label: 'Biodegrade' },
];

export default function Footer() {
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
          <div className={styles.colLinks}>
            {explore.map((item) => (
              <Link key={item.label} href={item.href} className={styles.footLink}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>
            <Link href="/pledge">Our Pledge</Link>
          </div>
          <div className={styles.colLinks}>
            {pledge.map((item) => (
              <Link key={item.label} href={item.href} className={styles.footLink}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.contactCol}>
          <div className={styles.colTitle}>Contact</div>
          <div className={styles.contactLinks}>
            <a href="mailto:info@polydime.com" className={styles.email}>
              info@polydime.com
            </a>
            <a href="tel:+94777306412" className={styles.footLink}>
              (+94) 777 306 412
            </a>
            <span className={styles.address}>
              122 Stratford Avenue, Kirulapone, Colombo 06, Sri Lanka
            </span>
            <span className={styles.hours}>Open 9AM – 6PM (Mon – Fri)</span>
          </div>
        </div>
      </div>

      <div className={styles.legal}>
        <span>Copyright 2026 Use Plastic Responsibly · Inspired by Polydime</span>
        <a href="#top" className={styles.top}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
