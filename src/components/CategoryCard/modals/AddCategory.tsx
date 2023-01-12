import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { toggleAddCategory } from '../../../store/slices/ui-slice'
import { Modal } from '../../UI/Modal'
import styles from '../../UI/Modal.module.scss'

export function AddCategory() {
  const { isVisible } = useSelector((state: RootState) => state.ui.addCategory)
  const dispatch = useDispatch()

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddCategory(null))}
      title="Nova Categoria"
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
              placeholder="Essencial"
            />
          </div>
          <div className={styles['label-input']}>
            <label htmlFor="percentage" className="p">
              Porcentagem Alocada
            </label>
            <input
              type="text"
              id="percentage"
              name="percentage"
              placeholder="%"
              className="max-width"
            />
          </div>
          <div className={styles.buttons}>
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
