'use client'
import React, { useState, useEffect, useRef } from 'react'
import Container from '@/components/Container'

import styles from './ImageDragDrop.module.scss'

interface Image {
  id: number;
  x: number;
  y: number;
  url: string;
  zIndex: number;
  rotation: number;
}

interface Offset {
  x: number;
  y: number;
}

const getRandomRotation = () => Math.floor(Math.random() * 41) - 20;

const ImageDragDrop = () => {
  const maxZIndexRef = useRef(10);

  const [images, setImages] = useState<Image[]>([
    { id: 1, x: 50, y: 50, url: 'https://picsum.photos/seed/1/200/150', zIndex: 1, rotation: 0 },
    { id: 2, x: 300, y: 50, url: 'https://picsum.photos/seed/2/200/150', zIndex: 2, rotation: 0 },
    { id: 3, x: 550, y: 50, url: 'https://picsum.photos/seed/3/200/150', zIndex: 3, rotation: 0 },
    { id: 4, x: 50, y: 250, url: 'https://picsum.photos/seed/4/200/150', zIndex: 4, rotation: 0 },
    { id: 5, x: 300, y: 250, url: 'https://picsum.photos/seed/5/200/150', zIndex: 5, rotation: 0 },
    { id: 6, x: 550, y: 250, url: 'https://picsum.photos/seed/6/200/150', zIndex: 6, rotation: 0 },
    { id: 7, x: 50, y: 450, url: 'https://picsum.photos/seed/7/200/150', zIndex: 7, rotation: 0 },
    { id: 8, x: 300, y: 450, url: 'https://picsum.photos/seed/8/200/150', zIndex: 8, rotation: 0 },
    { id: 9, x: 550, y: 450, url: 'https://picsum.photos/seed/9/200/150', zIndex: 9, rotation: 0 },
    { id: 10, x: 300, y: 650, url: 'https://picsum.photos/seed/10/200/150', zIndex: 10, rotation: 0 },
  ]);

  const [dragging, setDragging] = useState<number | null>(null);
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });
  const [mounted, setMounted] = useState<Boolean>(false);

  useEffect(() => {
    setImages(prev => prev.map(img => ({
      ...img,
      rotation: getRandomRotation()
    })));
    setMounted(true);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, id: number): void => {
    const img = images.find(i => i.id === id);
    if (!img) return;

    setDragging(id);
    
    maxZIndexRef.current += 1;
    setImages(prev =>
      prev.map(img =>
        img.id === id ? { ...img, zIndex: maxZIndexRef.current } : img
      )
    );

    setOffset({
      x: e.clientX - img.x,
      y: e.clientY - img.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (dragging === null) return;

    setImages(prev =>
      prev.map(img =>
        img.id === dragging
          ? { ...img, x: e.clientX - offset.x, y: e.clientY - offset.y }
          : img
      )
    );
  };

  const handleMouseUp = (): void => {
    setDragging(null);
  };

  return (
    <div className={styles.imagedragdrop}>
      <Container className={styles.container}>
        <div
          className={styles.imagedragdropContent}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {images.map((img) => (
            <div
              key={img.id}
              className={`
                ${styles.imagedragdropSolo}
                ${dragging === img.id && styles.dragging}
              `}
              style={{
                left: `${img.x}px`,
                top: `${img.y}px`,
                zIndex: img.zIndex,
                transform: `rotate(${img.rotation}deg)`,
              }}
              onMouseDown={(e) => handleMouseDown(e, img.id)}
            >
              <img
                src={img.url}
                alt={`Image ${img.id}`}
                className={styles.imagedragdropImg}
                draggable="false"
              />
              <div className={styles.imagedragdropText}>
                #{img.id}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default ImageDragDrop