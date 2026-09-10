import Image from 'next/image';
import Eyebrow from '@/components/site/Eyebrow';
import styles from './AwardProducts.module.css';

type Award = {
  num: string;
  flag: string;
  meta: string;
  name: string;
  copy: string;
  image: { src: string; width: number; height: number; alt: string };
  /** The prototype alternates the photo's side down the list. */
  imageFirst: boolean;
  facts: [string, string][];
};

const awards: Award[] = [
  {
    num: '01',
    flag: 'Sustainability',
    meta: 'WorldStar for Packaging · 2020',
    name: 'Biodegradable Grow Bag',
    copy: 'Containers made from materials that decompose naturally without harming the environment — an eco-friendly alternative to traditional plastic or polythene pots, used for growing plants, vegetables and flowers.',
    image: {
      src: '/assets/award-growbag.png',
      width: 1122,
      height: 1493,
      alt: 'Biodegradable grow bags growing chilli plants in a nursery',
    },
    imageFirst: true,
    facts: [
      ['Made from', 'Coconut coir, jute, peat and other plant-based fibres'],
      ['Why it works', 'Better air and water circulation promotes healthy root growth and prevents overwatering'],
      ['End of life', 'Composted or buried in the soil, where it decomposes and adds nutrients back'],
      ['Best for', 'Indoor, outdoor, balcony and terrace gardens'],
    ],
  },
  {
    num: '02',
    flag: 'Circularity',
    meta: 'Lanka Star Bronze · AsiaStar · 2019',
    name: 'Grow Bag with 40% Scrap',
    copy: 'A grow bag made from a combination of biodegradable and recycled materials, cutting the waste that reaches landfill and the environmental cost of manufacturing something new.',
    image: {
      src: '/assets/award-scrap.png',
      width: 923,
      height: 982,
      alt: 'Golden Grow Easyplanter made with 40% scrap, displayed with its awards',
    },
    imageFirst: false,
    facts: [
      ['Recycled content', '40% scrap — agricultural waste, industrial by-products and post-consumer waste'],
      ['Performance', 'Lightweight, easy to handle, and promotes healthy plant growth'],
      ['End of life', 'Composted or buried to decompose naturally, contributing to soil health'],
      ['In market as', 'Golden Grow Easyplanter'],
    ],
  },
  {
    num: '03',
    flag: 'Packaging',
    meta: 'Recyclable barrier packaging',
    name: 'Recyclable Laminate Pouch',
    copy: 'Packaging designed to be convenient for consumers and environmentally friendly — multiple layers give a barrier to moisture, air and light that keeps contents fresh, without the recycling problem of a conventional laminate.',
    image: {
      src: '/assets/award-pouch.png',
      width: 1122,
      height: 835,
      alt: 'BluC recyclable laminate pouches containing seafood',
    },
    imageFirst: true,
    facts: [
      ['The difference', 'Made with materials that recycle in the same stream as other plastics'],
      ['Used for', 'Food and beverage, pet food and personal care products'],
      ['Formats', 'Various sizes and shapes, customisable with designs and branding'],
      ['In market as', 'BluC — Seafood from Ceylon'],
    ],
  },
];

function Media({ award }: { award: Award }) {
  return (
    <div className={styles.media}>
      <Image
        src={award.image.src}
        alt={award.image.alt}
        fill
        sizes="(max-width: 700px) 100vw, 620px"
        className={styles.img}
      />
      <span className={styles.flag}>
        <span className={styles.flagNum}>{award.num}</span>
        <span className={styles.flagText}>{award.flag}</span>
      </span>
    </div>
  );
}

function Body({ award }: { award: Award }) {
  return (
    <div className={styles.body}>
      <div className={styles.index} aria-hidden="true">
        {award.num}
      </div>
      <div className={styles.meta}>{award.meta}</div>
      <h3 className={styles.name}>{award.name}</h3>
      <p className={styles.copy}>{award.copy}</p>
      <div className={styles.facts}>
        {award.facts.map(([label, value]) => (
          <div key={label} className={styles.fact}>
            <span className={styles.factLabel}>{label}</span>
            <span className={styles.factValue}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AwardProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <div className={styles.headMain}>
            <Eyebrow num="02" label="The products" />
            <h2 className={styles.title}>
              Three products, <span className={styles.mark}>three awards.</span>
            </h2>
          </div>
          <p className={styles.headCopy}>
            Each was engineered to keep material out of landfill — and judged against the
            best in packaging.
          </p>
        </div>

        <div className={styles.list}>
          {awards.map((award, i) => (
            <article
              key={award.num}
              className={styles.card}
              data-reveal=""
              data-reveal-delay={i * 80}
            >
              {award.imageFirst ? (
                <>
                  <Media award={award} />
                  <Body award={award} />
                </>
              ) : (
                <>
                  <Body award={award} />
                  <Media award={award} />
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
