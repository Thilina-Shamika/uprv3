/**
 * Our Pledge page copy, from "UPR.lk Site Write ups.docx". Spelling and a few
 * grammar slips were corrected; the wording is otherwise as supplied.
 */

export const story = {
  heading: 'At Polydime we see things differently.',
  paragraphs: [
    'The Polydime group has been associated with the manufacture of plastic products for over 2½ decades. In the past its focus was on a make-and-sell model for plastic. However, in 2015 the management decided to change its model by incorporating the word “sustainability” in its vision, working towards responsible production and use, promoting responsible disposal, and looking at ways to direct such disposal responsibly.',
    'Whilst plastic has been classified as an environmental demon by many and has received much negative publicity, to the degree that even banning it is on the cards, what people do not realise is that without it our way of life could be much more complicated.',
    'Plastic is one of the most revolutionary inventions, making life convenient, cost effective, functional and versatile. Walk around the environment you are in right now, perhaps your home, your office or even your car, understand what is made with plastic, and then think about what would happen if it were all banned.',
    'upr.lk was set up as an education site of the company to promote the responsible use of plastic, and to salute all users who are willing to journey with us in our promotion and use of sustainable products.',
  ],
};

export const overview = {
  heading: 'Our Four-Pillar Pledge for a More Sustainable Future',
  subheading: 'A sustainability strategy built on four pillars',
  lede: 'Our UPR sustainability pledge is built around four connected pillars: Recycle, Biodegrade/Compost, Net Zero Energy and Educate.',
  paragraphs: [
    'Plastic is part of modern life. The challenge is not simply to eliminate plastic, it is to change how plastic is produced, used, recovered and managed at the end of its life. In the early 1960s, when Sten Gustaf Thulin, the inventor of the plastic bag, first engineered it, he never designed it to be used and disposed of, but to be reused multiple times.',
    'Together, these pillars guide our approach to reducing plastic waste, increasing the use of recycled and bio-based materials, supporting more responsible production, and encouraging better understanding of plastic, its role in a circular economy and its correct disposal.',
  ],
};

export const ambition = {
  figure: '50%',
  statement:
    'Almost 50% of Group output targeted from recycled and bio-based plastics leads to clear circular systems in plastic use.',
  paragraphs: [
    'We continue to strive towards increasing the proportion of recycled and bio-based plastics used across our output, supporting a transition from a linear make, use, dispose model towards a more circular plastics economy.',
    'Our goal is to reduce the environmental impact of plastic film through better materials, responsible production, resource recovery and education, while continuing to develop solutions for local and global markets in line with EPR, PPWR and other laws that are gathering momentum globally.',
  ],
};

export type Pillar = {
  /** Anchor ids are linked from the home page's "Our Strategy" cards. */
  id: 'recycle' | 'biodegradable' | 'netzero' | 'educate';
  num: string;
  name: string;
  title: string;
  body: string[];
  /** A standout fact, set apart from the body copy. */
  highlight?: string;
  focus: string[];
  callout: { title: string; body: string[] };
  icon: { src: string; width: number; height: number };
  /** Photos shown in a slider under the pillar copy. */
  gallery?: GalleryImage[];
};

export type GalleryImage = { src: string; width: number; height: number; alt: string };

