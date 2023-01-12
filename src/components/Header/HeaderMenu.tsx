import { useDispatch } from 'react-redux'
import { useCloseMenu } from '../../hooks/useCloseMenu'
import { toggleAddSalary } from '../../store/slices/ui-slice'
import { CardMenu } from '../UI/CardMenu'

interface HeaderMenuProps {
  onHandleToggleMenu: () => void
}

export function HeaderMenu({ onHandleToggleMenu }: HeaderMenuProps) {
  const { menuRef } = useCloseMenu({
    onHandleToggleMenu,
  })
  const dispatch = useDispatch()

  return (
    <CardMenu ref={menuRef}>
      <li onClick={() => dispatch(toggleAddSalary(null))}>Adicionar salário</li>
    </CardMenu>
  )
}
