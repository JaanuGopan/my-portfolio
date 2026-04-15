import { useNavigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const navigate = useNavigate()

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {PROJECTS.sort((a,b) => a.id - b.id).map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => navigate(`/projects/${p.route}`)} />
          ))}
        </div>
        
      </div>
    </section>
  )
}
