import type { Metadata } from 'next';
import LegalDocument from '@/components/site/LegalDocument';
import { EFFECTIVE_DATE, LAST_UPDATED, sections } from '@/lib/privacy';
import { routes } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Privacy Policy — Use Plastic Responsibly',
  description:
    'How UPR collects, uses, stores, protects and manages personal data, under Sri Lanka’s Personal Data Protection Act No. 9 of 2022.',
};

export default function Page() {
  return (
    <LegalDocument
      crumb="Privacy Policy"
      title="Privacy"
      accent="Policy"
      lede="How UPR collects, uses, stores, protects and manages personal data when you visit our website, contact us or make an enquiry."
      effectiveDate={EFFECTIVE_DATE}
      lastUpdated={LAST_UPDATED}
      sections={sections}
      crossLink={{ text: 'Terms & Conditions', href: routes.termsAndConditions }}
    />
  );
}
