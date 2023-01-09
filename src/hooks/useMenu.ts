import { useState } from 'react'

export function useMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  function handleToggleMenu() {
    setIsMenuVisible(!isMenuVisible)
  }

  return {
    isMenuVisible,
    handleToggleMenu,
  }
}
