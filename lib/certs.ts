export type Cert = {
  href: string;
  src: string;
  /** Intrinsic size, for next/image. */
  w: number;
  h: number;
  name: string;
  desc: string;
  tag: string;
  /** Artwork aspect buckets from the prototype; they drive the fitted size. */
  shape: 'wide' | 'xl' | 'big' | 'normal';
};

export const certs: Cert[] = [
  {
    href: '/materials#cert-pe',
    src: '/assets/cert2.png',
    w: 2208,
    h: 1906,
    shape: 'xl',
    name: 'PE Recyclable',
    desc: 'Recyclable polyethylene film for everyday packaging.',
    tag: 'Recyclable · upr.lk',
  },
  {
    href: '/materials#cert-40',
    src: '/assets/cert7.png',
    w: 1435,
    h: 1280,
    shape: 'big',
    name: '40% Recycled',
    desc: 'Contains 40% post-consumer recycled plastic content.',
    tag: 'Recycled content',
  },
  {
    href: '/materials#cert-netzero',
    src: '/assets/cert3.png',
    w: 1548,
    h: 1235,
    shape: 'big',
    name: 'Net Zero Energy',
    desc: 'Produced with fully offset, net-zero energy operations.',
    tag: 'Net zero · upr.lk',
  },
  {
    href: '/materials#cert-ecosprout',
    src: '/assets/cert1.png',
    w: 3875,
    h: 1140,
    shape: 'wide',
    name: 'EcoSprout',
    desc: 'Plant-based film built to sprout new life cycles, not landfill.',
    tag: 'Bio-based · certified',
  },
  {
    href: '/materials#cert-biocomp',
    src: '/assets/cert6.png',
    w: 2142,
    h: 872,
    shape: 'wide',
    name: 'BioComp',
    desc: 'Starch-based film, biodegradable and compostable.',
    tag: '100% certified',
  },
  {
    href: '/materials#cert-ecoshield',
    src: '/assets/cert5.png',
    w: 1990,
    h: 1407,
    shape: 'big',
    name: 'ECOshield',
    desc: 'Barrier protection engineered for recyclable structures.',
    tag: 'Barrier · recyclable',
  },
  {
    href: '/materials#cert-ecopure',
    src: '/assets/cert4.png',
    w: 2345,
    h: 1658,
    shape: 'xl',
    name: 'EcoPure',
    desc: 'Additive technology that accelerates end-of-life breakdown.',
    tag: 'Landfill accelerated',
  },
];

/** Desktop rail: `wide` artwork is inset further so it optically matches. */
export const railScale = (shape: Cert['shape']) => (shape === 'wide' ? 0.78 : 1);

/** Mobile bar: width of the mark within its cell. */
export const barWidth = (shape: Cert['shape']) =>
  shape === 'wide' ? '54%' : shape === 'xl' ? '116%' : shape === 'big' ? '104%' : '94%';
