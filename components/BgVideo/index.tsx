import React from 'react'

import styles from './BgVideo.module.scss'

interface BgVideoInterface {
    data: {
        url: string;
        title: string;
        author: string
    },
}

const BgVideo = ({data}:BgVideoInterface) => {

  return (
    <div className={styles.bgvideo}>
        <video
            className={styles.bgvideoIframe}
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={data.url} type="video/webm" />
            Your browser does not support the video tag.
        </video>
        <span className={`author`}>{data.author}</span>
    </div>
  )
}

export default BgVideo