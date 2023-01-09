import styles from './CategoryCard.module.scss'
import { TbPencil } from 'react-icons/tb'
import { useGetCurrency } from '../../hooks/useGetCurrency'
import { CategoryMenu } from './CategoryMenu'
import { useMenu } from '../../hooks/useMenu'

interface CategoryCardProps {
  category: {
    title: string
    amount: number
    percentage: number
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { title, amount, percentage } = category
  const { isMenuVisible, handleToggleMenu } = useMenu()
  const { currency } = useGetCurrency(amount)

  return (
    <div className={styles.card}>
      <div className={styles.edit}>
        <TbPencil className="icon hover" onClick={handleToggleMenu} />
        {isMenuVisible && (
          <CategoryMenu onHandleToggleMenu={handleToggleMenu} />
        )}
      </div>
      <h2>{title}</h2>
      <h3>{currency}</h3>
      <h4>Alocado: {percentage}%</h4>
    </div>
  )
}
