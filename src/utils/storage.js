import { useState } from 'react';

export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export const saveToStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(getFromStorage(key) || defaultValue);

  const setStorageValue = (value) => {
    saveToStorage(key, value);
    setValue(value);
  };

  return [value, setStorageValue];
};
