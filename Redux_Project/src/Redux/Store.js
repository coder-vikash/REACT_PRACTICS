import { createStore } from "redux";
import { ProductReducer } from "./Reducer/ProductReducer";
const store = createStore(
  ProductReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
