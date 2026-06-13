const InitialState = {
  Products: [],
  count: [],
};

export const ProductReducer = (state = InitialState, action) => {
  if (action.type === "ADD_TO_PRODUCTS") {
    return {
      ...state, // keep other properties like count
      Products: [...state.Products, action.payload],
    };
  }
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else {
    return state;
  }
};
