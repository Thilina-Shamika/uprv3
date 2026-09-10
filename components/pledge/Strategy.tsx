import styles from './Strategy.module.css';

export default function Strategy() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head} data-reveal="">
          <div className={styles.headMain}>
            <div className={styles.kicker}>
              <span className={styles.tick} aria-hidden="true" />
              <span className={styles.kickerText}>Eco-friendly strategy</span>
            </div>
            <h2 className={styles.title}>A strategy built on four pillars</h2>
          </div>
          <p className={styles.headCopy}>
            Our environmental strategy with plastics is fourfold. A focus on these areas
            will let us reduce — and one day eliminate — the plastic film pollution
            problem in Sri Lanka.
          </p>
        </div>

        <div className={styles.wrap}>
          <div className={styles.figure} data-reveal="">
            <div className={styles.big}>50</div>
            <div className={styles.pct}>%</div>
          </div>
          <div className={styles.body} data-reveal="" data-reveal-delay="90">
            <div className={styles.claim}>
              of group output targeted from recycled and bio-based plastics
            </div>
            <p className={styles.copy}>
              We support global concerns on plastic and work unwaveringly towards
              sustainability through eco-friendly production practices. As the undisputed
              leader in the processing of recycled plastics, we hold that share of output
              in line with the circular economy of plastic.
            </p>
            <div className={styles.tags}>
              {['Recycled waste material', 'Bio-based plastics', 'Own supply chain'].map(
                (tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
