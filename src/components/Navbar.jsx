import React, { useState, useRef, useEffect } from 'react';
import { PhoneCall, Mail, Facebook, Twitter, Instagram, User, Settings, LogOut, ShoppingBag, Heart } from 'lucide-react';
import { useAuth } from "../contexts/AuthContext.jsx";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  console.log(user);
  
  // Placeholder for user profile image
  const profileImageUrl = "/images.png"; // Replace with dynamic URL if needed

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const ProfileDropdown = () => (
    <div 
      ref={dropdownRef}
      className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ease-in-out ${
        dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-medium text-gray-900">{user?.username || 'User Name'}</p>
        <p className="text-sm text-gray-500">{user?.email || 'user@example.com'}</p>
      </div>
      
      <div className="py-1">
        <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <User className="w-4 h-4 mr-3 text-gray-500" />
          Profile
        </Link>
        {!isAdmin && (
          <Link to="/profile#watchlist" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Heart className="w-4 h-4 mr-3 text-gray-500" />
            Watchlist
          </Link>
        )}
      </div>

      {isAdmin && (
        <div className="py-1 border-t border-gray-100">
          <Link to="/admin/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
    <>
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><PhoneCall className="w-4 h-4 mr-2" /> +1 234 567 8900</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> contact@omilga.com</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-300" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-300" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-blue-300" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-900">Omilga</div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-blue-900 hover:text-blue-700">Home</Link>
              <Link to="/products" className="text-blue-900 hover:text-blue-700">Products</Link>
              <Link to="/services" className="text-blue-900 hover:text-blue-700">Services</Link>
              <Link to="/about" className="text-blue-900 hover:text-blue-700">About</Link>
              <Link to="/contact" className="text-blue-900 hover:text-blue-700">Contact</Link>
              {isAdmin && <Link to="/admin/dashboard" className="text-blue-900 hover:text-blue-700">Dashboard</Link>}
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
                        dropdownOpen ? 'border-blue-600' : 'border-blue-900'
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
    </>
  );
};

export default Navbar;