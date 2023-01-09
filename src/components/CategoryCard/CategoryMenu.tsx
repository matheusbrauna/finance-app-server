import { useCloseMenu } from '../../hooks/useCloseMenu'
import { CardMenu } from '../UI/CardMenu'

interface CategoryMenuProps {
  onHandleToggleMenu: () => void
}

export function CategoryMenu({ onHandleToggleMenu }: CategoryMenuProps) {
  const { menuRef } = useCloseMenu({ onHandleToggleMenu })

  return (
    <CardMenu ref={menuRef}>
      <li>Editar</li>
      <li>Adicionar</li>
      <li>Descontar</li>
      <li>Transferir</li>
    </CardMenu>
  )
}
