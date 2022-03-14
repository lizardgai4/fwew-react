import { useState } from 'react';

function useDebounce(): (func: () => void, wait?: number) => void {
  const [typingTimeout, setTypingTimeout] = useState({} as NodeJS.Timeout)

  return function debounce(func: () => void, wait: number = 500): void {
    clearTimeout(typingTimeout)
    const timeout = setTimeout((): void => func(), wait)
    setTypingTimeout(timeout)
  }
}

export { useDebounce }
