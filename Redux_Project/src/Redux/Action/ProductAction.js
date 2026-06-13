export const addProduct = (details) => {
  return {
    type: "ADD_TO_PRODUCTS",
    payload: details,
  };
};

export const increment = () => {
  return {
    type: " INCREMENT",
  };
};
