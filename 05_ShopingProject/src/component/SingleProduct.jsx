import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loder } from "./Loder";
import axios from "axios";

export const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data); // ✅ store full product object
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]); // ✅ re-run when id changes

  if (isLoading) return <Loder />;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-4xl w-full rounded-lg text-white shadow-lg p-6">
        {/* Product Image */}
        <img
          className="object-contain mx-auto mb-6 w-full h-96"
          src={product?.image}
          alt={product?.title}
        />

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center mb-4">
          {product?.title}
        </h1>

        {/* Rating and Reviews */}
        <div className="flex justify-center gap-4 mb-4">
          <p className="bg-green-500 px-3 py-1 rounded-lg flex items-center text-xl">
            <span>⭐</span>
            <span className="ml-1">{product?.rating?.rate}</span>
          </p>
          <p className="text-xl text-gray-100">
            {product?.rating?.count} reviews
          </p>
        </div>

        {/* Price */}
        <p className="font-bold text-2xl text-orange-400 text-center mb-6">
          {product?.price} ₹
        </p>

        {/* Description */}
        <p className="text-xl text-gray-300 leading-relaxed text-center">
          {product?.description}
        </p>
      </div>
    </div>
  );
};
