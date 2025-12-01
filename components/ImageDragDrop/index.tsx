'use client'
import temoignagesData from '@/data/temoignages.json'
import { TemoignagesInterface, TemoignageItemInterface } from '@/types/temoignages'
import React, { useState, useEffect, useRef } from 'react'
import Container from '@/components/Container'

import styles from './ImageDragDrop.module.scss'

interface Offset {
  x: number;
  y: number;
}

const getRandomRotation = () => Math.floor(Math.random() * 41) - 20;

const ImageDragDrop: React.FC = () => {
  const maxZIndexRef = useRef(10);

  // const data: TemoignagesInterface = temoignagesData
  const data = temoignagesData as TemoignagesInterface;

  const [images, setImages] = useState<TemoignageItemInterface[]>(data.temoignages);

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
        img.id === id ?
          { ...img, zIndex: maxZIndexRef.current }
        :
          img
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
              <div className={styles.imagedragdropVisuel}>
                <img
                  src={img.url}
                  alt={`Image ${img.id}`}
                  className={styles.imagedragdropImg}
                  draggable="false"
                />
              </div>
              <div
                className={`
                  ${styles.imagedragdropText}
                  ${img.font === 1 ? styles.fontOne : ''}
                  ${img.font === 2 ? styles.fontTwo : ''}
                `}
              >
                {img.message}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default ImageDragDrop