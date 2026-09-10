import type { Metadata } from 'next';
import Nav from '@/components/site/Nav';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import Tape from '@/components/site/Tape';
import JoinCta from '@/components/site/JoinCta';
import MaterialsHero from '@/components/materials/MaterialsHero';
import Compare from '@/components/materials/Compare';
import Grades from '@/components/materials/Grades';
import Recovery from '@/components/materials/Recovery';

export const metadata: Metadata = {
  title: 'Materials — Use Plastic Responsibly',
  description:
    'Three recyclable structures, one promise. PE, PE Plus and PE Plus Xtra, engineered to be recovered.',
};

const tapeItems = [
  'PE',
  'PE Plus',
  'PE Plus Xtra',
  'Mono-material by design',
  'Recovered, not discarded',
];

export default function Page() {
  return (
    <Reveal>
      <Nav active="materials" />
      <MaterialsHero />
      <Tape label="Materials" items={tapeItems} />
      <Compare />
      <Grades />
      <Recovery />
      <JoinCta
        title="Not sure which grade you need?"
        accent="Ask us"
        lede="Partner with us to reduce virgin plastic in the environment — and get your product featured on our platform as a champion of sustainability."
      />
      <Footer />
    </Reveal>
  );
}
