import React, { FC, ReactNode } from 'react'

import styles from './Container.module.scss'

interface ContainerProps {
    children: ReactNode,
    noPadding?: boolean,
}


const Container: FC<ContainerProps> = ({ children, noPadding }) => {
  return (
    <div className={`${styles.container} ${noPadding && styles.nopadding}`}>
        {children}
    </div>
  )
}

export default Container