import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { toggleTransferAmount } from '../../../store/slices/ui-slice'
import { Modal } from '../../UI/Modal'
import styles from '../../UI/Modal.module.scss'

export function TransferAmount() {
  const { isVisible } = useSelector(
    (state: RootState) => state.ui.transferAmount,
  )
  const dispatch = useDispatch()

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleTransferAmount(null))}
      title="Transferir"
    >
      <div>
        <form>
          <div className={styles['label-input']}>
            <p>De</p>
            <p className="caption">Essencial</p>
          </div>
          <div className={styles['label-input']}>
            <label htmlFor="destination">Para</label>
            <select name="destination" id="destination" className="max-width">
              <option value="essencial">Essencial</option>
              <option value="viagens">Viagens</option>
              <option value="investimentos">Investimentos</option>
            </select>
          </div>
          <div className={styles['label-input']}>
            <label className="p">Valor</label>
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
              Transferir
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
