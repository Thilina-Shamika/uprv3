export type AwardProduct = {
  num: string;
  flag: string;
  meta: string;
  name: string;
  copy: string;
  image: { src: string; width: number; height: number; alt: string };
  facts: [string, string][];
};

export const awardsIntro = {
  title: 'Recognised for sustainability',
  lede: 'We have been successful in winning many awards for sustainability and sustainable products, in both the local and global arena.',
};

export const awardProducts: AwardProduct[] = [
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
    facts: [
      ['Made from', 'Coconut coir, jute, peat and other plant-based fibres'],
      [
        'Why it works',
        'Better air and water circulation promotes healthy root growth and prevents overwatering',
      ],
      [
        'End of life',
        'Composted or buried in the soil, where it decomposes and adds nutrients back',
      ],
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
    facts: [
      [
        'Recycled content',
        '40% scrap — agricultural waste, industrial by-products and post-consumer waste',
      ],
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
    facts: [
      ['The difference', 'Made with materials that recycle in the same stream as other plastics'],
      ['Used for', 'Food and beverage, pet food and personal care products'],
      ['Formats', 'Various sizes and shapes, customisable with designs and branding'],
      ['In market as', 'BluC — Seafood from Ceylon'],
    ],
  },
];

export type Trophy = {
  id: string;
  /** Award programme, used to group the cabinet. */
  programme: 'WorldStar' | 'AsiaStar' | 'Lanka Star';
  year: string;
  /** Level or category engraved on the trophy, where there is one. */
  level?: string;
  /** What the award was given for, in the words on the trophy. */
  entry: string;
  awardedTo: string;
  image: { src: string; width: number; height: number };
};

/** Transcribed from the engraving on each trophy. */
export const trophies: Trophy[] = [
  {
    id: 'worldstar-2022',
    programme: 'WorldStar',
    year: '2022',
    level: 'Award for Packaging Excellence',
    entry: '100% Recyclable Packaging for Tuna',
    awardedTo: 'Overdime Exports (Pvt) Ltd, a member of the Polydime Group',
    image: {
      src: '/assets/awards/worldstar-2022-recyclable-tuna-pack.png',
      width: 582,
      height: 1000,
    },
  },
  {
    id: 'worldstar-2021',
    programme: 'WorldStar',
    year: '2021',
    level: 'Award for Packaging Excellence',
    entry: 'Grow Bag made with 40% Scrap',
    awardedTo: 'Overdime Exports (Pvt) Ltd, a member of the Polydime Group',
    image: { src: '/assets/awards/worldstar-2021-grow-bag-40-scrap.png', width: 453, height: 1000 },
  },
  {
    id: 'worldstar-2020',
    programme: 'WorldStar',
    year: '2020',
    level: 'Award for Packaging Excellence',
    entry: 'Biodegradable Grow Bag',
    awardedTo: 'Polydime Group',
    image: {
      src: '/assets/awards/worldstar-2020-biodegradable-grow-bag.png',
      width: 613,
      height: 1000,
    },
  },
  {
    id: 'asiastar-2024',
    programme: 'AsiaStar',
    year: '2024',
    entry: 'Grow Bag made with 55% Recycle Content',
    awardedTo: 'Polydime International (Pvt) Ltd',
    image: {
      src: '/assets/awards/asiastar-2024-grow-bag-55-recycled.png',
      width: 457,
      height: 1000,
    },
  },
  {
    id: 'asiastar-2020',
    programme: 'AsiaStar',
    year: '2020',
    entry: 'Grow Bag made with 40% Scrap',
    awardedTo: 'Overdime Exports (Pvt) Ltd, a member of the Polydime Group',
    image: { src: '/assets/awards/asiastar-2020-grow-bag-40-scrap.png', width: 470, height: 1000 },
  },
  {
    id: 'asiastar-2019',
    programme: 'AsiaStar',
    year: '2019',
    entry: 'Heavy Duty UV Stable Grow Bag',
    awardedTo: 'Polydime International (Pvt) Ltd (Overdime)',
    image: {
      src: '/assets/awards/asiastar-2019-heavy-duty-uv-grow-bag.png',
      width: 458,
      height: 1000,
    },
  },
  {
    id: 'lankastar-2024',
    programme: 'Lanka Star',
    year: '2024',
    level: 'LankaStar Gold',
    entry: 'Non-woven Grow Bag',
    awardedTo: 'Polydime International (Pvt) Ltd',
    image: {
      src: '/assets/awards/lankastar-2024-non-woven-grow-bag.png',
      width: 460,
      height: 1000,
    },
  },
  {
    id: 'lankastar-2023',
    programme: 'Lanka Star',
    year: '2023',
    level: 'LankaStar Gold · Consumer Packaging, Industrial',
    entry: 'Grow Bag with planting hole cut on the same run',
    awardedTo: 'Polydime Plastic Industries Ltd',
    image: {
      src: '/assets/awards/lankastar-2023-planting-hole-grow-bag.png',
      width: 435,
      height: 1000,
    },
  },
  {
    id: 'lankastar-2020-innovation',
    programme: 'Lanka Star',
    year: '2020',
    level: 'LankaStar Gold · Innovation',
    entry: 'Grow bag with recycled plastic (scrap)',
    awardedTo: 'Polydime International (Pvt) Ltd',
    image: { src: '/assets/awards/lankastar-2020-innovation.png', width: 466, height: 1000 },
  },
  {
    id: 'lankastar-2020-consumer',
    programme: 'Lanka Star',
    year: '2020',
    level: 'LankaStar Gold · Consumer Packaging, Flexible',
    entry: 'Grow Bag, consumer pack',
    awardedTo: 'Polydime International (Pvt) Ltd',
    image: {
      src: '/assets/awards/lankastar-2020-consumer-packaging.png',
      width: 438,
      height: 1000,
    },
  },
  {
    id: 'lankastar-2020-material',
    programme: 'Lanka Star',
    year: '2020',
    level: 'LankaStar Gold · Packaging Material, Flexible',
    entry: 'Grow bag with recycled plastic (scrap)',
    awardedTo: 'Polydime International (Pvt) Ltd',
    image: {
      src: '/assets/awards/lankastar-2020-packaging-material.png',
      width: 441,
      height: 1000,
    },
  },
];

export const programmes = [
  {
    name: 'WorldStar' as const,
    body: 'World Packaging Organisation — Award for Packaging Excellence.',
  },
  { name: 'AsiaStar' as const, body: 'The Asian Packaging Federation.' },
  {
    name: 'Lanka Star' as const,
    body: 'Sri Lanka Packaging Awards, Sri Lanka Institute of Packaging.',
  },
];

/** Counts for the hero, so adding a trophy above updates the page. */
export const TROPHY_COUNT = trophies.length;
export const PROGRAMME_COUNT = programmes.length;
export const AWARD_YEARS = (() => {
  const years = trophies.map((t) => Number(t.year)).sort((a, b) => a - b);
  return `${years[0]}–${String(years[years.length - 1]).slice(2)}`;
})();
