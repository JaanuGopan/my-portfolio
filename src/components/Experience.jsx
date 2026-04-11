import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>[ 02 ] — Experience</p>
        <div className={styles.expBlock}>
          <div className={styles.expItem}>
            <div className={styles.expHeader}>
              <div>
                <div className={styles.expRole}>Software Engineering Intern</div>
                <div className={styles.expCompany}>Syntax Genie Pvt Ltd — Learnova LMS</div>
              </div>
              <div className={styles.expPeriod}>Jul 2024 – Jan 2025</div>
            </div>
            <ul className={styles.expBullets}>
              <li>Built backend services with Spring Boot and RESTful APIs, and frontend components using React.js for a production-scale Learning Management System.</li>
              <li>Designed secure file and video handling using Azure Blob Storage and HLS streaming.</li>
              <li>Integrated AI-assisted features using FastAPI and API-based LLM services.</li>
              <li>Participated in code reviews, GitHub workflows, and CI/CD deployments.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
