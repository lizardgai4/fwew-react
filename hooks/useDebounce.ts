import { useState } from "react";

export function useDebounce() {
  const [typingTimeout, setTypingTimeout] = useState({} as NodeJS.Timeout);

  return function debounce(
    func: () => void,
    cancel?: () => void,
    wait: number = 300
  ) {
    clearTimeout(typingTimeout);
    if (cancel !== undefined) cancel();
    const timeout = setTimeout(func, wait);
    setTypingTimeout(timeout);
  };
}
