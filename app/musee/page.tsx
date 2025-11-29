import histoireData from '@/data/histoire.json'
import React from 'react'
import TitleTextVisuel from '@/components/TitleTextVisuel'

const Musee = () => {
  return (
    <main className={`main padding`}>
        <TitleTextVisuel data={histoireData} />
    </main>
  )
}

export default Musee