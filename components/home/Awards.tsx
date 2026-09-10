import Image from 'next/image';
import Link from 'next/link';
import styles from './Awards.module.css';

const cards = [
  {
    num: '02',
    tag: 'Circularity',
    img: '/assets/award-scrap.png',
    w: 923,
    h: 982,
    alt: 'Golden Grow Easyplanter made with 40% scrap, beside its awards',
    title: 'Grow Bag with 40% Scrap',
    copy: 'Biodegradable and recycled materials combined, cutting the waste that ends up in landfill.',
    delay: 120,
  },
  {
    num: '03',
    tag: 'Packaging',
    img: '/assets/award-pouch.png',
    w: 1122,
    h: 835,
    alt: 'BluC recyclable laminate pouches for seafood',
    title: 'Recyclable Laminate Pouch',
    copy: 'A barrier pouch that keeps contents fresh, yet recycles like any other plastic film.',
    delay: 200,
  },
];

const trophies = [
  {
    img: '/assets/trophy-wpo.png',
    name: 'WorldStar for Packaging',
    org: 'World Packaging Organisation — Biodegradable Grow Bag',
    year: '2020',
  },
  {
    img: '/assets/trophy-lankastar.png',
    name: 'Lanka Star Bronze',
    org: 'Sri Lanka Institute of Packaging — Heavy Duty UV Stable Grow Bag',
    year: '2019',
  },
  {
    img: '/assets/trophy-asiastar.png',
    name: 'AsiaStar Award',
    org: 'Asian Packaging Federation — Heavy Duty UV Stable Grow Bag',
    year: '2019',
  },
];

export default function Awards() {
  return (
    <section id="awards" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <div style={{ maxWidth: '660px' }}>
            <div className={styles.kicker}>
              <span className={styles.tick} aria-hidden="true" />
              <span className={styles.kickerText}>Awards &amp; accolades</span>
            </div>
            <h2 className={styles.title}>Recognised for doing it right</h2>
          </div>
          <div className={styles.headAside}>
            <p className={styles.headCopy}>
              Awarded for sustainability and sustainable products in both the local and
              global arena.
            </p>
            <Link href="/awards" className={styles.headLink}>
              All awards <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <Link href="/awards" className={styles.feature} data-reveal="">
          <div className={styles.featureMedia}>
            <Image
              src="/assets/award-growbag.png"
              alt="Biodegradable grow bags growing chilli plants"
              width={1122}
              height={1493}
              className={styles.img}
            />
            <span className={styles.flag}>
              <span className={styles.flagRule} aria-hidden="true" />
              <span className={styles.flagText}>Featured · Sustainability</span>
            </span>
          </div>
          <div className={styles.featureBody}>
            <div>
              <div className={styles.meta}>WorldStar for Packaging · 2020</div>
              <h3 className={styles.featureTitle}>Biodegradable Grow Bag</h3>
            </div>
            <p className={styles.featureCopy}>
              Containers made from materials that decompose naturally without harming the
              environment — an eco-friendly alternative to traditional plastic or
              polythene pots.
            </p>
            <div className={styles.tags}>
              {['Starch-based', 'Compostable', 'Award-winning'].map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.readMore}>
              Read the story
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </div>
          </div>
        </Link>

        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <Link
              key={card.num}
              href="/awards"
              className={styles.card}
              data-reveal=""
              data-reveal-delay={card.delay}
            >
              <div className={styles.cardMedia}>
                <Image
                  src={card.img}
                  alt={card.alt}
                  width={card.w}
                  height={card.h}
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHead}>
                  <span className={styles.cardNum}>{card.num}</span>
                  <span className={styles.cardRule} aria-hidden="true" />
                  <span className={styles.cardTag}>{card.tag}</span>
                </div>
                <div className={styles.cardTitle}>{card.title}</div>
                <p className={styles.cardCopy}>{card.copy}</p>
                <div className={styles.cardMore}>
                  Read more
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.cabinet} data-reveal="" data-reveal-delay="120">
          <div className={styles.cabinetOrbit} aria-hidden="true" />
          <div className={styles.cabinetHead}>
            <div className={styles.kicker}>
              <span className={styles.tick} style={{ background: 'var(--lime)' }} aria-hidden="true" />
              <span className={styles.cabinetKickerText}>The trophy cabinet</span>
            </div>
            <div className={styles.cabinetNote}>
              Awarded to Polydime International (Pvt) Ltd
            </div>
          </div>
          <div className={styles.trophies}>
            {trophies.map((trophy, i) => (
              <Link
                key={trophy.name}
                href="/awards"
                className={styles.trophy}
                data-reveal=""
                data-reveal-delay={i * 70}
              >
                <span className={styles.trophyPlate}>
                  <Image
                    src={trophy.img}
                    alt=""
                    width={760}
                    height={1013}
                    className={styles.trophyImg}
                  />
                </span>
                <span className={styles.trophyBody}>
                  <span className={styles.trophyName}>{trophy.name}</span>
                  <span className={styles.trophyOrg}>{trophy.org}</span>
                </span>
                <span className={styles.trophyYear}>{trophy.year}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
