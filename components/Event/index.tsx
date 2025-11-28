import eventData from '@/data/event.json'
import { EventBlockInterface } from '@/types/event'
import React from 'react'
import Link from 'next/link'
import Container from "@/components/Container"

import styles from "./Event.module.scss"

const Event = () => {
  const data: EventBlockInterface = eventData

  return (
    <section className={styles.event}>
        <Container>
            <div className={styles.eventTitle} dangerouslySetInnerHTML={{__html:data.title}} />
            {data.events.map((event, index) => (
              <div key={index} className={styles.eventContent}>
                <div className={styles.eventDate}>
                  <div className={styles.eventDateContent}>
                    <p className={styles.eventDateStart}>{event.dateStart}</p>
                    <p className={styles.eventDateEnd}>{event.dateEnd}</p>
                    <div className={styles.eventPlace} dangerouslySetInnerHTML={{__html:event.place}} />
                  </div>
                </div>
                <div className={styles.eventText}>
                  <h3 className={styles.eventName}>{event.eventName}</h3>
                  <p className={styles.eventDesc}>{event.eventDesc}</p>
                  {event.link && <Link href={event.link} title={event.eventName} className={styles.eventLink}>En savoir plus</Link>}
                </div>
              </div>
            ))}
        </Container>
    </section>
  )
}

export default Event