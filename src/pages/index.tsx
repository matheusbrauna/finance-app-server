import { AllCards } from '../components/CategoryCard/AllCards'
import { Header } from '../components/Header/Header'
import styles from '../styles/initial.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AllCards />
    </main>
  )
}