export const pillars: Pillar[] = [
  {
    id: 'recycle',
    num: '01',
    name: 'Recycle',
    title: 'Turning Plastic Waste into a Resource',
    body: [
      'Recycling is at the heart of our approach to creating a more circular plastics economy.',
      'We manufacture a range of products incorporating recycled plastic, helping give previously used plastic a new life instead of allowing it to become waste.',
      'Approximately 40% of our product is currently made from recycled plastic, while our wider supply chain encompasses the collection and processing of plastic waste, manufacture of finished products and distribution of recycled-material products to local and export markets.',
      'This integrated approach allows us to look beyond recycling as a single process. We consider the entire plastic value chain, from waste collection and material recovery through to manufacturing and the delivery of recycled plastic products.',
    ],
    focus: [
      'Recycled plastic products',
      'Plastic waste recovery and processing',
      'Circular economy solutions',
      'Responsible plastic manufacturing',
      'Recycled materials for local and export markets',
      'Reducing reliance on virgin plastic',
    ],
    callout: {
      title: 'A better way to look at plastic',
      body: [
        'Waste is not always the end of the story. With the right systems, it can become the beginning of another product. As such, we believe plastic trash is treasure that can be used back into product.',
        'The company has obtained RCS approval from Control Union, which audits its input and output supply chains and issues transaction reports for every bit of plastic we purchase and use in our production, giving customers confidence that sustainable materials are used in their products.',
      ],
    },
    icon: { src: '/assets/pledge/pledge-recycle.png', width: 795, height: 604 },
    gallery: [
      {
        src: '/assets/pledge/recycle/recycle-sorted-bin.jpg',
        width: 1536,
        height: 1024,
        alt: 'A recycling bin filled with used plastic containers, lids and film',
      },
      {
        src: '/assets/pledge/recycle/recycle-collection-truck.jpg',
        width: 1671,
        height: 941,
        alt: 'A recycling truck carrying collected plastic bottles',
      },
    ],
  },
  {
    id: 'biodegradable',
    num: '02',
    name: 'Biodegradable Products',
    title: 'When Plastic Alternatives Need to Return to Nature',
    body: [
      'Not every application can be addressed through conventional recycling. For selected applications, we provide starch-based, 100% biodegradable and compostable products designed to break down naturally at the end of their useful life under appropriate conditions.',
      'These alternatives provide customers with options where reducing persistent plastic waste is particularly important.',
      'Our biodegradable product range includes applications such as grow bags, lunch sheets, seedling bags and mulch film, helping businesses and consumers explore alternatives designed with end-of-life considerations in mind.',
      'We continue to develop bio-based solutions that can support more responsible consumption without compromising the practical requirements of everyday products.',
    ],
    focus: [
      'Starch-based biodegradable products',
      'Compostable plastic alternatives',
      'Biodegradable grow bags',
      'Biodegradable lunch sheets',
      'Bio-based materials',
      'Reduced dependence on conventional plastics',
      'End-of-life conscious product development',
    ],
    callout: {
      title: 'Better materials. Better choices.',
      body: [
        'The future of packaging isn’t about one material. It’s about choosing the right material for the right application, and considering what happens after use.',
      ],
    },
    icon: { src: '/assets/pledge/pledge-biodegradable.png', width: 795, height: 636 },
    gallery: [
      {
        src: '/assets/pledge/biodegradable/biodegradable-grow-rows.jpg',
        width: 1672,
        height: 941,
        alt: 'Seedlings growing in rows of biodegradable planting sleeves',
      },
      {
        src: '/assets/pledge/biodegradable/biodegradable-film-in-soil.jpg',
        width: 1536,
        height: 1024,
        alt: 'Compostable film breaking down in soil',
      },
    ],
  },
  {
    id: 'netzero',
    num: '03',
    name: 'Net Zero Energy',
    title: 'Moving Manufacturing Towards Renewable Energy',
    body: [
      'Making products with the environment in mind. Reducing the impact of plastics also means looking beyond the material itself.',
      'Manufacturing requires energy, and the source of that energy matters. Conventional energy in Sri Lanka comes from the national grid, at least 45% of which relies on natural resources such as coal and diesel.',
      'As industries around the world work to reduce greenhouse gas emissions and transition towards cleaner energy, we are investing in renewable energy solutions and more sustainable production practices.',
      'Our investments in renewable energy infrastructure enable certain products to be manufactured using renewably sourced energy, helping reduce dependence on conventional energy sources across applicable manufacturing operations.',
      'This is part of our longer-term ambition to reduce the carbon intensity of production and move towards a more energy-conscious manufacturing model.',
    ],
    highlight:
      'Polydime is the first to launch a Net Zero product in Sri Lanka that is certified by Control Union.',
    focus: [
      'Renewable energy in manufacturing',
      'Energy-efficient production',
      'Reduced greenhouse gas emissions',
      'Lower-carbon manufacturing',
      'Sustainable production practices',
      'Renewable energy investment',
    ],
    callout: {
      title: 'Sustainability doesn’t stop at the raw material.',
      body: ['How a product is made matters too.'],
    },
    icon: { src: '/assets/pledge/pledge-netzero.png', width: 591, height: 540 },
  },
  {
    id: 'educate',
    num: '04',
    name: 'Educate',
    title: 'Changing the Conversation Around Plastic',
    body: [
      'Sustainability is not only a manufacturing challenge. It is an education challenge.',
      'Better outcomes depend on people understanding how plastic should be used, collected, separated, recycled and disposed of responsibly.',
      'Through education and awareness, we aim to encourage more informed conversations about plastic, including its benefits, limitations and environmental impact.',
      'Plastic itself is not automatically an environmental hazard. How it is designed, used, managed and disposed of determines what happens next.',
      'We believe that creating a more sustainable future requires collaboration across manufacturers, businesses, consumers, communities and policymakers.',
      'We invest in children aged 4 to 14 through school environmental programmes, where our message is very clear: plastic is a fabulous product, but you need to make sure it is disposed of responsibly, in a bin. Simply that.',
      'That means moving beyond simply saying “plastic is bad” and towards a more useful question:',
    ],
    focus: [
      'Plastic awareness and education',
      'Responsible plastic use',
      'Waste segregation and disposal',
      'Recycling awareness',
      'Circular economy education',
      'Consumer and industry awareness',
      'Responsible plastic management',
    ],
    callout: {
      title: 'What happens to plastic after we use it?',
      body: [
        'Our education pillar aims to help answer that question and encourage more responsible behaviour throughout the plastic lifecycle.',
      ],
    },
    icon: { src: '/assets/pledge/pledge-educate.png', width: 763, height: 572 },
    gallery: [
      {
        src: '/assets/pledge/educate/educate-auditorium-overview.jpg',
        width: 1672,
        height: 941,
        alt: 'A packed school auditorium during a “What do we do with your trash?” session',
      },
      {
        src: '/assets/pledge/educate/educate-school-auditorium.jpg',
        width: 1672,
        height: 941,
        alt: 'Students watching a “Plastic is forever” awareness presentation',
      },
      {
        src: '/assets/pledge/educate/educate-stage-talk.jpg',
        width: 1448,
        height: 1086,
        alt: 'A Polydime presenter explaining what happens to recycled plastic',
      },
      {
        src: '/assets/pledge/educate/educate-plastics-debate.jpg',
        width: 1448,
        height: 1086,
        alt: 'A talk asking whether plastic is one of the greatest inventions or the biggest environmental concern',
      },
      {
        src: '/assets/pledge/educate/educate-polydime-campus.jpg',
        width: 1672,
        height: 941,
        alt: 'Polydime Plastics campus with banners and landscaped gardens',
      },
      {
        src: '/assets/pledge/educate/educate-factory-gate.jpg',
        width: 1672,
        height: 941,
        alt: 'Visitors arriving at the Polydime Plastics factory gate',
      },
      {
        src: '/assets/pledge/educate/educate-rooftop-solar.jpg',
        width: 1697,
        height: 927,
        alt: 'Solar panels installed across the factory rooftops',
      },
      {
        src: '/assets/pledge/educate/educate-solar-array.jpg',
        width: 1672,
        height: 941,
        alt: 'Rooftop solar array overlooking the city',
      },
      {
        src: '/assets/pledge/educate/educate-inverter-room.jpg',
        width: 1672,
        height: 941,
        alt: 'Solar inverter room powering the factory',
      },
      {
        src: '/assets/pledge/educate/educate-inverter-detail.jpg',
        width: 1672,
        height: 941,
        alt: 'Solar inverter and DC distribution board',
      },
    ],
  },
];

