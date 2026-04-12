import { useEffect } from 'react'
import { useLocation, Routes, Route, Navigate } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Navbar   from './components/Navbar'
import Home     from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import About    from './components/About'
import Contact  from './components/Contact'
import Chatbot  from './components/Chatbot'
import styles   from './App.module.css'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={styles.app}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Chatbot />
    </div>
  )
}
