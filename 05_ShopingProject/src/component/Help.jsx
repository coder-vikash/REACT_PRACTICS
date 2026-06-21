export const Help = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-black text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Help & Support</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          We’re here to help you with orders, returns, payments, and anything
          related to FashionHub.
        </p>
      </section>

      {/* Help Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-black mb-3">🛒 Orders</h2>
          <p className="text-gray-600">
            Track your orders, update details, or cancel purchases easily from
            your account dashboard.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-black mb-3">
            ↩️ Returns & Refunds
          </h2>
          <p className="text-gray-600">
            Easy 7-day return policy. Get quick refunds after product
            verification.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl text-black font-bold mb-3">💳 Payments</h2>
          <p className="text-gray-600">
            Secure payment options including UPI, cards, net banking, and
            wallets.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl text-black font-bold mb-3">🚚 Delivery</h2>
          <p className="text-gray-600">
            Fast delivery across India with real-time tracking updates.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl text-black font-bold mb-3">
            👕 Product Info
          </h2>
          <p className="text-gray-600">
            Size guides, material details, and styling tips available for every
            product.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl text-black font-bold mb-3">
            📞 Contact Support
          </h2>
          <p className="text-gray-600">
            Still need help? Contact our support team anytime at
            support@fashionhub.com
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl text-black font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold text-black text-lg">
                How can I track my order?
              </h3>
              <p className="text-gray-600 mt-2">
                Go to “My Orders” section and click on Track Order to see live
                updates.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <h3 className="font-semibold text-black text-lg">
                What is return policy?
              </h3>
              <p className="text-gray-600 mt-2">
                You can return products within 7 days of delivery if unused.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <h3 className="font-semibold text-black text-lg">
                How long does delivery take?
              </h3>
              <p className="text-gray-600 mt-2">
                Usually 3–7 working days depending on your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-orange-500 text-white py-16 text-center px-4">
        <h2 className="text-4xl text-black font-bold mb-3">Still Need Help?</h2>
        <p className="mb-6">
          Our support team is available 24/7 to assist you.
        </p>

        <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          Contact Support
        </button>
      </section>
    </div>
  );
};
