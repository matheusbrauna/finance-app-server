import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { toggleAddAmount } from '../../../store/slices/ui-slice'
import { Modal } from '../../UI/Modal'
import styles from '../../UI/Modal.module.scss'

export function AddAmount() {
  const { isVisible } = useSelector((state: RootState) => state.ui.addAmount)
  const dispatch = useDispatch()

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddAmount(null))}
      title="Adicionar"
    >
      <div>
        <form>
          <div className={styles['label-input']}>
            <label htmlFor="title" className="p">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Ex: venda do teclado"
            />
          </div>
          <div className={styles['label-input']}>
            <label htmlFor="amount" className="p">
              Valor
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="R$"
              className="max-width"
            />
          </div>
          <div className={styles.buttons}>
            <button type="submit" className="btn btn-primary">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
