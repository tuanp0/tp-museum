import React, { ReactNode } from 'react'

import styles from './BgVideo.module.scss'

interface BgVideoInterface {
  fixed?: boolean,
  data: {
    url: string;
    title: string;
    author: string
  }[],
  children?: ReactNode
}

const BgVideo = ({fixed, data, children}:BgVideoInterface) => {
  return (
    <div className={`${styles.bgvideo} ${fixed ? styles.fixed : ''}`}>
      {data.map((item, index) => (
        <div className={styles.bgvideoInner} key={index}>
          <video
            className={styles.bgvideoIframe}
            autoPlay
            loop
            muted
            playsInline   
          >
            <source src={item.url} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <span className={`author`}>{item.author}</span>
        </div>
      ))}
      {children && (
        <div className={styles.bgvideoContent}>
          {children}
        </div>
      )}
    </div>
  )
}

export default BgVideo