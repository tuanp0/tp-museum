import React, { FC, ReactNode } from 'react'

import styles from './Container.module.scss'

interface ContainerProps {
    className?: string,
    noPadding?: boolean,
    children: ReactNode,
}


const Container: FC<ContainerProps> = ({ className, noPadding, children }) => {
  return (
    <div className={`${styles.container} ${className} ${noPadding && styles.nopadding}`}>
        {children}
    </div>
  )
}

export default Container