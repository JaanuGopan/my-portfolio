import styles from './Experience.module.css'
import ImageSlider from './ImageSlider'

export default function Experience() {
  const internImages = [
    '/images/experiance/intern/0.png',
    '/images/experiance/intern/1.png',
    '/images/experiance/intern/2.png',
    '/images/experiance/intern/3.png',
    '/images/experiance/intern/4.png',
    '/images/experiance/intern/5.png',
    '/images/experiance/intern/6.png',
    '/images/experiance/intern/7.png',
    '/images/experiance/intern/8.png',
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>[ 02 ] — Experience</p>
        <div className={styles.expBlock}>
          <div className={styles.expItem}>
            <div className={styles.expHeader}>
              <div>
                <div className={styles.expRole}>Software Engineering Intern</div>
                <div className={styles.expCompany}>
                  <a href="https://syntaxgenie.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Syntax Genie Pvt Ltd</a>
                  {' — '}
                  <a href="https://learnova.skillsurf.lk/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Learnova LMS</a>
                </div>
              </div>
              <div className={styles.expPeriod}>Jul 2024 – Jan 2025</div>
            </div>

            <div style={{ marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden' }}>
              <img 
                src="/images/experiance/intern/9.jpeg" 
                alt="Syntax Genie Intern Group" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            <div className={styles.expOverview}>
              <p>Worked as a software engineering intern on a large-scale, production learning management system (Learnova) using agile development practices.</p>
              <p>Contributed to full-stack development, including feature implementation, production bug fixes, and secure API integration.</p>
              <p>Collaborated closely with senior engineers, UI/UX designers, QA teams, and ML engineers through daily stand-ups, dev-syncs, and code reviews.</p>
              <p>Gained hands-on experience with CI/CD-based deployments, version control workflows, and real-world software engineering practices.</p>
            </div>
            
            <div className={styles.expImageWrap}>
              <ImageSlider images={internImages} name="Syntax Genie Intern Experience" />
            </div>
            <ul className={styles.expBullets}>
              <li><strong>Assessment &amp; Question Management:</strong> Built end-to-end Quiz and Essay modules, refactored True/False architecture, fixed MCQ validation, and built reusable text/file submission components.</li>
              <li><strong>Assignment Management System:</strong> Developed comprehensive assignment creation with complex form handling (availability, submission types, grading, drag-and-drop media) and robust Axios + Spring Boot integration.</li>
              <li><strong>AI-Powered Features:</strong> Integrated FastAPI ML backend for an AI Grading Modal and built a "Study Buddy" GPT chatbot featuring Redux global state, auth-based visibility, and course auto-selection.</li>
              <li><strong>Grade Settings System:</strong> Built Completion Criteria, Assessment Weight, and Grade Scheme components featuring strict full-stack validations (0–100 limits, total weight equal strictly to 100%).</li>
              <li><strong>Frontend Optimization &amp; UI/UX:</strong> Standardized form layouts using Bootstrap, fixed responsiveness, built a dynamic module routing system, and crushed unnecessary React re-renders utilizing Redux state management.</li>
              <li><strong>Backend APIs &amp; DevOps:</strong> Engineered RESTful APIs using Spring Boot (Service layers, DTOs), managed API connections via Postman, and consistently utilized GitHub PRs, Code Reviews, and Jira Agile environments.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
