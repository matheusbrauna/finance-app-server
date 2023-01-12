import { useDispatch } from 'react-redux'
import { AllCards } from '../components/CategoryCard/AllCards'
import { Header } from '../components/Header/Header'
import { useGetDocs } from '../hooks/useGetDocs'
import { setCategories } from '../store/slices/app-slice'
import styles from '../styles/initial.module.scss'

export default function Home() {
  const dispatch = useDispatch()
  const { documents } = useGetDocs({
    collectionName: 'categories',
  })
  dispatch(setCategories(documents))

  return (
    <main className={styles.main}>
      <Header />
      <AllCards />
    </main>
  )
}
