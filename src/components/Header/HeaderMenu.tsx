import { useCloseMenu } from '../../hooks/useCloseMenu'
import { CardMenu } from '../UI/CardMenu'

interface HeaderMenuProps {
  onHandleToggleMenu: () => void
}

export function HeaderMenu({ onHandleToggleMenu }: HeaderMenuProps) {
  const { menuRef } = useCloseMenu({
    onHandleToggleMenu,
  })

  return (
    <CardMenu ref={menuRef}>
      <li>Adicionar salário</li>
    </CardMenu>
  )
}
