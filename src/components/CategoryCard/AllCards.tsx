import styles from './AllCards.module.scss'
import { CategoryCard } from './CategoryCard'
import { AddAmount } from './modals/AddAmount'
import { NoCard } from './NoCard'

const DUMMY_DATA = [
  {
    id: 1,
    title: 'Essencial',
    amount: 1400,
    percentage: 35,
  },
  {
    id: 2,
    title: 'Investimentos',
    amount: 750,
    percentage: 15,
  },
  {
    id: 3,
    title: 'Pessoal',
    amount: 400,
    percentage: 45,
  },
]

export function AllCards() {
  const cards = DUMMY_DATA.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ))

  return (
    <>
      <AddAmount />
      <section className={styles.section}>
        {cards}
        <NoCard />
      </section>
    </>
  )
}
