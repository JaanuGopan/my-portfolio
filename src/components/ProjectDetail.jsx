import { useParams, useNavigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import ImageSlider from './ImageSlider'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const project = PROJECTS.find(p => p.id === parseInt(id, 10))

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>Project not found</h2>
        <button className={styles.btn} onClick={() => navigate('/projects')}>
          Back to Projects
        </button>
      </div>
    )
  }

  const hasGithub = Array.isArray(project.githubUrl) 
    ? project.githubUrl.length > 0 && project.githubUrl[0] !== '#' 
    : (project.githubUrl && project.githubUrl !== '#');
  const hasLive = !!project.liveUrl;
  const hasCustomLinks = Array.isArray(project.customLinks) && project.customLinks.length > 0;
  const hasAnyLink = hasGithub || hasLive || hasCustomLinks;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <button className={styles.backBtn} onClick={() => navigate('/projects')}>
          ← Back to Projects
        </button>
        
        <div className={styles.content}>
          {/* Image */}
          <div className={styles.imgArea}>
            <ImageSlider images={project.images} name={project.name} />
          </div>

          {/* Body */}
          <div className={styles.body}>
            <div className={styles.meta}>
              <span className={styles.num}>{project.num}</span>
              <span className={styles.date}>{project.date}</span>
            </div>

            <h2 className={styles.title}>{project.name}</h2>
            <button 
              className={`${styles.btn} ${styles.filled}`} 
              onClick={() => window.dispatchEvent(new CustomEvent('openChat', { detail: { project } }))}
              style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }} 
            >
              Ask about the project 💬
            </button>
            <div className={styles.divider} />

            <p className={styles.sectionLabel}>Overview</p>
            <p className={styles.desc}>{project.fullDesc}</p>

            <p className={styles.sectionLabel}>Key Highlights</p>
            <ul className={styles.highlights}>
              {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>

            <p className={styles.sectionLabel}>Technologies</p>
            <div className={styles.tagsRow}>
              {project.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>

            <div className={styles.actions}>
              {hasGithub && (
                Array.isArray(project.githubUrl) 
                  ? project.githubUrl.map((link, idx) => (
                      <a key={idx} href={link.url || link} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.filled}`}>
                        {link.label || `GitHub ${project.githubUrl.length > 1 ? idx + 1 : ''}`.trim()} ↗
                      </a>
                    ))
                  : (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.filled}`}>
                        GitHub ↗
                      </a>
                    )
              )}

              {hasLive && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                  Live Demo ↗
                </a>
              )}

              {hasCustomLinks && (
                project.customLinks.map((link, idx) => (
                  <a key={`custom-${idx}`} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                    {link.label} ↗
                  </a>
                ))
              )}
              
              {!hasAnyLink && (
                <span className={styles.comingSoon}>Links coming soon</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
