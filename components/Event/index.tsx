import eventData from '@/data/event.json'
import { EventInterface } from '@/types/event'
import React from 'react'
import Link from 'next/link'
import Container from "@/components/Container"

import styles from "./Event.module.scss"

const Event = () => {
  const data: EventInterface = eventData

  return (
    <section className={styles.event}>
        <Container>
            <div className={styles.eventTitle} dangerouslySetInnerHTML={{__html:data.title}} />
            <div className={styles.eventContent}>
              <div className={styles.eventDate}>
                <div className={styles.eventDateContent}>
                  <p className={styles.eventDateStart}>{data.dateStart}</p>
                  <p className={styles.eventDateEnd}>{data.dateEnd}</p>
                  <div className={styles.eventPlace} dangerouslySetInnerHTML={{__html:data.place}} />
                </div>
              </div>
              <div className={styles.eventText}>
                <h3 className={styles.eventName}>{data.eventName}</h3>
                <p className={styles.eventDesc}>{data.eventDesc}</p>
                <Link href={data.link} title={data.eventName} className={styles.eventLink}>En savoir plus</Link>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default Event