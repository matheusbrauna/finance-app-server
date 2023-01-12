import { forwardRef, ReactNode } from 'react'
import styles from './CardMenu.module.scss'

interface CardMenuProps {
  children: ReactNode
}

export const CardMenu = forwardRef<HTMLDivElement, CardMenuProps>(
  ({ children }, ref) => {
    return (
      <div className={styles.card} ref={ref}>
        <div>
          <ul className={styles.list}>{children}</ul>
        </div>
      </div>
    )
  },
)

CardMenu.displayName = 'Card Menu'
