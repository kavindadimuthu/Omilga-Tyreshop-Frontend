import React, { useState } from 'react';
// import { useParams } from "react-router-dom";
import { Search, Filter, X, Check, Star } from 'lucide-react';
import { Link } from "react-router-dom";
import Layout from '../components/Layout';
import useTyreProducts from "../hooks/useTyreProducts";
import useTyreProduct from "../hooks/useTyreProduct";

const ProductCatalog = () => {
  // const params = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    tyreWidth: "",
    profile: "",
    rimSize: "",
    tube: "",
    tyreBrand: "",
    vehicleCategory: "",
    limit: 4,  // Default page size
    page: 1,   // Start from page 1
  });
  // const { tyre, loading1, error2 } = useTyreProduct(params.id);

  // console.log(tyre);

  const { tyres, loading, error, totalPages } = useTyreProducts(filters);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 })); // Reset page on filter change
  };

  return (
      <Layout>
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Tyre Collection</h1>
          <p className="text-xl">Find the perfect tyres for your vehicle</p>
        </div>
      </div>

      {/* Search and Filter Bar */}
              <div className="sticky top-0 z-20 bg-white shadow-md">
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search tyres by brand..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => handleFilterChange("tyreBrand", e.target.value)}
                      />
                    </div>
                    <button
                      onClick={() => setIsFilterOpen(true)}
                      className="md:hidden bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                    >
                      <Filter className="w-5 h-5" /> Filters
                    </button>
                  </div>
                </div>
              </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`
            ${isFilterOpen ? 'fixed inset-0 z-50 bg-white' : 'hidden'} 
            md:relative md:block md:w-64 space-y-6
          `}>
            {/* Mobile Filter Header */}
            <div className="md:hidden flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 md:p-0">
              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Brand</h3>
                <div className="space-y-2">
                  {['Michelin', 'Bridgestone', 'Goodyear', 'Continental', 'Pirelli'].map(brand => (
                    <label key={brand} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Tyre Size</h3>
                <div className="space-y-2">
                  {['205/55R16', '215/55R17', '225/45R18', '235/40R19'].map(size => (
                    <label key={size} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Type</h3>
                <div className="space-y-2">
                  {['Performance', 'All-Season', 'Summer', 'Winter'].map(type => (
                    <label key={type} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Price Range</h3>
                <div className="space-y-4">
                  <input 
                    type="range" 
                    min="0" 
                    max="100000" 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>LKR 0</span>
                    <span>LKR 100,000</span>
                  </div>
                </div>
              </div>

              {/* Mobile Apply Filters Button */}
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="md:hidden w-full bg-blue-900 text-white py-3 rounded-lg mt-4"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/*Product Card */}
              {tyres.map((tyre) => (
                <div key={tyre._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={tyre.images || "/api/placeholder/300/300"} 
                    alt={tyre.tyreBrand} 
                    className="w-48 object-cover m-auto" 
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-900 font-medium">{tyre.tyreBrand}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">4.5</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tyre.vehicleCategory}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {tyre.tyreWidth} / {tyre.profile} / {tyre.rimSize}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-blue-900">LKR {tyre.price}</span>
                      <Link to={`/product/${tyre._id}`} className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition-colors">
                        View Specs
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button
                disabled={filters.page === 1}
                onClick={() => setFilters((prev) => ({ ...prev, page: prev.page - 1 }))}
                className="px-3 py-1 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`px-3 py-1 rounded-lg ${
                    filters.page === i + 1 ? "bg-blue-900 text-white" : "border hover:bg-gray-50"
                  }`}
                  onClick={() => setFilters((prev) => ({ ...prev, page: i + 1 }))}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={filters.page === totalPages}
                onClick={() => setFilters((prev) => ({ ...prev, page: prev.page + 1 }))}
                className="px-3 py-1 rounded-lg border hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </nav>
          </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};
  export default ProductCatalog;






