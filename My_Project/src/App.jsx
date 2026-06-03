import "./App.css";
import Data from "./Data.json";
console.log(Data);
function App() {
  return (
    <>
      <div className="w-screen flex flex-col gap-6 p-5 bg-gray-600">
        {Data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-start gap-6 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="w-1/4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain rounded-md"
                />
              </div>

              {/* Details */}
              <div className="flex-1 px-4">
                <h1 className="text-lg font-semibold text-black">
                  {item.title}
                </h1>
                <p className="text-xl text-black mt-1">
                  ⭐ {item.rating} | {item.reviews}
                </p>

                <ul className="list-disc ml-6 space-y-1 mt-2 text-black  text-xl">
                  {item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>

                <p className="text-green-600 font-medium mt-2">
                  {item.offers.exchangeOffer}
                </p>
                <p className="text-green-500 mt-1">{item.offers.bankOffer}</p>
              </div>

              {/* Price */}
              <div className="text-right min-w-[120px]">
                <p className="text-xl font-bold text-green-600">{item.price}</p>
                <p className="line-through text-gray-400">
                  {item.originalPrice}
                </p>
                <p className="text-green-500 font-medium">{item.discount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
