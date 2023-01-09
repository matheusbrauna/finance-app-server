import { ReactNode } from 'react'
import styles from './CardMenu.module.scss'

interface CardMenuProps {
  children: ReactNode
}

export function CardMenu({ children }: CardMenuProps) {
  return (
    <div className={styles.card}>
      <div>
        <ul className={styles.list}>{children}</ul>
      </div>
    </div>
  )
}
