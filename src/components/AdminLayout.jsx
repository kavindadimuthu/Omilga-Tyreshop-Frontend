import React, { useState, useRef } from "react";
import { Package, LogOut, PhoneCall, Mail, Facebook, Twitter, Instagram, User, Settings, ShoppingBag, Heart } from 'lucide-react';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const { user, logout, isAdmin } = useAuth(); // Access logout function from AuthContext
  const navigate = useNavigate(); // Initialize navigate from React Router
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Placeholder for user profile image
  const profileImageUrl = "/images.png"; // Replace with dynamic URL if needed

  const ProfileDropdown = () => (
    <div
      ref={dropdownRef}
      className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ease-in-out ${
        dropdownOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-medium text-gray-900">
          {user?.username || "User Name"}
        </p>
        <p className="text-sm text-gray-500">
          {user?.email || "user@example.com"}
        </p>
      </div>

      <div className="py-1">
        <Link
          to="/profile"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <User className="w-4 h-4 mr-3 text-gray-500" />
          Profile
        </Link>
      </div>

      {isAdmin && (
        <div className="py-1 border-t border-gray-100">
          <Link
            to="/admin/dashboard"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Settings className="w-4 h-4 mr-3 text-gray-500" />
            Admin Dashboard
          </Link>
        </div>
      )}

      <div className="py-1 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
        >
          <LogOut className="w-4 h-4 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Navigation */}
      <nav className="bg-blue-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Omilga</div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-blue-700">
                Home
              </Link>
              <Link to="/products" className="text-white hover:text-blue-700">
                Products
              </Link>
              <Link to="/about" className="text-white hover:text-blue-700">
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-blue-700">
                Contact
              </Link>
              <Link
                to="/admin/dashboard"
                className="text-white hover:text-blue-700"
              >
                Dashboard
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="focus:outline-none"
                  >
                    <img
                      src={profileImageUrl}
                      alt="Profile"
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                        dropdownOpen ? "border-blue-600" : "border-blue-900"
                      }`}
                    />
                  </button>
                  <ProfileDropdown />
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed left-0 top-0 w-64 h-full bg-blue-900 text-white p-4 flex flex-col justify-between">
        <div className="mt-20">
          {/* <div className="text-2xl font-bold mb-8">Omilga Admin</div> */}
          <nav className="space-y-2">
            <Link
              to="#"
              className="flex items-center space-x-2 bg-blue-800 text-white p-3 rounded-lg"
            >
              <Package className="w-5 h-5" />
              <span>Products</span>
            </Link>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg mt-4"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      <div className="ml-64 p-8">{children}</div>
    </div>
  );
};

export default AdminLayout;
