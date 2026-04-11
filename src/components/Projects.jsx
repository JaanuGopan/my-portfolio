import { useNavigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const navigate = useNavigate()

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>[ 03 ] — Projects</p>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {PROJECTS.map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => navigate(`/projects/${p.id}`)} />
          ))}
        </div>
        
      </div>
    </section>
  )
}
