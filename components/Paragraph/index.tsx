'use client'
import React, { useEffect, useRef, useState } from 'react'
import Container from '@/components/Container'

import styles from './Paragraph.module.scss'

interface ParagraphInterface {
    paragraph?: string,
    color?: string,
    paddingT?: boolean,
    scale?: boolean
}

const Paragraph = ({paragraph, color, paddingT, scale}:ParagraphInterface) => {
  const paragraphRef = useRef<HTMLDivElement>(null)
  const [scaleValue, setScaleValue] = useState(1)
  const [isInViewport, setIsInViewport] = useState(false)

  useEffect(() => {
    if (!scale || !paragraphRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting)
        
        if (!entry.isIntersecting) {
          setScaleValue(1)
        }
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    )

    observer.observe(paragraphRef.current)

    const handleScroll = () => {
      if (!isInViewport || !paragraphRef.current) return

      const element = paragraphRef.current
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const viewportCenter = viewportHeight / 2

      const elementCenter = rect.top + rect.height / 2

      const distanceFromCenter = (elementCenter - viewportCenter) / viewportCenter

      const maxScale = 1.2
      const minScale = 1
      
      const newScale = maxScale - Math.abs(distanceFromCenter) * (maxScale - minScale)
      setScaleValue(Math.max(minScale, Math.min(maxScale, newScale)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scale, isInViewport])

  return (
    <div
      ref={paragraphRef}
      className={`
        ${styles.paragraph}
        ${color === 'white' ? styles.white : ''}
        ${paddingT ? styles.paddingt : ''}
        ${scale ? styles.scale : ''}
      `}
      style={scale ? { transform: `scale(${scaleValue})` } : undefined}
    >
      <Container className={styles.container}>
        <div className={styles.paragraphInner} dangerouslySetInnerHTML={{__html:paragraph ?? ''}}/>
      </Container>
    </div>
  )
}

export default Paragraph