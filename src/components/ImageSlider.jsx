import { useState } from 'react'
import styles from './ImageSlider.module.css'

export default function ImageSlider({ images = [], name = 'Project Image' }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) {
    return (
      <div className={styles.imgPlaceholder}>
        <div className={styles.phIcon}>⬜</div>
        <p>Project image coming soon</p>
      </div>
    )
  }

  if (images.length === 1) {
    return <img src={images[0]} alt={name} className={styles.img} />
  }

  return (
    <div className={styles.slider}>
      <img src={images[currentIndex]} alt={`${name} ${currentIndex + 1}`} className={styles.img} />
      
      <button className={`${styles.navBtn} ${styles.left}`} onClick={prevSlide} aria-label="Previous image">
        &#10094;
      </button>
      <button className={`${styles.navBtn} ${styles.right}`} onClick={nextSlide} aria-label="Next image">
        &#10095;
      </button>

      <div className={styles.dots}>
        {images.map((_, idx) => (
          <span 
            key={idx} 
            className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
          />
        ))}
      </div>
    </div>
  )
}
