import Eyebrow from '@/components/site/Eyebrow';
import styles from './WhyPartner.module.css';

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
    copy: 'Every kilogram you divert is recorded in the milestones below and published on this platform — measured, not estimated.',
  },
];

export default function WhyPartner() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <Eyebrow num="03" label="Why join" />
          <h2 className={styles.title}>
            Recognised as a{' '}
            <span className={styles.mark}>responsible organisation.</span>
          </h2>
        </div>
        <div className={styles.grid}>
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={i === reasons.length - 1 ? styles.dark : styles.card}
              data-reveal=""
              data-reveal-delay={i * 80}
            >
              <div className={styles.num}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.rule} />
              <div className={styles.name}>{reason.title}</div>
              <p className={styles.copy}>{reason.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
