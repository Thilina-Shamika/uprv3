export type Post = {
  title: string;
  category: string;
  date: string;
  read: string;
  excerpt: string;
  /** Posts without artwork show the prototype's "Image to come" placeholder. */
  image?: { src: string; width: number; height: number };
};

/**
 * The design ships no article pages, so every post links back to the top of
 * the journal (as in the prototype) until real articles exist.
 */
export const POST_HREF = '#top';

export const featured: Post & { image: NonNullable<Post['image']>; alt: string } = {
  title: 'The Circular Economy for Plastics',
  category: 'Circular Economy',
  date: 'Jul 2026',
  read: '6 min read',
  excerpt:
    'Why moving beyond take–make–dispose is the single biggest lever for reducing the virgin polymer entering the system — and what it takes to close the loop in practice.',
  image: { src: '/assets/hero-growbag.jpg', width: 1752, height: 898 },
  alt: 'A seedling growing in a biodegradable grow bag',
};

export const posts: Post[] = [
  {
    title: 'The Circular Economy for Plastics',
    category: 'Circular Economy',
    date: 'Jul 2026',
    read: '6 min read',
    excerpt:
      'Why moving beyond take–make–dispose is the single biggest lever for reducing virgin polymer in the system.',
    image: { src: '/assets/hero-growbag.jpg', width: 1752, height: 898 },
  },
  {
    title: 'Biodegradable bags buried for three years still work',
    category: 'Innovation',
    date: 'Jun 2026',
    read: '4 min read',
    excerpt:
      'A study on what really happens to biodegradable carrier bags left in soil and seawater over time.',
  },
  {
    title: 'The recycling crisis: learn how to do it right',
    category: 'Guides',
    date: 'Jun 2026',
    read: '5 min read',
    excerpt:
      'Sorting, cleaning and the small habits that decide whether packaging is recovered or lost to landfill.',
  },
  {
    title: 'Six technologies tackling plastic pollution',
    category: 'Technology',
    date: 'May 2026',
    read: '7 min read',
    excerpt:
      'From chemical recycling to river interceptors — the approaches that are actually scaling.',
    image: { src: '/assets/hero-sprout.jpg', width: 1752, height: 898 },
  },
  {
    title: 'Robotic farms could be the future',
    category: 'Agriculture',
    date: 'May 2026',
    read: '5 min read',
    excerpt: 'Automated growing changes the packaging it needs — lighter, tougher, and recoverable.',
    image: { src: '/assets/award-growbag.png', width: 1122, height: 1493 },
  },
  {
    title: 'Biodegradable shopping bags buried for three years',
    category: 'Circular Economy',
    date: 'Apr 2026',
    read: '4 min read',
    excerpt:
      'What field trials tell us about degradation claims, and how to read certification properly.',
    image: { src: '/assets/logo-upr.png', width: 572, height: 192 },
  },
];

export const categories = ['All', 'Circular Economy', 'Innovation', 'Guides', 'Technology', 'Agriculture'];
