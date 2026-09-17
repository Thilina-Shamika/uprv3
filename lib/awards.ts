export type AwardProduct = {
  num: string;
  flag: string;
  meta: string;
  name: string;
  copy: string;
  image: { src: string; width: number; height: number; alt: string };
  facts: [string, string][];
};

export type Trophy = { src: string; name: string; year: string; desc: string };

export const awardsIntro = {
  title: 'Recognised for sustainability',
  lede: 'We have been successful in winning many awards for sustainability and sustainable products, in both the local and global arena.',
};

export const trophies: Trophy[] = [
  {
    src: '/assets/trophy-wpo.png',
    name: 'WorldStar for Packaging',
    year: '2020',
    desc: 'World Packaging Organisation — Award for Packaging Excellence, honouring Polydime Group for the Biodegradable Grow Bag',
  },
  {
    src: '/assets/trophy-lankastar.png',
    name: 'Lanka Star Bronze',
    year: '2019',
    desc: 'Sri Lanka Institute of Packaging — Heavy Duty UV Stable Grow Bag',
  },
  {
    src: '/assets/trophy-asiastar.png',
    name: 'AsiaStar Award',
    year: '2019',
    desc: 'The Asian Packaging Federation — Heavy Duty UV Stable Grow Bag',
  },
];

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
