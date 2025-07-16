import React from "react";

const Properties = () => {
  return (
    <section id="properties" className="px-8 py-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-12">
        Featured Properties
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Property Card 1 */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-orange-400 hover:scale-[1.02] transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80"
            alt="Lagoon Villa"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 space-y-2">
            <h3 className="text-xl font-bold text-white">
              Lagoon Villa - El Gouna
            </h3>
            <p className="text-gray-400 text-sm">
              3 Bedrooms · 2 Bathrooms · Private Pool
            </p>
            <p className="text-orange-400 font-semibold">EGP 7,500,000</p>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-md font-semibold transition">
              View Details
            </button>
          </div>
        </div>

        {/* Property Card 2 */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-orange-400 hover:scale-[1.02] transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
            alt="North Coast Chalet"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 space-y-2">
            <h3 className="text-xl font-bold text-white">
              Modern Chalet - North Coast
            </h3>
            <p className="text-gray-400 text-sm">
              2 Bedrooms · 1 Bathroom · Sea View
            </p>
            <p className="text-orange-400 font-semibold">EGP 5,200,000</p>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-md font-semibold transition">
              View Details
            </button>
          </div>
        </div>

        {/* Property Card 3 */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-orange-400 hover:scale-[1.02] transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
            alt="New Cairo Apartment"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 space-y-2">
            <h3 className="text-xl font-bold text-white">
              City Apartment - New Cairo
            </h3>
            <p className="text-gray-400 text-sm">
              1 Bedroom · 1 Bathroom · Balcony
            </p>
            <p className="text-orange-400 font-semibold">EGP 3,000,000</p>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-md font-semibold transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
