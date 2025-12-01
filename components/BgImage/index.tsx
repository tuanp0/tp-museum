import React from 'react'
import Image from 'next/image'
import styles from './BgImage.module.scss'

interface BgImageInterface {
    data: {
        src: string;
        alt: string,
        width: number,
        height: number,
        author: string
    }[];
}

const BgImage = ({data}:BgImageInterface) => {
  return (
    <>
        {data.map((item, index) => (
            <div className={styles.bgimage} key={index}>
                <div style={{backgroundImage: `url(${item.src})`}} className={styles.bgimageImg}/>
                <span className={`author`}>{item.author}</span>
            </div>
        ))}
    </>
  )
}

export default BgImage