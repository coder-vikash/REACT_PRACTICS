import React from "react";

export const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600"
          alt="Fashion Store"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              About FashionHub
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Bringing the latest fashion trends to your wardrobe with quality,
              style, and affordability.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
              alt="Our Story"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>

            <p className="text-gray-600 leading-8 mb-4">
              FashionHub started with a simple mission: make stylish,
              high-quality clothing accessible to everyone. Since our launch,
              we've been helping customers express themselves through fashion.
            </p>

            <p className="text-gray-600 leading-8">
              We carefully curate collections that combine comfort, quality, and
              modern trends to create a shopping experience you'll love.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-black mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-7">
                To provide premium-quality fashion products that inspire
                confidence and self-expression.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-7">
                To become a leading global fashion destination known for style,
                innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold text-orange-500">50K+</h3>
              <p className="mt-2 text-gray-600">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-black text-orange-500">
                500+
              </h3>
              <p className="mt-2 text-gray-600">Products</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-black text-orange-500">
                100+
              </h3>
              <p className="mt-2 text-gray-600">Brands</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-orange-500">24/7</h3>
              <p className="mt-2 text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-black font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl text-black font-semibold mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and secure delivery to your doorstep.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl  text-blackfont-semibold mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Carefully selected products with top quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-2xl text-black font-semibold mb-3">
                Secure Payments
              </h3>
              <p className="text-gray-600">
                Safe and encrypted payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-black font-bold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["John Doe", "Sarah Smith", "Michael Lee"].map((member) => (
              <div
                key={member}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43d?w=500"
                  alt={member}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-2xl text-black font-semibold">
                    {member}
                  </h3>
                  <p className="text-gray-500 mt-2">Fashion Expert</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20 text-center text-white">
        <h2 className="text-4xl text-black md:text-5xl font-bold mb-4">
          Join Our Fashion Journey
        </h2>

        <p className="text-lg mb-8">
          Discover the latest trends and exclusive collections.
        </p>

        <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
          Shop Now
        </button>
      </section>
    </div>
  );
};
