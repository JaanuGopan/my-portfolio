import ImageSlider from './ImageSlider'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      className={styles.card}
      onClick={() => onClick(project)}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick(project)}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.name}`}
    >
      {/* Image area */}
      <div className={styles.imgWrap}>
        <ImageSlider images={project.images} name={project.name} />
      </div>

      <div className={styles.num}>{project.num}</div>
      <h3 className={styles.name}>{project.name}</h3>
      <div className={styles.date}>{project.date}</div>
      <p className={styles.desc}>{project.shortDesc}</p>
      <div className={styles.tags}>
        {project.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      <span className={styles.arrow}>↗</span>
    </div>
  )
}
