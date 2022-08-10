export const getFromLS = (key, defaultValue) => {
  const value = localStorage.getItem(key);

  if (typeof defaultValue !== 'object') {
    return value || defaultValue;
  }

  try {
    return value ? JSON.parse(value) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

export const setToLS = (key, value) => {
  localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
};

export const removeFromLS = (key) => {
  localStorage.removeItem(key);
};
