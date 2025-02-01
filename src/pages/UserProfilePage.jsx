import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Shield, // Changed from MapPin to Shield for role
  Edit2,
  Heart,
  Clock,
  ShoppingBag,
  Camera,
  Save,
  Trash2,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const UserProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const { user } = useAuth();
  const navigate = useNavigate();

  // Form state for editing
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update logic here
    console.log("Updated data:", formData);
    setIsEditing(false);
  };

  // Format date for member since
  const formatMemberSince = () => {
    // Extract date from _id (first 8 characters of ObjectId represent timestamp)
    const timestamp = parseInt(user?._id.substring(0, 8), 16) * 1000;
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  // Rest of the watchlist code remains the same
  const watchlistItems = [
    {
      id: 1,
      name: "Michelin Pilot Sport 4",
      size: "205/55R16",
      price: "LKR 45,000",
      image: "/api/placeholder/100/100",
      addedDate: "2025-01-15",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="/images.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-blue-900 text-white p-2 rounded-full">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-bold mb-2">{user?.username}</h1>
                <p className="text-gray-600">
                  Member since {formatMemberSince()}
                </p>
              </div>
              {!isEditing && (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                  >
                    <Edit2 className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-sm mb-6">
            <div className="flex">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex-1 px-4 py-3 text-center font-medium border-b-2 ${
                  activeTab === "profile"
                    ? "border-blue-900 text-blue-900"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Personal Information
              </button>
              <button
                onClick={() => setActiveTab("watchlist")}
                className={`flex-1 px-4 py-3 text-center font-medium border-b-2 ${
                  activeTab === "watchlist"
                    ? "border-blue-900 text-blue-900"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Watchlist
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            {activeTab === "profile" && (
              <div>
                {isEditing ? (
                  // Edit Profile Form
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Role
                        </label>
                        <input
                          type="text"
                          value={user?.role}
                          disabled
                          className="w-full px-4 py-2 rounded-lg border bg-gray-50"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 flex items-center space-x-2"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Changes</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  // Profile Information Display
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-blue-900" />
                        <div>
                          <p className="text-sm text-gray-500">Username</p>
                          <p className="font-medium">{user?.username}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-blue-900" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{user?.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-blue-900" />
                        <div>
                          <p className="text-sm text-gray-500">Mobile Number</p>
                          <p className="font-medium">{user?.mobileNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-blue-900" />
                        <div>
                          <p className="text-sm text-gray-500">Role</p>
                          <p className="font-medium capitalize">{user?.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {activeTab === "watchlist" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {watchlistItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-1">
                            {item.size}
                          </p>
                          <p className="text-blue-900 font-bold mb-2">
                            {item.price}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              Added {item.addedDate}
                            </span>
                            <button className="text-red-500 hover:text-red-600">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {watchlistItems.length === 0 && (
                  <div className="text-center py-12">
                    <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Your watchlist is empty
                    </h3>
                    <p className="text-gray-600">
                      Start adding items to your watchlist to track their prices
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfilePage;
