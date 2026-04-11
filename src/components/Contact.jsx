import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Wire up to your backend / EmailJS / Formspree here
    console.log('Form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>[ 03 ] — Get In Touch</p>
        <h2 className={styles.heading}>Let's build<br />something great.</h2>
        <p className={styles.sub}>
          Open to full-time roles, freelance projects, or just a good conversation about tech.
        </p>

        {/* Contact info row */}
        <div className={styles.infoGrid}>
          <div className={styles.ci}>
            <div className={styles.ciLabel}>Email</div>
            <div className={styles.ciValue}>
              <a href="mailto:sjanugopan@gmail.com">sjanugopan@gmail.com</a>
            </div>
          </div>
          <div className={styles.ci}>
            <div className={styles.ciLabel}>Phone</div>
            <div className={styles.ciValue}>
              <a href="tel:+94754164532">+94 75 416 4532</a>
            </div>
          </div>
          <div className={styles.ci}>
            <div className={styles.ciLabel}>Location</div>
            <div className={styles.ciValueRow}>
              <span className={styles.dot} />
              Batticaloa, Sri Lanka
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className={styles.socials}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.btn}>GitHub ↗</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.btn}>LinkedIn ↗</a>
          <a href="mailto:sjanugopan@gmail.com" className={styles.btn}>Email ↗</a>
          <a href="/CV_Temp.pdf" download className={styles.btn}>Download CV ↗</a>
        </div>

        {/* Form */}
        <div className={styles.formWrap}>
          <div className={styles.formHead}>Send a message</div>
          <form className={styles.formBody} onSubmit={handleSubmit}>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="name">Your Name</label>
                <input
                  id="name" name="name" type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Your Email</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={`${styles.field} ${styles.full}`}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject" name="subject" type="text"
                  placeholder="Project inquiry, job opportunity, collaboration..."
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={`${styles.field} ${styles.full}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  placeholder="Tell me about your project or role..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formFooter}>
              {sent && <span className={styles.sentMsg}>✓ Message sent!</span>}
              <button type="submit" className={`${styles.btn} ${styles.filled}`}>
                Send Message →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
