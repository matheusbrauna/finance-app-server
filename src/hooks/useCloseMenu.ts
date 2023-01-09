import { useRef, useEffect } from 'react'

interface useCloseMenuProps {
  onHandleToggleMenu: () => void
}

export function useCloseMenu({ onHandleToggleMenu }: useCloseMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) onHandleToggleMenu()
    }
    document.addEventListener('mousedown', clickHandler)
    return () => {
      document.removeEventListener('mousedown', clickHandler)
    }
  }, [onHandleToggleMenu])

  return {
    menuRef,
  }
}
