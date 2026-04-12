import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const [isSending, setIsSending] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSending(true)
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          subject: form.subject,
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setSent(true)
      setTimeout(() => setSent(false), 4000)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      alert('Failed to send message. Please ensure your EmailJS credentials in .env are correct.')
    } finally {
      setIsSending(false)
    }
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
          <a href="https://github.com/JaanuGopan" target="_blank" rel="noopener noreferrer" className={styles.btn}>GitHub ↗</a>
          <a href="https://www.linkedin.com/in/janugopan-sundaramoorthy/" target="_blank" rel="noopener noreferrer" className={styles.btn}>LinkedIn ↗</a>
          <a href="mailto:sjanugopan@gmail.com" className={styles.btn}>Email ↗</a>
          <a href="/PDF/CV/Janugopan_S_CV.pdf" download className={styles.btn}>Download CV ↗</a>
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
              <button type="submit" className={`${styles.btn} ${styles.filled}`} disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message →'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
