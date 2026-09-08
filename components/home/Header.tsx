import Image from 'next/image';
import styles from './Header.module.css';

const links = ['Our Solutions', 'Sustainability', 'Industries', 'About'];

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logoLink}>
        <Image
          src="/assets/logo.png"
          alt="Use Plastic Responsibly — Inspired by Polydime"
          width={288}
          height={90}
          className={styles.logo}
          preload
        />
      </a>
      <nav className={styles.nav}>
        {links.map((label) => (
          <a key={label} href="#" className={styles.navLink}>
            {label}
          </a>
        ))}
        <a href="#" className={styles.contact}>
          Contact Us
        </a>
      </nav>
    </header>
  );
}
