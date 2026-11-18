import { useEffect, useState } from "react";

/**
 * Funciona como o useState, mas guarda o valor no localStorage
 * para que os dados não sumam ao recarregar a página (F5).
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // armazenamento cheio ou indisponível: ignora
    }
  }, [key, value]);

  return [value, setValue];
}
