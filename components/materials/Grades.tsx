import Image from 'next/image';
import Link from 'next/link';
import styles from './Grades.module.css';

type Grade = {
  id: string;
  index: string;
  theme: 'dark' | 'light' | 'lime';
  kicker: string;
  name: string;
  lede: string;
  detail: string;
  tags: string[];
  mark: string;
  markAlt: string;
  specs: [string, string][];
};

const grades: Grade[] = [
  {
    id: 'pe',
    index: '01',
    theme: 'dark',
    kicker: 'Standard',
    name: 'PE',
    lede: 'Standard polyethylene for everyday packaging — the lightest structure that still does the job.',
    detail:
      'A single-polymer film that keeps recovery simple: one material in, one material out. Used across liners, bags and secondary packaging where a standard barrier is enough.',
    tags: ['Liners', 'Carrier bags', 'Shrink film', 'Secondary packaging'],
    mark: '/assets/mark-pe-v2.png',
    markAlt: 'PE recyclable material mark',
    specs: [
      ['Structure', 'Single polymer'],
      ['Barrier', 'Standard'],
      ['Recycled content', 'Up to 40%'],
      ['Print', 'Surface and reverse'],
    ],
  },
  {
    id: 'pe-plus',
    index: '02',
    theme: 'light',
    kicker: 'Multi-polymer',
    name: 'PE Plus',
    lede: 'A multi-polymer structure with enhanced performance for more demanding applications.',
    detail:
      'Where a single polymer cannot deliver the stiffness, seal strength or shelf life required, PE Plus layers compatible polymers — and stays recyclable as a unit.',
    tags: ['Retail packaging', 'Heavy duty sacks', 'Grow bags', 'Industrial film'],
    mark: '/assets/mark-pe-plus-v2.png',
    markAlt: 'PE Plus recyclable material mark',
    specs: [
      ['Structure', 'Multi-polymer laminate'],
      ['Barrier', 'Enhanced'],
      ['Recycled content', 'Up to 40%'],
      ['Print', 'Reverse print'],
    ],
  },
  {
    id: 'pe-plus-xtra',
    index: '03',
    theme: 'lime',
    kicker: 'Premium barrier',
    name: 'PE Plus Xtra',
    lede: 'Metalised barrier film for premium products — engineered so the barrier does not cost recyclability.',
    detail:
      'Our highest barrier structure carries a metalised coating for moisture and light protection, while remaining part of the same recovery route as PE and PE Plus.',
    tags: ['Food packaging', 'Personal care', 'Pouches', 'Premium retail'],
    mark: '/assets/mark-pe-plus-xtra-v2.png',
    markAlt: 'PE Plus Xtra recyclable material mark',
    specs: [
      ['Structure', 'Metalised barrier laminate'],
      ['Barrier', 'High (metalised)'],
      ['Recycled content', 'On request'],
      ['Print', 'Reverse, high definition'],
    ],
  },
];

export default function Grades() {
  return (
    <>
      <div className={styles.ghost} aria-hidden="true">
        <div className={styles.ghostWord}>Grades</div>
      </div>
      <section className={styles.section}>
        <div className={styles.stack}>
          {grades.map((grade) => (
            <article
              key={grade.id}
              id={grade.id}
              className={styles[grade.theme]}
              data-reveal=""
            >
              <div className={styles.index} aria-hidden="true">
                {grade.index}
              </div>
              <div className={styles.body}>
                <div className={styles.main}>
                  <div className={styles.kickerRow}>
                    <span className={styles.badge}>{grade.index}</span>
                    <span className={styles.kicker}>{grade.kicker}</span>
                  </div>
                  <h3 className={styles.title}>{grade.name}</h3>
                  <p className={styles.lede}>{grade.lede}</p>
                  <p className={styles.detail}>{grade.detail}</p>
                  <div className={styles.tags}>
                    {grade.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/join-us#message" className={styles.cta}>
                    Request {grade.name} spec <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className={styles.aside}>
                  <div className={styles.plate}>
                    <Image
                      src={grade.mark}
                      alt={grade.markAlt}
                      width={433}
                      height={433}
                      className={styles.markImg}
                    />
                  </div>
                  <div className={styles.specs}>
                    {grade.specs.map(([label, value]) => (
                      <div key={label} className={styles.spec}>
                        <span className={styles.specLabel}>{label}</span>
                        <span className={styles.specValue}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
