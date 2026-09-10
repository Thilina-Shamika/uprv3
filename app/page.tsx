import Nav from '@/components/site/Nav';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import JoinCta from '@/components/site/JoinCta';
import Hero from '@/components/home/Hero';
import Pledge from '@/components/home/Pledge';
import Proof from '@/components/home/Proof';
import KeywordTape from '@/components/home/KeywordTape';
import MaterialCards from '@/components/home/MaterialCards';
import Circular from '@/components/home/Circular';
import Quote from '@/components/home/Quote';
import ImpactStats from '@/components/home/ImpactStats';
import Awards from '@/components/home/Awards';
import Blog from '@/components/home/Blog';
import Faq from '@/components/home/Faq';
import Partners from '@/components/home/Partners';

export default function Page() {
  return (
    // The homepage prototype rises from 34px over .8s; Materials uses 26px/.9s.
    <Reveal y={34} duration={0.8}>
      <Nav active="home" />
      <Hero />
      <Pledge />
      <Proof />
      <KeywordTape />
      <MaterialCards />
      <Circular />
      <Quote />
      <ImpactStats />
      <Awards />
      <Blog />
      <Faq />
      <Partners />
      <JoinCta
        eyebrowNum="07"
        title="Replace virgin plastic with"
        accent="recycled"
        lede="Partner with us to reduce virgin plastic in the environment — and get your product featured on our platform as a champion of sustainability."
      />
      <Footer />
    </Reveal>
  );
}
