'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { contact } from '@/lib/routes';
import styles from './Join.module.css';

type Field = 'name' | 'email' | 'phone' | 'message';
type Values = Record<Field, string>;

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const REQUIRED: Field[] = ['name', 'email', 'phone'];

/** The prototype's rules: three required fields and a well-formed email. */
function validate(values: Values) {
  const errors: Partial<Record<Field, string>> = {};
  for (const field of REQUIRED) {
    if (!values[field].trim()) errors[field] = 'This field is required.';
  }
  if (!errors.email && !EMAIL.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  return errors;
}

/**
 * The site has no mail backend, so a valid message is handed to the visitor's
 * own email app, pre-addressed to the company inbox. Nothing is stored or sent
 * anywhere else, and the confirmation says exactly that rather than claiming
 * delivery the page cannot guarantee.
 */
function mailtoFor(values: Values) {
  const subject = `Website enquiry from ${values.name.trim()}`;
  const body = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    '',
    values.message.trim() || '(No message)',
  ].join('\n');
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const initial: Values = { name: '', email: '', phone: '', message: '' };

export default function MessageForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [handedOff, setHandedOff] = useState(false);

  const update = (field: Field) => (value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    // Clear a field's complaint as soon as the visitor starts fixing it.
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setHandedOff(false);
      return;
    }
    // Fields are kept, so nothing is lost if no email app opens.
    window.location.href = mailtoFor(values);
    setHandedOff(true);
  };

  const input = (field: Field, label: string, type: string, placeholder: string) => (
    <label className={styles.field}>
      <span className={styles.fieldLabel}>
        {label} {REQUIRED.includes(field) && <span className={styles.req}>*</span>}
      </span>
      <input
        name={field}
        type={type}
        value={values[field]}
        onChange={(e) => update(field)(e.target.value)}
        placeholder={placeholder}
        autoComplete={field === 'phone' ? 'tel' : field}
        aria-invalid={errors[field] ? true : undefined}
        aria-describedby={errors[field] ? `${field}-error` : undefined}
        className={styles.input}
      />
      {errors[field] && (
        <span id={`${field}-error`} className={styles.error}>
          {errors[field]}
        </span>
      )}
    </label>
  );

  return (
    <section id="message" className={styles.tint} aria-labelledby="message-heading">
      <div className={styles.wrap}>
        <div className={styles.messageGrid}>
          <div className={styles.intro} data-reveal="">
            <p className={styles.eyebrow}>Send us a message</p>
            <h2 id="message-heading" className={styles.h2}>
              Tell us what you package
            </h2>
            <p className={styles.sectionLede}>
              Feel free to get in touch through the form. Your message is sent directly to our
              staff, who will answer as soon as they can.
            </p>
            <dl className={styles.facts}>
              <div className={styles.fact}>
                <dt className={styles.factLabel}>Response time</dt>
                <dd className={styles.factValue}>One working day</dd>
              </div>
              <div className={styles.fact}>
                <dt className={styles.factLabel}>Good to include</dt>
                <dd className={styles.factValue}>Product, current packaging, monthly volume</dd>
              </div>
              <div className={styles.fact}>
                <dt className={styles.factLabel}>Prefer to talk?</dt>
                <dd className={styles.factValue}>
                  <a href={contact.phoneHref} className={styles.factLink}>
                    Call the hotline
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className={styles.formCard} data-reveal="" data-reveal-delay="100">
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.row2}>
                {input('name', 'Name', 'text', 'Your full name')}
                {input('phone', 'Phone', 'tel', '(+94) 7X XXX XXXX')}
              </div>
              {input('email', 'Email', 'email', 'you@company.com')}
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => update('message')(e.target.value)}
                  placeholder="What do you package, and what are you packaging it in today?"
                  className={styles.textarea}
                />
              </label>
              <div className={styles.formActions}>
                <button type="submit" className={styles.submit}>
                  Submit <span aria-hidden="true">→</span>
                </button>
                <span className={styles.hint}>
                  Required fields are marked <span className={styles.req}>*</span>
                </span>
              </div>
              {handedOff && (
                <div className={styles.notice} role="status">
                  <span className={styles.noticeIcon} aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    Your email app should now open with this message addressed to {contact.email} —
                    press Send to deliver it. If nothing opened, email us directly at{' '}
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