export const pledge = {
  heading: 'Four Pillars. One Direction.',
  commitments: [
    'Recycle what we can.',
    'Choose better materials where we can.',
    'Reduce the energy impact of production.',
    'Educate people to manage plastic responsibly.',
  ],
  intro: 'Our four-pillar strategy brings these commitments together under one ambition:',
  ambition: 'To reduce, and ultimately help eliminate, plastic film pollution in Sri Lanka.',
  paragraphs: [
    'We know that no single product, technology or organisation can solve the plastics challenge alone.',
    'But by changing what we make, what we make it from, how we make it and what happens after use, we can help build a more circular and responsible plastics industry.',
  ],
  closing: 'This is our pledge. And this is the direction we are working towards.',
};

/** Back-end wording supplied for search. */
export const seo = {
  h1: 'UPR: Our Four-Pillar Sustainability Pledge',
  title: 'Sustainable Plastics & Recycling in Sri Lanka | UPR',
  description:
    'Discover UPR’s four-pillar sustainability strategy focused on recycled plastics, biodegradable products, renewable energy and plastic education in Sri Lanka.',
  keywords: [
    'sustainable plastics Sri Lanka',
    'recycled plastics Sri Lanka',
    'plastic recycling Sri Lanka',
    'sustainable plastic manufacturing',
    'biodegradable products Sri Lanka',
    'compostable products Sri Lanka',
    'biodegradable packaging Sri Lanka',
    'renewable energy manufacturing',
    'circular economy Sri Lanka',
    'plastic waste management Sri Lanka',
  ],
};
