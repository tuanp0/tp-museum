import OuvertureTarifData from '@/data/ouverturetarif.json'
import { OuvertureTarifInterface, OuvertureInterface, TarifInterface } from '@/types/ouverturetarif'
import React from 'react'

import styles from "./OuvertureTarif.module.scss"

interface OuvertureInterfaceProps {
  color?: string;
}

const OuvertureTarif = ({color}:OuvertureInterfaceProps) => {
  const data: OuvertureTarifInterface = OuvertureTarifData

  return (
    <div className={styles.ouverture}>
      <div className={styles.ouvertureInner}>
        <div className={`${styles.ouvertureTitle} ${color === 'white' ? styles.white : ''}`} dangerouslySetInnerHTML={{__html: data.ouverturetitle}} />
        <div className={styles.ouvertureContent}>
          {data.ouverture.map((day, index) => (
            <div key={index} className={styles.ouvertureSolo}>
              <span className={styles.ouvertureKey}>{day.key}</span>
              <span className={styles.ouvertureValue}>{day.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.ouvertureInner}>
        <div className={`${styles.ouvertureTitle} ${color === 'white' ? styles.white : ''}`} dangerouslySetInnerHTML={{__html: data.tariftitle}} />
        <div className={styles.ouvertureContent}>
          {data.tarif.map((price, index) => (
            <div key={index} className={styles.ouvertureSolo}>
              <span className={styles.ouvertureKey}>{price.key}</span>
              <span className={styles.ouvertureValue}>{price.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OuvertureTarif