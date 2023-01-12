import { Modal } from '../../UI/Modal'
import styles from '../../UI/Modal.module.scss'

export function AddAmount() {
  return (
    <Modal isOpen={true} onClose={() => {}} title="Adicionar">
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
