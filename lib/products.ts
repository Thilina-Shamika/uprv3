export type ProductGroup = 'recyclable' | 'energy' | 'compostable';

export type Product = {
  /** Anchor ids are the targets of the home page's certification rail. */
  id: string;
  group: ProductGroup;
  src: string;
  w: number;
  h: number;
  alt: string;
  eyebrow: string;
  name: string;
  copy: string;
  /** Product brochure in /public/brochures; size is shown so visitors know
   *  what they are opening before a 12 MB file starts loading on mobile. */
  brochure?: { href: string; size: string };
};

export const groups: { id: ProductGroup; num: string; title: string; lede: string }[] = [
  {
    id: 'recyclable',
    num: '01',
    title: 'Recyclable and recycled',
    lede: 'Polyethylene structures that can go back into a recycling stream, and products made with recycled plastic.',
  },
  {
    id: 'energy',
    num: '02',
    title: 'Made with renewable energy',
    lede: 'Manufactured on solar-based energy and independently certified.',
  },
  {
    id: 'compostable',
    num: '03',
    title: 'Compostable and biodegradable',
    lede: 'For applications where a product needs to break down at the end of its life.',
  },
];

export const productsIntro = {
  title: 'Products with a clear end of life',
  lede: 'Every Polydime product carries a mark that tells you how it was made and what should happen to it after use. If you are viewing a product carrying one of these logos, this is what it signifies.',
};

export const products: Product[] = [
  {
    id: 'cert-pe',
    group: 'recyclable',
    src: '/assets/cert2.png',
    w: 2208,
    h: 1906,
    alt: 'PE',
    eyebrow: 'Mono-material, 100% recyclable',
    name: 'PE — Mono-material',
    copy: 'A food-packaging laminate usually carries three to four distinct polymer classes for sealing, barrier and print. Because of that mix it can never enter a recycling stream effectively. This structure is built with a single polymer class — polyethylene only — and performs with the same barrier, print quality and sealing performance, while remaining 100% recyclable in a PE recycle stream. Known globally as a mono-material structure, it is designed for circularity ahead of new waste-management laws coming into effect.',
    brochure: { href: '/brochures/pe-recyclable-barrier-packaging.pdf', size: '1.0 MB' },
  },
  {
    id: 'cert-40',
    group: 'recyclable',
    src: '/assets/cert7.png',
    w: 1435,
    h: 1280,
    alt: 'Contains 40% Recycled Plastic',
    eyebrow: 'Certified recycled content',
    name: 'Contains 40% Recycled Plastic',
    copy: 'This grow bag is built with 40% recycled plastic that would normally end up in a landfill, beach or waterway. It is collected, processed back into polymer pellets and used to manufacture the bag, so plastic is given new life rather than virgin polymer being used. Grow bags usually cannot take recycled plastic because of heavy UV exposure; special R&D and innovative ingredients make it possible here. The manufacturer is certified as a recycler by Control Union, and every product leaving the factory carries a Control Union transaction report.',
    brochure: { href: '/brochures/grow-bag-40-percent-recycled.pdf', size: '0.9 MB' },
  },
  {
    id: 'cert-netzero',
    group: 'energy',
    src: '/assets/cert3.png',
    w: 1548,
    h: 1235,
    alt: 'Net Zero Energy Product',
    eyebrow: 'Solar-powered manufacturing',
    name: 'Net Zero Energy Product',
    copy: 'The first certified Net Zero Energy product in Sri Lanka. It is manufactured fully on renewable, solar-based energy, and every product carries third-party certification from Control Union.',
    brochure: { href: '/brochures/net-zero-energy-grow-bag.pdf', size: '12.5 MB' },
  },
  {
    id: 'cert-ecosprout',
    group: 'compostable',
    src: '/assets/cert1.png',
    w: 3875,
    h: 1140,
    alt: 'EcoSprout',
    eyebrow: 'Compostable seedling starter',
    name: 'EcoSprout',
    copy: 'A product built specifically for the nursery seedling-starter industry. Conventional systems need non-woven fabric or plastic to start germination. With EcoSprout the grower simply transfers the whole cube into its permanent home — grow bag, pot or open soil. The cube composts in the soil and disappears, so there are no stubborn plastic pieces or non-woven residue to extract. Made with certified compostable material.',
    brochure: { href: '/brochures/ecosprout-compostable-starter-cube.pdf', size: '2.3 MB' },
  },
  {
    id: 'cert-biocomp',
    group: 'compostable',
    src: '/assets/cert6.png',
    w: 2142,
    h: 872,
    alt: 'BioComp',
    eyebrow: 'Starch-based and compostable',
    name: 'BioComp',
    copy: 'Made with starch-based plastic that composts in a landfill. Certified by DIN CERTCO and OK Compost, with tests to ASTM 6400 and EN 13424 confirming the product composts under both aerobic and anaerobic degradation conditions.',
  },
  {
    id: 'cert-ecoshield',
    group: 'recyclable',
    src: '/assets/cert5.png',
    w: 1990,
    h: 1407,
    alt: 'EcoShield',
    eyebrow: 'Recyclable bulk-tea packaging',
    name: 'EcoShield',
    copy: 'A special blend engineered to carry bulk tea, replacing conventional wooden tea chests and paper sacks that are not recyclable. EcoShield is made with 100% polyethylene, so it is easily re-used and bought for value by PE recyclers worldwide. Its recyclability keeps it in line with new global sustainability and circularity laws — possibly the most sustainable solution for moving bulk tea.',
    brochure: { href: '/brochures/ecoshield-bulk-tea-packaging.pdf', size: '12.4 MB' },
  },
  {
    id: 'cert-ecopure',
    group: 'compostable',
    src: '/assets/cert4.png',
    w: 2345,
    h: 1658,
    alt: 'EcoPure',
    eyebrow: 'Biodegradable in a controlled landfill',
    name: 'EcoPure',
    copy: 'This product contains a special additive that breaks the plastic down into biomass in a controlled landfill, based on ASTM 5511 test methods. Once the bag has served its purpose it should be disposed of in an anaerobic digester, where microbial activity disintegrates the plastic — the process termed biodegradation. Because it happens in a sealed landfill, no microplastics escape into the environment.',
    brochure: { href: '/brochures/ecopure-biodegradable-grow-bag.pdf', size: '0.7 MB' },
  },
];
