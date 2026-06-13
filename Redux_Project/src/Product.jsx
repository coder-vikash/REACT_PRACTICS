import { useEffect } from "react";
import { useSelector } from "react-redux";

export const Product = () => {
  const product = useSelector((state) => state.Products);

  useEffect(() => {
    console.log("rerander ho raha hi");
  });

  return <div>{JSON.stringify(product)}</div>;
};
