/**
 * The four pledge pillars. Their ids are the anchors the home page's
 * "Our Strategy" cards link to (/pledge#recycle and so on).
 */
export type Pillar = {
  id: 'recycle' | 'biodegradable' | 'netzero' | 'educate';
  num: string;
  /** Short name for the hero tabs and side rail. */
  tab: string;
  /** One-liner under the hero tab. */
  summary: string;
  title: string;
  theme: 'dark' | 'light' | 'lime';
  lede: string;
  detail: string;
  icon: { src: string; width: number; height: number };
};

export const pillars: Pillar[] = [
  {
    id: 'recycle',
    num: '01',
    tab: 'Recycle',
    summary: 'Continuously recyclable products, ~40% recycled content.',
    title: 'Recycle',
    theme: 'dark',
    lede: 'We offer a range of products that can be recycled continuously. Approximately 40% of our product is made from recycled plastic.',
    detail:
      'Our own supply chain covers collection, processing of plastic waste, processing of finished product, and distribution of recycle-based products into local and export markets.',
    icon: { src: '/assets/pledge/pledge-recycle.png', width: 795, height: 604 },
  },
  {
    id: 'biodegradable',
    num: '02',
    tab: 'Biodegradable',
    summary: 'Starch-based, fully compostable alternatives.',
    title: 'Biodegradable Products',
    theme: 'light',
    lede: 'We provide customers with guaranteed starch-based, 100% biodegradable and compostable products.',
    detail:
      "These have become an essential part of our customers' lifestyle — from grow bags to lunch sheets that break down naturally at end of life.",
    icon: { src: '/assets/pledge/pledge-biodegradable.png', width: 795, height: 636 },
  },
  {
    id: 'netzero',
    num: '03',
    tab: 'Net Zero Energy',
    summary: 'Renewably sourced energy for selected lines.',
    title: 'Net Zero Energy',
    theme: 'lime',
    lede: 'Under pressure to reduce greenhouse gas emissions, companies are striving to make products from renewable energy sources.',
    detail:
      'Polydime has made significant investment in this area, so that certain products can be manufactured using renewably sourced energy.',
    icon: { src: '/assets/pledge/pledge-netzero.png', width: 591, height: 540 },
  },
  {
    id: 'educate',
    num: '04',
    tab: 'Educate',
    summary: 'Awareness on correct use and disposal.',
    title: 'Educate',
    theme: 'dark',
    lede: 'Education is key to raising awareness in the general public and getting their buy-in on the uses of plastic.',
    detail:
      'We explain the benefits of plastic, and how it is not an environmental hazard when it is disposed of properly.',
    icon: { src: '/assets/pledge/pledge-educate.png', width: 763, height: 572 },
  },
];
