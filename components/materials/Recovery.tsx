import styles from './Recovery.module.css';

const steps = [
  ['01', 'Specify', 'Pick the lightest grade that meets the barrier and print requirement.'],
  ['02', 'Produce', 'Film is extruded with recycled content where the application allows.'],
  ['03', 'Collect', 'Used film is collected through our own supply chain, not landfill.'],
  ['04', 'Reprocess', 'Material is washed, reprocessed and returned as new film.'],
];

export default function Recovery() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <h2 className={styles.title}>How a pack gets recovered</h2>
          <p className={styles.headCopy}>
            All three grades follow the same route back into production — that is what
            keeps the loop closed.
          </p>
        </div>
        <div className={styles.steps}>
          {steps.map(([num, name, desc], i) => (
            <div
              key={num}
              className={styles.step}
              data-reveal=""
              data-reveal-delay={i * 70}
            >
              <span className={styles.num}>{num}</span>
              <span className={styles.name}>{name}</span>
              <span className={styles.desc}>{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
