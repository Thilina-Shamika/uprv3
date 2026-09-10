import Image from 'next/image';
import Eyebrow from '@/components/site/Eyebrow';
import styles from './LogoLanes.module.css';

type Logo = { src: string; name: string };

const lanes: { dir: 'left' | 'right'; duration: string; items: Logo[] }[] = [
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

function Group({ items, hidden }: { items: Logo[]; hidden?: boolean }) {
  return (
    <div className={styles.group} aria-hidden={hidden || undefined}>
      {items.map((logo, i) => (
        <span key={`${logo.src}-${i}`} className={styles.chip} title={logo.name}>
          <Image
            src={`/assets/partners/${logo.src}.png`}
            alt={hidden ? '' : logo.name}
            width={300}
            height={150}
            className={styles.chipImg}
          />
        </span>
      ))}
    </div>
  );
}

export default function LogoLanes() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div className={styles.headInner} data-reveal="">
          <div className={styles.headMain}>
            <Eyebrow num="02" label="In the programme" />
            <h2 className={styles.title}>
              Brands packaging <span className={styles.mark}>responsibly</span>
            </h2>
          </div>
          <p className={styles.headCopy}>
            Growers, manufacturers and exporters who have moved to recycled or
            biodegradable packaging with us.
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
              {/* Two passes so the -50% translate loops without a seam. */}
              <Group items={lane.items} />
              <Group items={lane.items} hidden />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
