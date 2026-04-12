import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

const STACK = ['Java', 'Spring Boot', 'React.js', 'Python', 'TypeScript', 'PostgreSQL', 'Docker', 'FastAPI', 'Flutter', 'AWS']

export default function Home() {
  const navigate = useNavigate()

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Computer Engineering Graduate — Seeking Full Stack Roles</p>
        <h1 className={styles.title}>
          Janugopan<br /><em>Sundaramoorthy.</em>
        </h1>
        <p className={styles.role}>Full Stack Developer · AI/ML · DevOps</p>
        <p className={styles.desc}>
          Computer Engineering graduate with hands-on experience building production-grade systems —
          microservices applications, AI-powered tools, and secure full-stack solutions.
          Focused on scalable, clean, and secure software.
        </p>
        <div className={styles.cta}>
          <button className={`${styles.btn} ${styles.filled}`} onClick={() => navigate('/projects')}>
            View My Work
          </button>
          <button className={styles.btn} onClick={() => navigate('/contact')}>
            Get In Touch
          </button>
          <a href="https://github.com/JaanuGopan" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/janugopan-sundaramoorthy/" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            LinkedIn ↗
          </a>
        </div>
        <div className={styles.stack}>
          <span className={styles.stackLabel}>Stack</span>
          <div className={styles.tags}>
            {STACK.map(s => <span key={s} className={styles.tag}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
