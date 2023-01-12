import styles from './Modal.module.scss'
import { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { MdClose } from 'react-icons/md'

interface ModalProps {
  children: ReactNode
  title: string
  isOpen: boolean
  onClose: () => void
}

export function Modal({
  children,
  isOpen = false,
  onClose,
  title = 'Título do modal',
}: ModalProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const modalWrapper = isOpen && (
    <>
      <div className={styles.modal}>
        <div className={styles.heading}>
          <h2>{title}</h2>
          <button type="button" onClick={onClose}>
            <MdClose className="icon hover" />
          </button>
        </div>
        <p>{children}</p>
      </div>
      <div className={styles.overlay} onClick={onClose} />
    </>
  )

  if (isClient) {
    return ReactDOM.createPortal(
      modalWrapper,
      document.getElementById('modal-root')!,
    )
  } else {
    return null
  }
}
