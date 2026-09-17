import styles from './Partners.module.css';

const reasons = [
  {
    title: 'Meet real demand',
    copy: 'Customers are moving towards eco-friendly options and demanding alternatives that reduce plastic waste dumped into landfills and the ocean.',
  },
  {
    title: 'Carry the mark',
    copy: 'Use our logo and website details on your products — customised for you — marking your organisation as one that fulfils customer demand to be environmentally friendly.',
  },
  {
    title: 'Be counted here',
    copy: 'Every kilogram you divert is recorded in the milestones above and published on this platform — measured, not estimated.',
  },
];

export default function WhyPartner() {
  return (
    <section className={styles.tint} aria-labelledby="why-heading">
      <div className={styles.wrap}>
        <div className={styles.sectionHead} data-reveal="">
          <p className={styles.eyebrow}>Why join</p>
          <h2 id="why-heading" className={styles.h2}>
            Recognised as a responsible organisation
          </h2>
        </div>
        <ol className={styles.reasons}>
          {reasons.map((reason, i) => (
            <li
              key={reason.title}
              className={styles.reason}
              data-reveal=""
              data-reveal-delay={i * 80}
            >
              <span className={styles.reasonNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonCopy}>{reason.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
