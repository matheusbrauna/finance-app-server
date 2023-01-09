import Image from 'next/image'
import { useMenu } from '../../hooks/useMenu'
import styles from './Header.module.scss'
import { HeaderMenu } from './HeaderMenu'

export function Header() {
  const { handleToggleMenu, isMenuVisible } = useMenu()

  return (
    <section className={styles.header}>
      <div className={styles.message}>
        <h1>Olá, senti saudades 😄!</h1>
        <h2>Sua carteira está esperando por você</h2>
      </div>
      <div className={styles.avatar}>
        <Image src="/avatar.png" alt="avatar" fill onClick={handleToggleMenu} />
        {isMenuVisible && <HeaderMenu onHandleToggleMenu={handleToggleMenu} />}
      </div>
    </section>
  )
}
