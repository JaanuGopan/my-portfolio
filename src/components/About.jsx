import styles from './About.module.css'

const SKILLS = [
  { name: 'Frontend (React.js / Flutter)',       pct: 88 },
  { name: 'Backend (Spring Boot / FastAPI)',      pct: 90 },
  { name: 'Databases (PostgreSQL / MongoDB)',     pct: 82 },
  { name: 'AI / ML (PyTorch / LLMs)',             pct: 75 },
  { name: 'DevOps (Docker / GitHub Actions)',     pct: 78 },
  { name: 'Languages (Java · Python · TS · C++)', pct: 85 },
]

const STATS = [
  { n: '4',    l: 'Years at Uni' },
  { n: '5+',   l: 'Projects Built' },
  { n: '3.45', l: 'GPA Score' },
  { n: '6mo',  l: 'Industry Intern' },
]

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>[ 02 ] — About Me</p>

        <div className={styles.grid}>
          {/* Left */}
          <div>
            <h2 className={styles.heading}>
              End-to-end.<br />From idea to production.
            </h2>
            <p className={styles.text}>
              I'm Janugopan Sundaramoorthy, a Computer Engineering graduate from the
              University of Ruhuna, Sri Lanka. I build full-stack systems with a focus
              on scalability, security, and clean architecture.
            </p>
            <p className={styles.text}>
              My experience spans backend microservices, AI-powered tooling, real-time
              applications, and DevOps pipelines — giving me a broad view of the
              software lifecycle.
            </p>
            <p className={styles.text}>
              I care about code that is readable and systems that are reliable — and
              I'm always looking to learn what's next.
            </p>

            {/* Education */}
            <div className={styles.eduBlock}>
              <div className={styles.eduItem}>
                <div className={styles.eduLabel}>Education</div>
                <div className={styles.eduName}>University of Ruhuna — Faculty of Engineering</div>
                <div className={styles.eduDegree}>BSc (Hons) in Computer Engineering &nbsp;·&nbsp; 2021 – 2025</div>
                <div className={styles.eduGpa}>GPA: 3.45 / 4.00</div>
              </div>
            </div>

            {/* Skills */}
            <div className={styles.skillsBlock}>
              <p className={styles.skillsLabel}>Technical Skills</p>
              {SKILLS.map(s => (
                <div key={s.name} className={styles.skillItem}>
                  <span className={styles.skillName}>{s.name}</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillFill} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <div className={styles.statGrid}>
              {STATS.map(s => (
                <div key={s.l} className={styles.stat}>
                  <div className={styles.statN}>{s.n}</div>
                  <div className={styles.statL}>{s.l}</div>
                </div>
              ))}
            </div>
            <div className={styles.availBar}>
              <div className={styles.availDot} />
              <span>Open to full-time &amp; freelance roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
