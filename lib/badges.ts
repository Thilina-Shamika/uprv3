export type Badge = {
  src: string;
  /** Intrinsic pixel size, needed by next/image; rendering is fit-to-box. */
  width: number;
  height: number;
  name: string;
  desc: string;
  tag: string;
};

export const badges: Badge[] = [
  {
    src: '/assets/badge1.png',
    width: 68,
    height: 60,
    name: 'PE',
    desc: 'Recyclable polyethylene film for everyday packaging.',
    tag: 'Recyclable · upr.lk',
  },
  {
    src: '/assets/badge2.png',
    width: 64,
    height: 66,
    name: 'PE Plus',
    desc: 'Strength-enhanced PE that cuts material use per pack.',
    tag: 'Reduced resin · upr.lk',
  },
  {
    src: '/assets/badge3.png',
    width: 64,
    height: 66,
    name: 'PE Plus Xtra',
    desc: 'Our highest-performance recyclable film for demanding loads.',
    tag: 'High performance · upr.lk',
  },
  {
    src: '/assets/badge4.png',
    width: 73,
    height: 45,
    name: 'BioComp',
    desc: 'Starch-based film, biodegradable and compostable.',
    tag: '100% certified',
  },
  {
    src: '/assets/badge5.png',
    width: 77,
    height: 44,
    name: 'ECOshield',
    desc: 'Barrier protection engineered for recyclable structures.',
    tag: 'Barrier · recyclable',
  },
  {
    src: '/assets/badge6.png',
    width: 75,
    height: 21,
    name: 'EcoPure',
    desc: 'Additive technology that accelerates end-of-life breakdown.',
    tag: 'Landfill accelerated',
  },
];
