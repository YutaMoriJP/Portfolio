import { useEffect, useCallback, useRef } from "react";

const setStorage = (keyName, state) =>
  localStorage.setItem(keyName, typeof state === "object" ? JSON.stringify(state) : state);

export const getStorage = (keyName) => {
  try {
    return JSON.parse(localStorage.getItem(keyName));
  } catch (error) {
    return localStorage.getItem(keyName);
  }
};

const useLocalStorage = (keyName, state) => {
  const prevStorageKeyRef = useRef(null);

  const clear = useCallback(() => localStorage.removeItem(keyName), [keyName]);

  useEffect(() => {
    const prevKey = prevStorageKeyRef.current;

    if (prevKey !== keyName) localStorage.removeItem(prevKey);

    setStorage(keyName, state);
  }, [keyName, state]);

  return {
    clear
  };
};

export default useLocalStorage;
