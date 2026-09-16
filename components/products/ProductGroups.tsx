import Image from 'next/image';
import { groups, products } from '@/lib/products';
import styles from './Products.module.css';

export default function ProductGroups() {
  return (
    <div id="certifications">
      {groups.map((group, g) => (
        <section
          key={group.id}
          className={g % 2 === 1 ? styles.tint : styles.white}
          aria-labelledby={`group-${group.id}`}
        >
          <div className={styles.wrap}>
            <div className={styles.groupHead} data-reveal="">
              <p className={styles.eyebrow}>
                {group.num} <span className={styles.eyebrowRule} aria-hidden="true" /> Category
              </p>
              <h2 id={`group-${group.id}`} className={styles.h2}>
                {group.title}
              </h2>
              <p className={styles.groupLede}>{group.lede}</p>
            </div>

            <div className={styles.rows}>
              {products
                .filter((product) => product.group === group.id)
                .map((product) => (
                  <article key={product.id} id={product.id} className={styles.row}>
                    <div className={styles.visual} data-reveal="">
                      <Image
                        src={product.src}
                        alt={product.alt}
                        width={product.w}
                        height={product.h}
                        sizes="(max-width: 860px) 60vw, 280px"
                        className={styles.visualMark}
                      />
                    </div>

                    <div className={styles.rowBody} data-reveal="" data-reveal-delay="100">
                      <p className={styles.rowEyebrow}>{product.eyebrow}</p>
                      <h3 className={styles.rowName}>{product.name}</h3>
                      <p className={styles.rowCopy}>{product.copy}</p>
                      {product.brochure && (
                        <a
                          href={product.brochure.href}
                          target="_blank"
                          rel="noopener"
                          type="application/pdf"
                          className={styles.brochure}
                          aria-label={`View the ${product.name} brochure (PDF, ${product.brochure.size}, opens in a new tab)`}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                            <path d="M14 3v5h5" />
                            <path d="M9 13h6M9 17h4" />
                          </svg>
                          <span>View brochure</span>
                          <span className={styles.brochureMeta}>PDF · {product.brochure.size}</span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
