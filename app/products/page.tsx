import type { Metadata } from 'next';
import Reveal from '@/components/site/Reveal';
import HomeFooter from '@/components/home/HomeFooter';
import SiteHeader from '@/components/site/SiteHeader';
import ProductsHero from '@/components/products/ProductsHero';
import ProductGroups from '@/components/products/ProductGroups';
import ProductsClose from '@/components/products/ProductsClose';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Products — Use Plastic Responsibly',
  description:
    'Recyclable, recycled-content, Net Zero Energy and compostable plastic products from Polydime, and what each product mark means.',
};

export default function Page() {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />
        <ProductsHero />
        <ProductGroups />
        <ProductsClose />
        <HomeFooter />
      </div>
    </Reveal>
  );
}
