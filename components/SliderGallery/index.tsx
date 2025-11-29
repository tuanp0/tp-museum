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
  id: number;
  url: string;
  alt?: string;
  author?: string;
  title?: string;
  category?: string;
  date?: string;
  width?: number;
  height?: number;
  message?: string;
  [key: string]: any;
}

interface SliderGalleryProps {
  data: SlideItem[];
  reverse?: boolean;
}

const SliderGalery = ({ data, reverse }:SliderGalleryProps) => {

  return (
    <div className={styles.slidergallery}>
        {data.length >= 1 &&
        <>
          <Swiper
            className={`slidergallerySlider ${styles.slidergallerySlider}`}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: reverse || false,
            }}
            speed={13000}
            loop={true}
            grabCursor={true}
            modules={[Autoplay, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
              768: {
                slidesPerView: 4
              },
              1024: {
                slidesPerView: 5
              }
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className={`${styles.slidergallerySlide}`}>
                <div className={styles.slidergalleryVisuel}>
                  <img src={item.url} alt={item.alt} width={item.width} height={item.height} className={styles.slidergalleryImg}/>
                  <span className={`author`}>{item.author}</span>
                </div>
                <div
                  className={`
                    ${styles.slidergalleryText}
                    ${item.font === 1 ? styles.fontOne : ''}
                    ${item.font === 2 ? styles.fontTwo : ''}
                  `}
                >
                  {item.message}
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