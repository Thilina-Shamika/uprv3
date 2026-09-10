import Image from 'next/image';
import Link from 'next/link';
import Eyebrow from '@/components/site/Eyebrow';
import styles from './Partners.module.css';

type Partner = { src: string; name: string };

const lanes: { items: Partner[]; dir: 'left' | 'right'; duration: string }[] = [
  {
    dir: 'left',
    duration: '42s',
    items: [
      { src: 'biogrow-india', name: 'Bio Grow India' },
      { src: 'botanicoir-india', name: 'Botanicoir India' },
      { src: 'pelemix-india', name: 'Pelemix India' },
      { src: 'hayleys-fibre', name: 'Hayleys Fibre' },
      { src: 'tropicoir', name: 'Tropicoir Lanka' },
      { src: 'benchmark', name: 'Benchmark International' },
      { src: 'botanicoir-srilanka', name: 'Botanicoir Sri Lanka' },
    ],
  },
  {
    dir: 'right',
    duration: '48s',
    items: [
      { src: 'pelemix-srilanka', name: 'Pelemix Sri Lanka' },
      { src: 'ceycoir', name: 'CeyCoir' },
      { src: 'jiffy', name: 'Jiffy' },
      { src: 'growrite', name: 'Growrite Substrates' },
      { src: 'quickgrow', name: 'Quick Grow' },
      { src: 'consarc', name: 'Consarc' },
      { src: 'biogrow-srilanka', name: 'Bio Grow Sri Lanka' },
    ],
  },
  {
    dir: 'left',
    duration: '38s',
    items: [
      { src: 'riococo', name: 'Riococo Worldwide' },
      { src: 'cocogreen', name: 'Cocogreen' },
      { src: 'access', name: 'Access Engineering' },
      { src: 'polydime-1', name: 'Polydime Plastics' },
      { src: 'lanka-green-growers', name: 'Lanka Green Growers' },
      { src: 'tropicoir', name: 'Tropicoir Lanka' },
      { src: 'jiffy', name: 'Jiffy' },
    ],
  },
];

function Group({ items, hidden }: { items: Partner[]; hidden?: boolean }) {
  return (
    <div className={styles.group} aria-hidden={hidden || undefined}>
      {items.map((p, i) => (
        <span key={`${p.src}-${i}`} className={styles.chip} title={p.name}>
          <Image
            src={`/assets/partners/${p.src}.png`}
            alt={hidden ? '' : p.name}
            width={300}
            height={150}
            className={styles.chipImg}
          />
        </span>
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className={styles.section}>
      <div className={styles.head}>
        <div className={styles.headInner} data-reveal="">
          <div className={styles.headMain}>
            <Eyebrow num="06" label="Our Partners" />
            <div className={styles.gap} />
            <h2 className={styles.title}>
              Brands moving to <span className={styles.mark}>responsible plastic</span>
            </h2>
          </div>
          <p className={styles.headCopy}>
            Manufacturers and growers who have committed to recycled and biodegradable
            packaging with us.
          </p>
        </div>
      </div>

      <div className={styles.lanes} data-reveal="" data-reveal-delay="80">
        {lanes.map((lane, i) => (
          <div key={i} className={styles.lane}>
            <div
              className={lane.dir === 'left' ? styles.left : styles.right}
              style={{ ['--dur' as string]: lane.duration }}
            >
              {/* Two passes so the -50% translate loops without a gap. */}
              <Group items={lane.items} />
              <Group items={lane.items} hidden />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.foot} data-reveal="">
        <span className={styles.footText}>Want your brand on this list?</span>
        <Link href="/partners" className={styles.footLink}>
          See all partners <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
