export type Partner = {
  rank: string;
  src: string;
  name: string;
  country: string;
  desc: string;
  tag: string;
  num: string;
};

/** The recovery ledger, ordered by kilograms recovered. */
export const partners: Partner[] = [
  {
    rank: "01",
    src: "/assets/partners/polydime-1.png",
    name: "Polydime Plastics",
    country: "Sri Lanka",
    desc: "Concrete membrane made with 100% recycled film",
    tag: "Recycled",
    num: "16,691,227",
  },
  {
    rank: "02",
    src: "/assets/partners/polydime-1.png",
    name: "Polydime Plastics",
    country: "Sri Lanka",
    desc: "Irrigation pipes made out of 100% recycled content",
    tag: "Recycled",
    num: "4,845,252",
  },
  {
    rank: "03",
    src: "/assets/partners/polydime-1.png",
    name: "Polydime Plastics",
    country: "Sri Lanka",
    desc: "Compostable lunch sheets",
    tag: "Compostable",
    num: "370,864",
  },
  {
    rank: "04",
    src: "/assets/partners/biogrow-india.png",
    name: "Bio Grow",
    country: "India",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "114,749",
  },
  {
    rank: "05",
    src: "/assets/partners/polydime-1.png",
    name: "Polydime Plastics",
    country: "Sri Lanka",
    desc: "Planting bag",
    tag: "Recycled",
    num: "100,000",
  },
  {
    rank: "06",
    src: "/assets/partners/biogrow-srilanka.png",
    name: "Bio Grow",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "86,550",
  },
  {
    rank: "07",
    src: "/assets/partners/riococo.png",
    name: "Riococo Worldwide",
    country: "Global",
    desc: "Biodegradable grow bag with Ecopure",
    tag: "Biodegradable",
    num: "64,087",
  },
  {
    rank: "08",
    src: "/assets/partners/access.png",
    name: "Access Engineering",
    country: "Sri Lanka",
    desc: "Concrete membrane made with 100% recycled film",
    tag: "Recycled",
    num: "46,000",
  },
  {
    rank: "09",
    src: "/assets/partners/jiffy.png",
    name: "Jiffy",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "44,529",
  },
  {
    rank: "10",
    src: "/assets/partners/lanka-green-growers.png",
    name: "Lanka Green Growers",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "37,208",
  },
  {
    rank: "11",
    src: "/assets/partners/quickgrow.png",
    name: "Quick Grow",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "31,858",
  },
  {
    rank: "12",
    src: "/assets/partners/benchmark.png",
    name: "Benchmark International",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "31,251",
  },
  {
    rank: "13",
    src: "/assets/partners/pelemix-india.png",
    name: "Pelemix",
    country: "India",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "24,544",
  },
  {
    rank: "14",
    src: "/assets/partners/botanicoir-srilanka.png",
    name: "Botanicoir",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "17,008",
  },
  {
    rank: "15",
    src: "/assets/partners/pelemix-srilanka.png",
    name: "Pelemix",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "16,239",
  },
  {
    rank: "16",
    src: "/assets/partners/botanicoir-india.png",
    name: "Botanicoir",
    country: "India",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "9,907",
  },
  {
    rank: "17",
    src: "/assets/partners/cocogreen.png",
    name: "Cocogreen",
    country: "Global",
    desc: "Biodegradable grow bag with Ecopure",
    tag: "Biodegradable",
    num: "7,199",
  },
  {
    rank: "18",
    src: "/assets/partners/hayleys-fibre.png",
    name: "Hayleys Fibre",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "6,775",
  },
  {
    rank: "19",
    src: "/assets/partners/consarc.png",
    name: "Consarc",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "3,439",
  },
  {
    rank: "20",
    src: "/assets/partners/tropicoir.png",
    name: "Tropicoir Lanka",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "2,655",
  },
  {
    rank: "21",
    src: "/assets/partners/ceycoir.png",
    name: "CeyCoir",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "777",
  },
  {
    rank: "22",
    src: "/assets/partners/growrite.png",
    name: "Growrite Substrates",
    country: "Sri Lanka",
    desc: "Grow bag produced with 40% recycled waste material",
    tag: "Recycled",
    num: "43",
  },
];

/** The prototype shows six, then reveals three at a time. */
export const PARTNER_PAGE = 3;
export const PARTNER_INITIAL = 6;

/** Card accent (bottom rule and legend swatch) by material type. */
export const tagAccent: Record<string, string> = {
  Recycled: '#c7f24d',
  Biodegradable: '#8fd0a0',
  Compostable: '#5fbec4',
};

/** Ledger totals by material type; they sum to the 22,346,157 kg headline. */
export const ledgerTotals = [
  { value: '21,903,204', label: 'Recycled kg', lead: true },
  { value: '71,286', label: 'Biodegradable kg' },
  { value: '371,667', label: 'Compostable kg' },
  { value: '22', label: 'Partner programmes' },
];

/** Polydime's own production lines, as opposed to partner brands. */
const isInHouse = (p: Partner) => p.name === 'Polydime Plastics';
const kg = (value: string) => Number(value.replace(/,/g, ''));

/**
 * Display order for the Partners page: buyers first, largest volume to
 * smallest, with Polydime's own lines at the bottom. Ranks are renumbered to
 * match the order shown, so the column reads 01 downwards.
 */
export const ledger: Partner[] = [
  ...partners.filter((p) => !isInHouse(p)).sort((a, b) => kg(b.num) - kg(a.num)),
  ...partners.filter(isInHouse).sort((a, b) => kg(b.num) - kg(a.num)),
].map((partner, i) => ({ ...partner, rank: String(i + 1).padStart(2, '0') }));
