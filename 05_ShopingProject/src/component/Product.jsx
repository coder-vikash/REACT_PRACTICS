import axios from "axios";
import { useEffect, useState } from "react";
import { Loder } from "./Loder";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [isloding, setIsLoder] = useState(false);
  const fetchData = async () => {
    setIsLoder(true);
    const response = await axios("https://fakestoreapi.com/products");
    setProducts(response.data);
    setIsLoder(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isloding) return <Loder />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
      {products.map((item, index) => (
        <ProductCard key={index} items={item} />
      ))}
    </div>
  );
};

const ProductCard = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/Product/${items.id}`)}
      className="rounded-lg bg-gray-700 text-white shadow-md hover:scale-105 transition-transform"
    >
      <img
        className="aspect-square object-contain p-4 w-full"
        src={items.image}
        alt={items.title}
      />
      <div className="p-5">
        <h1 className="text-lg font-semibold line-clamp-2">{items.title}</h1>

        {/* Rating and Price */}
        <div className="flex gap-3 py-2 items-center">
          <p className="bg-green-500 px-3 py-1 rounded-lg flex items-center text-xs">
            <span>⭐</span>
            <span className="ml-1">{items.rating.rate}</span>
          </p>
          <p className="text-sm text-gray-300">{items.rating.count} reviews</p>
        </div>

        <p className="font-bold text-xl text-orange-300">{items.price} ₹</p>
      </div>
    </div>
  );
};
