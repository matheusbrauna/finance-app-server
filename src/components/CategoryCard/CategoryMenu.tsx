import { useDispatch } from 'react-redux'
import { useCloseMenu } from '../../hooks/useCloseMenu'
import {
  toggleAddAmount,
  toggleEditCategory,
  toggleSubtractAmount,
  toggleTransferAmount,
} from '../../store/slices/ui-slice'
import { CardMenu } from '../UI/CardMenu'

interface CategoryMenuProps {
  onHandleToggleMenu: () => void
  data: {
    title: string
    amount: number
    percentage: number
  }
}

export function CategoryMenu({ onHandleToggleMenu, data }: CategoryMenuProps) {
  const { menuRef } = useCloseMenu({ onHandleToggleMenu })
  const dispatch = useDispatch()

  return (
    <CardMenu ref={menuRef}>
      <li onClick={() => dispatch(toggleEditCategory(data))}>Editar</li>
      <li onClick={() => dispatch(toggleAddAmount(data))}>Adicionar</li>
      <li onClick={() => dispatch(toggleSubtractAmount(data))}>Descontar</li>
      <li onClick={() => dispatch(toggleTransferAmount(data))}>Transferir</li>
    </CardMenu>
  )
}
