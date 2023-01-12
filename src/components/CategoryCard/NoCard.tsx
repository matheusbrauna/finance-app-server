import { TbPlus } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { toggleAddCategory } from '../../store/slices/ui-slice'
import styles from './NoCard.module.scss'

export function NoCard() {
  const dispatch = useDispatch()

  return (
    <div
      className={styles['no-card']}
      onClick={() => dispatch(toggleAddCategory(null))}
    >
      <TbPlus className="icon" />
    </div>
  )
}
