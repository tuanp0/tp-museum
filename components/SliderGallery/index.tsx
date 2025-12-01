'use client'
import React from 'react'
import { Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './SliderGallery.module.scss'

interface SlideItem {
  url: string;
  alt?: string;
  author?: string;
  date?: string;
  width?: number;
  height?: number;
  message?: string;
  font?: number;
  [key: string]: any;
}

interface SliderGalleryProps {
  data: SlideItem[];
  reverse?: boolean;
  page?: number;
}

const SliderGalery = ({ data, reverse, page }:SliderGalleryProps) => {
  const currentIndex = page || 1;
  const startIndex = (currentIndex-1) * 10;
  const endIndex = currentIndex * 10;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div className={styles.slidergallery}>
        {paginatedData.length >= 1 &&
        <>
          <Swiper
            className={`slidergallerySlider ${styles.slidergallerySlider}`}
            modules={[Autoplay, Scrollbar, A11y]}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: reverse || false,
            }}
            speed={10000}
            loop={true}
            grabCursor={true}
            slidesPerView={'auto'}
          >
            {paginatedData.map((item, index) => (
              <SwiperSlide key={index} className={`${styles.slidergallerySlide}`}>
                <div className={styles.slidergallerySlideContent}>
                  <div className={styles.slidergalleryVisuel}>
                    <img src={item.url} alt={item.alt} width={item.width} height={item.height} className={styles.slidergalleryImg}/>
                    <span className={`author`}>{item.author}</span>
                  </div>
                  <div
                    className={`
                      ${styles.slidergalleryText}
                      ${item.font === 1 ? styles.fontOne : ''}
                      ${item.font === 2 ? styles.fontTwo : ''}
                      ${item.font === 3 ? styles.fontThree : ''}
                    `}
                  >
                    <p className={styles.slidergalleryTextInner} dangerouslySetInnerHTML={{__html: item.message ?? ''}} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      }
    </div>
  )
}

export default SliderGalery