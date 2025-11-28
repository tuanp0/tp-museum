'use client'
import React from 'react'
import Image from 'next/image'
import useMasonry from "@/components/Masonry/useMasonry"
import Container from '@/components/Container'

import styles from './Masonry.module.scss'

interface GalleryImage {
    src: string,
    alt?: string,
    width?: number,
    height?: number,
    author?: string
}

interface GalleryProps {
    images: GalleryImage[]
}

const Gallery = ({images}: GalleryProps) => {
  const masonryContainer = useMasonry();

  return (
    <div
      className={styles.masonry}
    >       
      <Container className={styles.container}>
        <div ref={masonryContainer} className={styles.masonryContent}>
          {images.map((image, index) => (
            <div key={index} className={styles.masonryItem}>
              <Image
                src={image.src}
                width={image.width ?? 800}
                height={image.height ?? 600}
                alt={image.alt ?? `Image ${index + 1}`}
                priority={true}
                className={styles.masonryItemImg}
              />
              <span className={`author`}>{image.author}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Gallery