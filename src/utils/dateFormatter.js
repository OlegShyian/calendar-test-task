export const dateFormatter = (date = new Date()) => {
  return date instanceof Date ? date.toISOString().substring(0, 10) : date;
};
