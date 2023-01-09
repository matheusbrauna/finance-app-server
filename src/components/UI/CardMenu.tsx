import { forwardRef, ReactNode, Ref } from 'react'
import styles from './CardMenu.module.scss'

interface CardMenuProps {
  children: ReactNode
  ref: Ref<HTMLDivElement>
}

export const CardMenu = forwardRef(({ children, ref }: CardMenuProps) => {
  return (
    <div className={styles.card} ref={ref}>
      <div>
        <ul className={styles.list}>{children}</ul>
      </div>
    </div>
  )
})

CardMenu.displayName = 'Card Menu'
