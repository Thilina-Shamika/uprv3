/** A paragraph, a sub-heading, or a bullet list inside an article. */
export type Block = { p: string } | { h: string } | { ul: string[] };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  read: string;
  excerpt: string;
  /** Posts without artwork show a plain category tile until photography exists. */
  image?: { src: string; width: number; height: number; alt: string };
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: 'the-leaching-truth-plastic-vs-paper-chemistry',
    title: 'The Leaching Truth: Plastic vs. Paper Chemistry',
    category: 'Materials',
    date: 'October 2026',
    read: '4 min read',
    excerpt:
      'Consumer plastics are inert by design, while “eco-friendly” paper packaging is treated with a cocktail of chemicals that leach as it rots. The chemistry tells a different story to the headlines.',
    image: {
      src: '/assets/blog/leaching-truth-plastic-vs-paper.jpg',
      width: 800,
      height: 800,
      alt: 'Infographic comparing the landfill behaviour of consumer plastics and treated paper packaging',
    },
    body: [
      { p: '“Plastics in landfills are leaching toxic chemicals.”' },
      {
        p: 'We hear this claim constantly. It sounds logical, it makes headlines, and it has become accepted public narrative and concern.',
      },
      {
        p: 'But it completely ignores basic polymer chemistry and the reality of the “eco-friendly” alternatives we are pushed to use instead.',
      },
      {
        p: 'Here is a truth that is not being talked about: the vast majority of consumer packaging plastics, such as PE, PP and PET, are highly stable, inert polymers that do not contain harmful chemicals to leach in the first place.',
      },
      {
        p: 'They are specifically engineered to be chemically unreactive so they can safely contact food, water and medical supplies. When they are buried in a landfill, they remain inert. They do not magically rot, degrade, or begin producing toxic liquids.',
      },
      { h: 'Now look at the “green” alternative' },
      {
        p: 'Increasingly, paper is being modified to do the job plastic was intended to do.',
      },
      {
        p: 'In its natural, raw state, paper is highly permeable. It turns to mush when wet and lets grease seep straight through. To make paper usable for food packaging, it must undergo heavy chemical processing and be treated with a cocktail of additives. What is that strange taste from your paper straw or cup? You are tasting chemicals that dissolve when they get wet or exposed to heat:',
      },
      {
        ul: [
          'PFAS and non-PFAS chemical coatings for grease and water resistance',
          'Wet-strength resins',
          'Synthetic adhesives',
          'Chemical inks',
        ],
      },
      { h: 'What happens in the landfill' },
      {
        p: 'Unlike inert, non-reactive plastics, paper gets soggy and degrades. When treated paper and cardboard end up in landfills, they break down and rot.',
      },
      {
        p: 'The heavy chemicals, PFAS and processing agents used to treat them are stripped away. These chemicals leach directly into the surrounding soil and groundwater as part of the landfill’s liquid runoff, the leachate.',
      },
      { h: 'Look at the chemistry, not the hype' },
      {
        p: 'If we want to make material decisions that actually protect the environment, we have to look at the chemistry, not the media hype.',
      },
      {
        p: 'Substituting inert, highly stable plastics with chemically intensive paper packaging is not really a win for the environment. It is a classic case of swapping one highly visible physical waste problem for another, invisible chemical pollution problem.',
      },
      {
        p: 'Let us stop letting emotional narratives drive our material choices. This is what happens when we force paper to have similar properties to plastic: a square peg in a round hole.',
      },
      {
        p: 'Unless you really enjoy sucking on chemicals, ditch the straw and drink out of glass.',
      },
      {
        p: 'Rather, focus on better waste handling and mismanaged waste. Problems are not solved by forcing the use of materials that simply do not suit the application performance requirements.',
      },
    ],
  },
];

/** The newest post, shown large in the journal hero. */
export const featured = posts[0];

export const postHref = (post: Post) => `/blog/${post.slug}`;

/** Filter chips are built from the posts themselves. */
export const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];
