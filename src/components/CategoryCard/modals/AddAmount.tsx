import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { toggleAddAmount } from '../../../store/slices/ui-slice'
import { Modal } from '../../UI/Modal'
import styles from '../../UI/Modal.module.scss'

export function AddAmount() {
  const { isVisible, category } = useSelector((state: RootState) => state.ui.addAmount)
  const dispatch = useDispatch()

  return (
    <Modal isOpen={isVisible} onClose={() => dispatch(toggleAddAmount(null))} title="Adicionar">
      <div>
        <form>
          <label className={styles['label-input']}>
            <span className="p">Títulos</span>
            <input
              type="text"
              name="title"
              placeholder="Ex: venda do teclado"
            />
          </label>

          <label className={styles['label-input']}>
            <span className="p">Valor</span>
            <input
              type="text"
              name="amount"
              placeholder="R$"
              className="max-width"
            />
          </label>

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
