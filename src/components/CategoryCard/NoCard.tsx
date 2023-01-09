import { TbPlus } from 'react-icons/tb'
import styles from './NoCard.module.scss'

export function NoCard() {
  return (
    <div className={styles['no-card']}>
      <TbPlus className="icon" />
    </div>
  )
}
