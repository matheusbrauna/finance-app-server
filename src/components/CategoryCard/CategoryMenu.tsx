import { useDispatch } from 'react-redux'
import { useCloseMenu } from '../../hooks/useCloseMenu'
import { toggleAddAmount } from '../../store/slices/ui-slice'
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
      <li>Editar</li>
      <li onClick={() => dispatch(toggleAddAmount(data))}>Adicionar</li>
      <li>Descontar</li>
      <li>Transferir</li>
    </CardMenu>
  )
}
