import Image from 'next/image';
import { awardProducts } from '@/lib/awards';
import styles from './Awards.module.css';

export default function AwardWinners() {
  return (
    <section className={styles.tint} aria-labelledby="winners-heading">
      <div className={styles.wrap}>
        <div className={styles.sectionHead} data-reveal="">
          <p className={styles.eyebrow}>The products</p>
          <h2 id="winners-heading" className={styles.h2}>
            Three products, three awards
          </h2>
          <p className={styles.sectionLede}>
            Each was engineered to keep material out of landfill, and judged against the best in
            packaging.
          </p>
        </div>

        <div className={styles.rows}>
          {awardProducts.map((product) => (
            <article key={product.num} className={styles.row}>
              <div className={styles.rowMedia} data-reveal="">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={product.image.width}
                  height={product.image.height}
                  sizes="(max-width: 860px) 100vw, 560px"
                  className={styles.cover}
                />
              </div>

              <div className={styles.rowBody} data-reveal="" data-reveal-delay="100">
                <p className={styles.rowMeta}>
                  <span className={styles.rowNum}>{product.num}</span>
                  {product.meta}
                </p>
                <h3 className={styles.rowName}>{product.name}</h3>
                <p className={styles.rowCopy}>{product.copy}</p>
                <dl className={styles.facts}>
                  {product.facts.map(([label, value]) => (
                    <div key={label} className={styles.fact}>
                      <dt className={styles.factLabel}>{label}</dt>
                      <dd className={styles.factValue}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
