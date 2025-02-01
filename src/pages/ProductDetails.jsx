import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Share, Truck, Shield, Package, Star, CheckCircle } from "lucide-react";
import Layout from "../components/Layout";
import useTyreProduct from "../hooks/useTyreProduct";

const ProductDetails = () => {
  const { id: tyreId } = useParams();
  const { tyre, loading, error } = useTyreProduct(tyreId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center text-lg">Loading product details...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center text-red-500">{error}</div>
      </Layout>
    );
  }

  if (!tyre) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">Product not found.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Product Overview Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={tyre.images[selectedImage]}
                    alt={tyre.tyreBrand}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-4">
                  {tyre.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? "border-blue-900" : "border-transparent"
                      }`}
                    >
                      <img src={img} alt={`Tyre ${index}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {tyre.tyreBrand} {tyre.tyreWidth}/{tyre.rimSize}-{tyre.profile}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">(128 reviews)</span>
                    </div>
                    <span className="text-sm text-green-600 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" /> In Stock
                    </span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-900">
                  LKR {tyre.price}
                  <span className="text-sm text-gray-500 font-normal ml-2">per tyre</span>
                </div>

                {/* Quantity Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 h-10 border border-gray-300 rounded-lg text-center"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors">
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setIsInWatchlist(!isInWatchlist)}
                    className={`p-3 rounded-lg border ${
                      isInWatchlist ? "bg-red-50 border-red-200" : "border-gray-300"
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isInWatchlist ? "text-red-500 fill-current" : ""}`} />
                  </button>
                  <button className="p-3 rounded-lg border border-gray-300">
                    <Share className="w-6 h-6" />
                  </button>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Truck className="w-5 h-5 text-blue-900" />
                    <span className="text-sm">Free Island-wide Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-blue-900" />
                    <span className="text-sm">2 Year Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="w-5 h-5 text-blue-900" />
                    <span className="text-sm">Genuine Product</span>
                  </div>
                </div>
                <div className="text-sm">{tyre.description}</div>
              </div>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
            <table className="w-full">
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 text-gray-600">Tyre Width</td>
                  <td className="py-2 font-medium">{tyre.tyreWidth}</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">Profile</td>
                  <td className="py-2 font-medium">{tyre.profile}</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">Rim Size</td>
                  <td className="py-2 font-medium">{tyre.rimSize}</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">Vehicle Category</td>
                  <td className="py-2 font-medium">{tyre.vehicleCategory}</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">Type</td>
                  <td className="py-2 font-medium">{tyre.tube ? "Tubed" : "Tubeless"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
