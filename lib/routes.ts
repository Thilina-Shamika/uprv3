/**
 * Single source of truth for site routes. The prototypes link to `.dc.html`
 * filenames; this maps each to its real route so no link is left dangling.
 */
export const routes = {
  home: '/',
  materials: '/materials',
  pledge: '/pledge',
  awards: '/awards',
  partners: '/partners',
  blog: '/blog',
  joinUs: '/join-us',
} as const;

export const primaryNav = [
  { href: routes.materials, label: 'Materials' },
  { href: routes.pledge, label: 'Our Pledge' },
  { href: routes.awards, label: 'Awards & Accolades' },
  { href: routes.partners, label: 'Partners' },
  { href: routes.blog, label: 'Blog' },
] as const;

export const contact = {
  email: 'info@polydime.com',
  phone: '(+94) 777 306 412',
  phoneHref: 'tel:+94777306412',
  address: '122 Stratford Avenue, Kirulapone, Colombo 06, Sri Lanka',
  hours: 'Open 9AM – 6PM (Mon – Fri)',
} as const;
