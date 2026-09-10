'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import Eyebrow from '@/components/site/Eyebrow';
import styles from './Faq.module.css';

const faqs = [
  {
    q: 'Is all your packaging recyclable?',
    a: 'Every structure we produce — PE, PE Plus and PE Plus Xtra — is designed to be recyclable, including our metalised barrier film. The goal is to keep material in the loop rather than sending it to landfill.',
  },
  {
    q: 'What separates PE, PE Plus and PE Plus Xtra?',
    a: 'PE is standard polyethylene for everyday packaging. PE Plus is a multi-polymer structure with enhanced performance for demanding uses. PE Plus Xtra adds a metalised barrier coating for premium products — all three remain recyclable.',
  },
  {
    q: 'How much recycled material do you use?',
    a: 'Approximately 40% of our product is made from recycled plastic, and 22,346,157 KG of sustainable material has gone into our production to date. We are working to further reduce the virgin polymer entering the system.',
  },
  {
    q: 'How can my brand become a partner?',
    a: 'Get in touch through our Join Us page. Partnering means moving to recycled or biodegradable options — and being recognised on this website as one of our partners in environmental sustainability.',
  },
];

export default function Faq() {
  // The prototype opens the first question on load.
  const [open, setOpen] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      panelRefs.current.forEach((panel, i) => {
        if (!panel) return;
        const target = i === open ? panel.scrollHeight : 0;
        if (reduced) {
          gsap.set(panel, { height: target });
          return;
        }
        gsap.to(panel, {
          height: target,
          duration: 0.4,
          ease: 'power3.inOut',
          overwrite: 'auto',
        });
      });
    },
    { dependencies: [open], scope: listRef },
  );

  return (
    <>
      <div className={styles.ghost} aria-hidden="true">
        <div className={styles.ghostWord}>Journal</div>
      </div>
      <section id="faq" className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.head} data-reveal="">
            <Eyebrow num="05" label="FAQ" centred />
            <div className={styles.gap} />
            <h2 className={styles.title}>
              Questions, <span className={styles.mark}>answered</span>
            </h2>
          </div>

          <div ref={listRef} className={styles.list} data-reveal="" data-reveal-delay="80">
            {faqs.map((faq, i) => (
              <div key={faq.q} className={styles.item} data-open={String(i === open)}>
                <button
                  type="button"
                  className={styles.btn}
                  aria-expanded={i === open}
                  onClick={() => setOpen((current) => (current === i ? -1 : i))}
                >
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.question}>{faq.q}</span>
                  <span className={styles.icon} aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  ref={(el) => {
                    panelRefs.current[i] = el;
                  }}
                  className={styles.panel}
                >
                  <p className={styles.answer}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
