export type NewsItem = {
  title: string;
  /** Shown as given, e.g. "March 2026". */
  date: string;
  category: string;
  excerpt: string;
  image?: { src: string; width: number; height: number; alt: string };
};

/**
 * There are no article pages yet, so every item links back to the top of the
 * news page. Point this at a real route when articles exist.
 */
export const NEWS_HREF = '#top';

/**
 * Add a news item by putting it at the top of this list: the news page and the
 * home page section both read from here, newest first.
 */
export const news: NewsItem[] = [
  {
    title: 'Sri Lanka’s first certified Net Zero Energy product',
    date: 'Date to confirm',
    category: 'Certification',
    excerpt:
      'Our grow bag is manufactured fully on renewable, solar-based energy, and every product carries third-party certification from Control Union.',
    image: {
      src: '/assets/pledge/educate/educate-rooftop-solar.jpg',
      width: 1697,
      height: 927,
      alt: 'Solar panels installed across the factory rooftops',
    },
  },
  {
    title: 'WorldStar for Packaging awarded to the Biodegradable Grow Bag',
    date: '2020',
    category: 'Awards',
    excerpt:
      'The World Packaging Organisation recognised Polydime Group with its Award for Packaging Excellence for the Biodegradable Grow Bag.',
    image: {
      src: '/assets/trophy-wpo.png',
      width: 760,
      height: 1013,
      alt: 'The WorldStar for Packaging trophy',
    },
  },
  {
    title: 'AsiaStar and Lanka Star Bronze for the Heavy Duty UV Stable Grow Bag',
    date: '2019',
    category: 'Awards',
    excerpt:
      'The Asian Packaging Federation and the Sri Lanka Institute of Packaging both recognised the Heavy Duty UV Stable Grow Bag.',
    image: {
      src: '/assets/trophy-asiastar.png',
      width: 760,
      height: 1013,
      alt: 'The AsiaStar award trophy',
    },
  },
];
