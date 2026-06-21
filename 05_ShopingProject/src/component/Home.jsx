export const Home = () => {
  const products = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "₹1999",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    },
    {
      id: 3,
      name: "Black Hoodie",
      price: "₹1499",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    },
    {
      id: 4,
      name: "Casual T-Shirt",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600"
          alt="fashion"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            New Fashion Collection
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the latest trends in clothing and accessories.
          </p>

          <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 px-8 py-3 rounded-lg text-lg font-semibold transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Men */}
          <div className="relative group overflow-hidden rounded-2xl h-[400px] cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
              alt="Men Fashion"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-white text-4xl font-bold">Men</h3>
              <button className="mt-4 cursor-pointer bg-white text-black px-6 py-2 rounded-lg font-semibold">
                Shop Now
              </button>
            </div>
          </div>

          {/* Women */}
          <div className="relative group overflow-hidden rounded-2xl h-[400px] cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
              alt="Women Fashion"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-white text-4xl font-bold">Women</h3>
              <button className="mt-4 cursor-pointer  bg-white text-black px-6 py-2 rounded-lg font-semibold">
                Shop Now
              </button>
            </div>
          </div>

          {/* Kids */}
          <div className="relative group overflow-hidden rounded-2xl h-[400px] cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800"
              alt="Kids Fashion"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <h3 className="text-white text-4xl font-bold">Kids</h3>
              <button className=" cursor-pointer mt-4 bg-white text-black px-6 py-2 rounded-lg font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-black font-bold text-center mb-12">
            Featured Products
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>

                  <p className="text-orange-500 font-bold mt-2">
                    {product.price}
                  </p>

                  <button className="cursor-pointer mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="bg-orange-500 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Summer Sale 50% OFF</h2>
        <p className="text-lg mb-6">Limited time offer on selected items.</p>

        <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold">
          Explore Deals
        </button>
      </section>

      {/* Newsletter */}
      <section className="py-16 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>

        <p className="text-gray-600 mb-6">
          Get updates on new arrivals and exclusive offers.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border rounded-lg px-4 py-3"
          />

          <button className="bg-black text-white px-8 py-3 rounded-lg">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-3">FashionHub</h3>

          <p className="text-gray-400">
            © 2026 FashionHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
