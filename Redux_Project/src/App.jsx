import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, increment } from "./Redux/Action/ProductAction";
import { Product } from "./Product";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products);

  const handleAddToProduct = () => {
    dispatch(
      addProduct({
        id: 1,
        name: "Vikash",
      }),
    );
  };

  const handeIncrement = () => {
    dispatch(increment());
  };

  console.log(products);
  return (
    <>
      <h1>This is dic</h1>
      <button onClick={handleAddToProduct}>Click me</button>
      <br />
      <Product />
      <button onClick={handeIncrement}>INCREMENT</button>
    </>
  );
}

export default App;
