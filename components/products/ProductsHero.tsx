import Image from 'next/image';
import Link from 'next/link';
import { products, productsIntro } from '@/lib/products';
import { routes } from '@/lib/routes';
import styles from './Products.module.css';

/** Each mark floats as its own tile and links to that product below. */
export default function ProductsHero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <div className={styles.crumbs}>
            <Link href={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.crumbHere}>Products</span>
          </div>
          <p className={styles.eyebrow}>Our products</p>
          <h1 className={styles.h1}>{productsIntro.title}</h1>
          <p className={styles.heroLede}>{productsIntro.lede}</p>
          <a href="#certifications" className={styles.cta}>
            <span>Explore the products</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <nav className={styles.cluster} aria-label="Jump to a product">
          {products.map((product) => (
            <a
              key={product.id}
              href={`#${product.id}`}
              className={styles.floatTile}
              title={product.name}
            >
              <Image
                src={product.src}
                alt={product.alt}
                width={product.w}
                height={product.h}
                sizes="140px"
                preload
                className={styles.floatMark}
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
