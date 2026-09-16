import type { Section } from '@/lib/legal';

/**
 * Terms & Conditions content, transcribed from the supplied document.
 * Dates set on publication, as requested.
 */
export const EFFECTIVE_DATE = '17 September 2026';
export const LAST_UPDATED = '17 September 2026';

export const sections: Section[] = [
  {
    id: 'introduction',
    n: '1',
    title: 'Introduction',
    blocks: [
      { p: 'Welcome to UPR — Using Plastic Responsibly.' },
      {
        p: 'These Terms & Conditions (“Terms”) govern your access to and use of the UPR website, including its pages, content, resources, product and technology information, contact facilities and other services made available through the website (collectively, the “Website”).',
      },
      {
        p: 'UPR is a platform focused on the responsible use, development and application of plastic materials and solutions. UPR is connected with Polydime Plastics (Pvt) Ltd and reflects a broader approach to responsible plastics, innovation, manufacturing and sustainability.',
      },
      {
        p: 'For the purposes of these Terms, “UPR,” “we,” “us” or “our” refers to the entity responsible for the relevant Website activity, as applicable. Where particular products, services, commercial transactions or communications are provided by an associated company, including Polydime Plastics (Pvt) Ltd, the relevant contracting entity may be identified separately.',
      },
      {
        p: 'By accessing or using this Website, you acknowledge that you have read, understood and agreed to these Terms. If you do not agree with these Terms, please do not use the Website.',
      },
    ],
  },
  {
    id: 'use-of-website',
    n: '2',
    title: 'Use of the Website',
    blocks: [
      { p: 'You may use this Website for lawful purposes, including:' },
      {
        ul: [
          'learning about UPR and its approach to responsible plastics;',
          'understanding our technologies, products, materials and solutions;',
          'exploring applications across different industries;',
          'making legitimate business or product enquiries;',
          'accessing publicly available information and resources; and',
          'communicating with us regarding potential business relationships or opportunities.',
        ],
      },
      { p: 'You agree not to use the Website:' },
      {
        ul: [
          'for any unlawful, fraudulent or malicious purpose;',
          'to violate any applicable law or regulation;',
          'to interfere with the operation or security of the Website;',
          'to attempt to gain unauthorised access to systems, accounts or information;',
          'to introduce viruses, malware or other harmful code;',
          'to scrape, harvest or systematically extract information without our permission;',
          'to impersonate UPR, Polydime Plastics (Pvt) Ltd or another person or organisation;',
          'to submit false, misleading or fraudulent information; or',
          'in any manner that could damage the reputation, rights or legitimate interests of UPR or its associated entities.',
        ],
      },
      {
        p: 'We reserve the right to restrict or terminate access to the Website where we reasonably believe that these Terms have been breached.',
      },
    ],
  },
  {
    id: 'website-content',
    n: '3',
    title: 'Website content',
    blocks: [
      {
        p: 'The Website contains information relating to UPR, responsible plastics, plastic materials, packaging solutions, technologies, applications, manufacturing, sustainability initiatives and related subjects.',
      },
      {
        p: 'We aim to ensure that information published on the Website is accurate, relevant and up to date. However, information may occasionally contain errors, omissions or information that has become outdated.',
      },
      {
        p: 'Website content is provided for general informational purposes and should not automatically be treated as a substitute for product documentation, technical specifications, professional advice, contractual documentation or other information supplied directly by the relevant entity.',
      },
      { p: 'We may update, change, remove or replace Website content at any time without prior notice.' },
    ],
  },
  {
    id: 'technical-information',
    n: '4',
    title: 'Products, technologies and technical information',
    blocks: [
      {
        p: 'Information about products, materials, technologies and solutions displayed on the Website may include descriptions, applications, technical characteristics, performance information, environmental attributes, illustrations, photographs, diagrams or other supporting material.',
      },
      { p: 'Such information is provided for general guidance.' },
      {
        p: 'Actual product specifications, performance, availability, composition, suitability and application may vary depending on factors including:',
      },
      {
        ul: [
          'product configuration;',
          'manufacturing specifications;',
          'application;',
          'operating conditions;',
          'customer requirements;',
          'production changes; and',
          'applicable technical or regulatory requirements.',
        ],
      },
      {
        p: 'Where a specific technical or commercial decision is being considered, you should obtain the relevant technical documentation and confirmation directly from the appropriate UPR or associated company representative.',
      },
      {
        p: 'Nothing on the Website overrides a signed quotation, specification, purchase agreement, supply agreement, technical document or other written contractual agreement.',
      },
    ],
  },
  {
    id: 'sustainability-information',
    n: '5',
    title: 'Sustainability and environmental information',
    blocks: [
      { p: 'Using Plastic Responsibly is central to the UPR approach.' },
      {
        p: 'The Website may refer to concepts and technologies relating to recyclability, recycled content, biodegradability, compostability, resource efficiency, energy use, material innovation, product protection and other environmental considerations.',
      },
      {
        p: 'These statements are intended to communicate the purpose, characteristics or intended benefits of particular solutions and should not be interpreted as a universal environmental claim applicable to every product, application or circumstance.',
      },
      { p: 'Environmental performance may depend on factors including:' },
      {
        ul: [
          'the material and product configuration;',
          'manufacturing processes;',
          'intended application;',
          'collection and recycling infrastructure;',
          'disposal conditions;',
          'local facilities;',
          'operating conditions; and',
          'applicable standards, certifications or regulations.',
        ],
      },
      {
        p: 'Where specific environmental claims are made, the applicable product documentation, certification or technical information should be consulted.',
      },
      {
        p: 'We do not guarantee that a particular solution will produce a particular environmental outcome in every location or application.',
      },
    ],
  },
  {
    id: 'no-professional-advice',
    n: '6',
    title: 'No professional or technical advice',
    blocks: [
      {
        p: 'Information provided through the Website does not constitute engineering, legal, regulatory, environmental, financial or other professional advice.',
      },
      {
        p: 'Before using a product, material or technology for a particular application, you are responsible for determining whether it is suitable for your intended purpose and whether all applicable legal, regulatory, technical, safety and industry requirements have been satisfied.',
      },
      { p: 'Where necessary, you should obtain appropriate professional or technical advice.' },
    ],
  },
  {
    id: 'commercial-transactions',
    n: '7',
    title: 'Quotations, orders and commercial transactions',
    blocks: [
      {
        p: 'Unless expressly stated otherwise, information displayed on the Website does not constitute an offer to sell or a binding commercial proposal.',
      },
      {
        p: 'Product availability, pricing, specifications, quantities, delivery arrangements, payment terms and other commercial conditions may be subject to separate quotations, contracts or agreements.',
      },
      {
        p: 'A business enquiry submitted through the Website does not itself create a purchase contract, supply agreement, agency relationship, partnership or other binding commercial relationship.',
      },
      {
        p: 'Any purchase or supply relationship will be governed by the applicable quotation, purchase order, agreement, terms of sale or other contractual documentation issued or accepted by the relevant contracting entity.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    n: '8',
    title: 'Intellectual property',
    blocks: [
      {
        p: 'Unless otherwise stated, all content appearing on the Website is owned by, licensed to or otherwise made available to UPR or its relevant associated entities.',
      },
      { p: 'This may include:' },
      {
        ul: [
          'text;',
          'logos;',
          'trademarks;',
          'brand elements;',
          'photographs;',
          'graphics;',
          'illustrations;',
          'videos;',
          'technical materials;',
          'diagrams;',
          'page layouts;',
          'designs;',
          'downloadable resources; and',
          'other original content.',
        ],
      },
      { p: 'These materials are protected by applicable intellectual property laws.' },
      {
        p: 'You may view and use Website content for your own personal or legitimate internal business purposes.',
      },
      { p: 'You must not, without prior written permission:' },
      {
        ul: [
          'reproduce substantial portions of the Website;',
          'republish Website content;',
          'commercially exploit Website content;',
          'modify or create derivative works from protected content;',
          'distribute Website materials as your own;',
          'remove copyright, trademark or other proprietary notices; or',
          'use our content in a manner that suggests endorsement or affiliation where none exists.',
        ],
      },
    ],
  },
  {
    id: 'trademarks',
    n: '9',
    title: 'Trademarks and branding',
    blocks: [
      {
        p: 'UPR — Using Plastic Responsibly, together with associated names, logos, product names, technology names and other branding elements, may constitute trademarks or other protected intellectual property of UPR or its associated entities.',
      },
      {
        p: 'The display of any trademark on the Website does not grant you a licence or other right to use that trademark.',
      },
      {
        p: 'You must obtain appropriate written permission before using UPR branding, logos or other protected brand assets for commercial, promotional or public purposes.',
      },
    ],
  },
  {
    id: 'user-submissions',
    n: '10',
    title: 'User submissions and communications',
    blocks: [
      {
        p: 'If you submit information through the Website, including enquiries, feedback, comments, business information, requests or other material, you confirm that:',
      },
      {
        ul: [
          'the information is accurate to the best of your knowledge;',
          'you have the right to provide the information;',
          'the submission does not violate applicable law;',
          'the submission does not infringe the rights of another person or organisation; and',
          'the submission does not contain malicious code or other harmful material.',
        ],
      },
      {
        p: 'You should not submit confidential technical, commercial or proprietary information through a general contact form unless specifically requested through an appropriate secure channel.',
      },
      {
        p: 'Submitting information through the Website does not automatically create a confidential, fiduciary, agency or contractual relationship.',
      },
    ],
  },
  {
    id: 'third-party-websites',
    n: '11',
    title: 'Third-party websites and services',
    blocks: [
      { p: 'The Website may contain links to third-party websites, platforms, services or resources.' },
      { p: 'These links may be provided for convenience or additional information.' },
      {
        p: 'UPR does not necessarily control, endorse or assume responsibility for third-party websites, their content, availability, privacy practices, security or terms of use.',
      },
      {
        p: 'Your use of third-party websites is governed by the terms and policies applicable to those websites.',
      },
    ],
  },
  {
    id: 'availability',
    n: '12',
    title: 'Website availability',
    blocks: [
      {
        p: 'We aim to maintain a reliable and accessible Website. However, we do not guarantee that the Website will:',
      },
      {
        ul: [
          'always be available;',
          'operate without interruption;',
          'be free from errors;',
          'be free from security vulnerabilities;',
          'be compatible with every device or browser; or',
          'remain unchanged or available indefinitely.',
        ],
      },
      {
        p: 'The Website may occasionally be unavailable due to maintenance, upgrades, technical issues, security measures, network problems or circumstances beyond our reasonable control.',
      },
    ],
  },
  {
    id: 'cybersecurity',
    n: '13',
    title: 'Cybersecurity and prohibited activities',
    blocks: [
      {
        p: 'You must not attempt to compromise or interfere with the Website or its underlying infrastructure.',
      },
      { p: 'Prohibited activities include, without limitation:' },
      {
        ul: [
          'unauthorised access attempts;',
          'penetration testing without written permission;',
          'denial-of-service attacks;',
          'distributing malicious software;',
          'attempting to bypass security controls;',
          'unauthorised data extraction;',
          'automated activity that places unreasonable load on the Website; and',
          'attempting to access restricted systems or information.',
        ],
      },
      {
        p: 'We reserve the right to investigate suspected misuse and take appropriate action, including restricting access and reporting unlawful activity to relevant authorities where appropriate.',
      },
    ],
  },
  {
    id: 'disclaimer',
    n: '14',
    title: 'Disclaimer of warranties',
    blocks: [
      {
        p: 'To the maximum extent permitted by applicable law, the Website and its content are provided on an “as available” basis.',
      },
      { p: 'We do not make warranties or representations that:' },
      {
        ul: [
          'all Website information is complete or error-free;',
          'information will always be current;',
          'the Website will operate continuously;',
          'the Website will be free from viruses or other harmful components;',
          'information will be suitable for every intended application; or',
          'any particular commercial, technical, environmental or business outcome will result from reliance on Website content.',
        ],
      },
      {
        p: 'Nothing in these Terms excludes or limits any warranty, right or protection that cannot lawfully be excluded or limited under applicable law.',
      },
    ],
  },
  {
    id: 'limitation-of-liability',
    n: '15',
    title: 'Limitation of liability',
    blocks: [
      {
        p: 'To the maximum extent permitted by applicable law, UPR and its associated entities, directors, officers, employees, representatives and service providers will not be liable for losses arising from your use of, or reliance upon, the Website or its content, including indirect, incidental, consequential or business-related losses.',
      },
      { p: 'This may include, where legally permissible:' },
      {
        ul: [
          'loss of profits;',
          'loss of revenue;',
          'loss of business opportunities;',
          'loss of data;',
          'business interruption; or',
          'loss arising from reliance on information published on the Website.',
        ],
      },
      {
        p: 'Nothing in these Terms excludes liability where such exclusion is prohibited by applicable law.',
      },
    ],
  },
  {
    id: 'indemnity',
    n: '16',
    title: 'Indemnity',
    blocks: [
      {
        p: 'To the extent permitted by applicable law, you agree to indemnify and hold harmless UPR and its associated entities, officers, employees, representatives and service providers from claims, losses, liabilities, damages, costs and expenses arising from:',
      },
      {
        ul: [
          'your unlawful or improper use of the Website;',
          'your breach of these Terms;',
          'your violation of another person’s rights;',
          'information or material you submit through the Website; or',
          'your violation of applicable laws or regulations.',
        ],
      },
    ],
  },
  {
    id: 'confidential-information',
    n: '17',
    title: 'Confidential information',
    blocks: [
      {
        p: 'The Website may contain information intended for public access. It should not be assumed that information published on the Website is confidential.',
      },
      {
        p: 'If you receive confidential information separately from UPR or an associated entity under a confidentiality agreement, the terms of that agreement will govern the treatment of that information.',
      },
      {
        p: 'You should avoid submitting confidential business, technical, financial or proprietary information through general Website forms unless specifically requested.',
      },
    ],
  },
  {
    id: 'privacy',
    n: '18',
    title: 'Privacy',
    blocks: [
      {
        p: 'Your use of the Website may involve the collection and processing of personal information.',
      },
      {
        p: 'Our handling of personal data is described in our Privacy Policy, which forms part of the Website’s broader legal framework.',
      },
      {
        p: 'By using the Website, you acknowledge that personal data may be processed in accordance with the applicable Privacy Policy and applicable data protection laws.',
      },
    ],
  },
  {
    id: 'changes-to-terms',
    n: '19',
    title: 'Changes to these Terms',
    blocks: [
      { p: 'We may update these Terms from time to time to reflect changes in:' },
      {
        ul: [
          'the Website;',
          'our business activities;',
          'applicable laws and regulations;',
          'technology;',
          'security requirements; or',
          'our policies and practices.',
        ],
      },
      {
        p: 'When changes are made, the revised version will be published on this page with an updated “Last Updated” date.',
      },
      {
        p: 'Your continued use of the Website after the revised Terms are published constitutes acceptance of the updated Terms, to the extent permitted by applicable law.',
      },
    ],
  },
  {
    id: 'changes-to-website',
    n: '20',
    title: 'Changes to the Website',
    blocks: [
      {
        p: 'We reserve the right to modify, suspend or discontinue any part of the Website, including pages, features, resources, content or functionality, at any time.',
      },
      {
        p: 'We are not responsible for any loss or inconvenience resulting from such changes, to the extent permitted by applicable law.',
      },
    ],
  },
  {
    id: 'force-majeure',
    n: '21',
    title: 'Force majeure',
    blocks: [
      {
        p: 'We will not be responsible for failure or delay in performing any obligation arising from circumstances beyond our reasonable control, including natural disasters, severe weather, fire, flood, epidemic or pandemic events, war, civil unrest, government action, labour disputes, telecommunications failures, cyber incidents, infrastructure failures or other events beyond reasonable control.',
      },
    ],
  },
  {
    id: 'no-waiver',
    n: '22',
    title: 'No waiver',
    blocks: [
      {
        p: 'If we do not immediately enforce any provision of these Terms, that does not mean that we have waived our right to enforce that provision later.',
      },
      { p: 'Any waiver must be expressly given by the appropriate authorised representative.' },
    ],
  },
  {
    id: 'severability',
    n: '23',
    title: 'Severability',
    blocks: [
      {
        p: 'If any provision of these Terms is found to be unlawful, invalid or unenforceable, that provision will be interpreted or modified to the extent necessary to make it enforceable where legally possible.',
      },
      { p: 'The remaining provisions will continue in full force and effect.' },
    ],
  },
  {
    id: 'governing-law',
    n: '24',
    title: 'Governing law and jurisdiction',
    blocks: [
      {
        p: 'These Terms shall be governed by and interpreted in accordance with the laws of Sri Lanka, unless applicable law requires otherwise.',
      },
      {
        p: 'Subject to any mandatory legal requirements, disputes relating to the Website or these Terms shall be subject to the jurisdiction of the competent courts of Sri Lanka.',
      },
    ],
  },
  {
    id: 'entire-agreement',
    n: '25',
    title: 'Entire agreement',
    blocks: [
      {
        p: 'These Terms, together with the Privacy Policy and any other policies or legal notices expressly incorporated into the Website, constitute the terms governing your use of the Website.',
      },
      {
        p: 'Where a separate written contract applies to a particular product, service or commercial relationship, that contract will govern the relevant transaction to the extent of any inconsistency.',
      },
    ],
  },
  {
    id: 'contact',
    n: '26',
    title: 'Contact us',
    blocks: [
      {
        p: 'If you have questions regarding these Terms, the Website, our products or our approach to Using Plastic Responsibly, please contact us:',
      },
      {
        dl: [
          ['Entity', 'UPR — Using Plastic Responsibly, connected with Polydime Plastics (Pvt) Ltd'],
          ['Address', 'No 122, Stratford Avenue, Colombo 5, Sri Lanka'],
          // The source leaves this as [INSERT EMAIL ADDRESS]; filled with the
          // site's published contact address, as used in the Privacy Policy.
          ['Email', 'info@polydime.com'],
          ['Telephone', '+94 777 306 412'],
          ['Website', 'www.upr.lk'],
        ],
      },
    ],
  },
  {
    id: 'our-approach',
    n: '',
    title: 'Our approach',
    blocks: [
      { p: 'At UPR, Using Plastic Responsibly is more than a statement.' },
      {
        p: 'It reflects our belief that the future of plastics requires better thinking about how materials are designed, manufactured, used, recovered and managed.',
      },
      {
        p: 'These Terms help establish the framework for using this Website. For information about how we handle personal data, please refer to our Privacy Policy.',
      },
      { p: 'UPR — Using Plastic Responsibly.' },
    ],
  },
];
