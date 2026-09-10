import Image from 'next/image';
import Link from 'next/link';
import { primaryNav, routes } from '@/lib/routes';
import styles from './MaterialsHeader.module.css';

export default function MaterialsHeader() {
  return (
    <header className={styles.header}>
      <Link href={routes.home} className={styles.logoLink}>
        <Image
          src="/assets/logo-upr.png"
          alt="Use Plastic Responsibly — Inspired by Polydime"
          width={572}
          height={192}
          className={styles.logo}
          preload
        />
      </Link>
      <nav className={styles.nav}>
        {primaryNav.map((item) => (
          <Link key={item.href} href={item.href} className={styles.navLink}>
            {item.label}
          </Link>
        ))}
        <Link href={routes.joinUs} className={styles.joinBtn}>
          Join Us
        </Link>
      </nav>
    </header>
  );
}
