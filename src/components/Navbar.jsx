import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About Me' },
    { path: '/contact', label: 'Contact' },
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  }

  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/" className={styles.logo} style={{ textDecoration: 'none' }}>
          Janugopan S.
        </Link>
        <div className={styles.sub}>Full Stack Developer</div>
      </div>

      <div className={styles.right}>
        <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
          {links.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={`${styles.link} ${isActive(l.path) ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className={styles.themeToggle} onClick={toggleTheme} title="Toggle dark mode">
          <span className={styles.icon} style={{ opacity: theme === 'dark' ? 0.35 : 1 }}>☀︎</span>
          <div className={`${styles.track} ${theme === 'dark' ? styles.trackOn : ''}`}>
            <div className={styles.thumb} />
          </div>
          <span className={styles.icon} style={{ opacity: theme === 'dark' ? 1 : 0.35 }}>☽</span>
        </div>

        <button 
          className={styles.hamburger} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
