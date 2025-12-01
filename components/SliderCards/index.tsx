'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Container from '@/components/Container'

import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './SliderCards.module.scss'

interface SliderInterface {
  slider: {
    src: string
    alt: string
    width: string
    height: string
    author: string
    title: string
    category: string
    date: string
    link: string
  }[]
}

const SliderCards = ({slider}:SliderInterface) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={styles.slidercards}>
      <Container className={styles.container}>
        {slider.length >= 1 &&
          <>
            <Swiper
              className={`slidercardsSlider ${styles.slidercardsSlider}`}
              grabCursor={true}
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={32}
              slidesPerView={1.3}
              breakpoints={{
                768: {
                  slidesPerView: 2.3,
                  spaceBetween: 24
                },
                1024: {
                  slidesPerView: 3.3,
                  spaceBetween: 32
                }
              }}
              onSwiper={(swiper) => {
                setSwiperInstance(swiper);
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={handleSlideChange}
            >
              {slider.map((item, index) => (
                <SwiperSlide key={index} className={`slidercardsSlider ${styles.slidercardsSlider}`}>
                  <Link href={``} title={item.title}>
                    <div className={styles.slidercardsSlide}>
                      <div className={styles.slidercardsImgcontainer}>
                        <img src={item.src} alt={item.alt} width={item.width} height={item.height} className={styles.slidercardsImg}/>
                        <span className={`author`}>{item.author}</span>
                      </div>
                      <div className={styles.slidercardsContent}>
                        <h3 className={styles.slidercardsTitle}>{item.title}</h3>
                        <p className={styles.slidercardsCategory}>{item.category} - {item.date}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={styles.slidercardsNav}>
              <button 
                className={`${styles.slidercardsNavPrev}`}
                onClick={() => swiperInstance?.slidePrev()}
                disabled={isBeginning}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.slidercardsNavArrow}>
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
              
              <button 
                className={`${styles.slidercardsNavNext}`}
                onClick={() => swiperInstance?.slideNext()}
                disabled={isEnd}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.slidercardsNavArrow}>
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </>
        }
      </Container>
    </div>
  )
}

export default SliderCards