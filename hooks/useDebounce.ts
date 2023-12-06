import { useState } from "react";

export function useDebounce() {
  const [typingTimeout, setTypingTimeout] = useState({} as NodeJS.Timeout);

  return function debounce(func: () => void, wait: number = 300) {
    clearTimeout(typingTimeout);
    const timeout = setTimeout(func, wait);
    setTypingTimeout(timeout);
  };
}
