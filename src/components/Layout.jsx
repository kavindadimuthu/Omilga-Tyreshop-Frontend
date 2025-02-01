// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is another component
import Footer from './Footer'; // Assuming Footer is another component

const Layout = ({ children }) => {
  return (
    <div>
        
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>{children}</main> {/* This will render page-specific content */}
      <Footer />
      </div>
    </div>
  );
};

export default Layout;
