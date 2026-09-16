import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';
import Reveal from '@/components/site/Reveal';
import SiteHeader from '@/components/site/SiteHeader';
import HomeFooter from '@/components/home/HomeFooter';
import type { Block, Section } from '@/lib/legal';
import { contact, routes } from '@/lib/routes';
import styles from './LegalDocument.module.css';

type CrossLink = { text: string; href: string };

/** Turns contact-table values (email, website) into real links. */
function linkValue(value: string) {
  if (value === contact.email) return <a href={`mailto:${contact.email}`}>{value}</a>;
  if (value === 'www.upr.lk') return <a href="https://www.upr.lk">{value}</a>;
  return value;
}

/**
 * Links the first mention of the companion document in a paragraph, so the
 * Privacy Policy and the Terms point at each other without linking a page to
 * itself.
 */
function linkText(text: string, crossLink?: CrossLink): ReactNode {
  if (!crossLink) return text;
  const at = text.indexOf(crossLink.text);
  if (at === -1) return text;
  return (
    <>
      {text.slice(0, at)}
      <Link href={crossLink.href} className={styles.inlineLink}>
        {crossLink.text}
      </Link>
      {text.slice(at + crossLink.text.length)}
    </>
  );
}

function renderBlock(block: Block, i: number, crossLink?: CrossLink) {
  if ('h' in block) {
    return (
      <h3 key={i} className={styles.subhead}>
        {block.h}
      </h3>
    );
  }
  if ('ul' in block) {
    return (
      <ul key={i} className={styles.ul}>
        {block.ul.map((item) => (
          <li key={item} className={styles.li}>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if ('dl' in block) {
    return (
      <dl key={i} className={styles.dl}>
        {block.dl.map(([label, value]) => (
          <Fragment key={label}>
            <dt className={styles.dt}>{label}</dt>
            <dd className={styles.dd}>{linkValue(value)}</dd>
          </Fragment>
        ))}
      </dl>
    );
  }
  return (
    <p key={i} className={styles.p}>
      {linkText(block.p, crossLink)}
    </p>
  );
}

export default function LegalDocument({
  crumb,
  title,
  accent,
  lede,
  effectiveDate,
  lastUpdated,
  sections,
  crossLink,
}: {
  crumb: string;
  title: string;
  accent: string;
  lede: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: Section[];
  /** The companion document, linked where the text mentions it. */
  crossLink?: CrossLink;
}) {
  return (
    <Reveal>
      <div className={styles.page}>
        <SiteHeader />

        <header id="top" className={styles.head}>
          <div className={styles.headInner}>
            <div className={styles.crumbs}>
              <Link href={routes.home}>Home</Link>
              <span className={styles.slash}>/</span>
              <span className={styles.here}>{crumb}</span>
            </div>
            <h1 className={styles.title}>
              {title} <span className={styles.accent}>{accent}</span>
            </h1>
            <p className={styles.lede}>{lede}</p>
            <div className={styles.dates}>
              <div>
                <div className={styles.dateLabel}>Effective date</div>
                <div className={styles.dateValue}>{effectiveDate}</div>
              </div>
              <div>
                <div className={styles.dateLabel}>Last updated</div>
                <div className={styles.dateValue}>{lastUpdated}</div>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.body}>
          <div className={styles.bodyInner}>
            <div className={styles.tocTitle}>Contents</div>
            <ol className={styles.toc} data-reveal="">
              {sections.map((section) => (
                <li key={section.id} className={styles.tocItem}>
                  <span className={styles.tocNum}>{section.n}</span>
                  <a href={`#${section.id}`} className={styles.tocLink}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <div className={styles.sectionHead}>
                  {section.n && <span className={styles.sectionNum}>{section.n}</span>}
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                </div>
                {section.blocks.map((block, i) => renderBlock(block, i, crossLink))}
              </section>
            ))}
          </div>
        </div>

        <HomeFooter />
      </div>
    </Reveal>
  );
}
