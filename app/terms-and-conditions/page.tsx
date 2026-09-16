import type { Metadata } from 'next';
import LegalDocument from '@/components/site/LegalDocument';
import { EFFECTIVE_DATE, LAST_UPDATED, sections } from '@/lib/terms';
import { routes } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Use Plastic Responsibly',
  description:
    'The terms governing your access to and use of the UPR — Using Plastic Responsibly website.',
};

export default function Page() {
  return (
    <LegalDocument
      crumb="Terms & Conditions"
      title="Terms &"
      accent="Conditions"
      lede="The terms that govern your access to and use of the UPR website, its content, resources and contact facilities."
      effectiveDate={EFFECTIVE_DATE}
      lastUpdated={LAST_UPDATED}
      sections={sections}
      crossLink={{ text: 'Privacy Policy', href: routes.privacyPolicy }}
    />
  );
}
