// src/components/Footer.js
import React from 'react';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight, Search } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Omilga</h3>
          <p className="text-blue-200">Your trusted partner for quality tyres and professional service.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="text-blue-200 hover:text-white">About Us</a></li>
            <li><a href="/services" className="text-blue-200 hover:text-white">Services</a></li>
            <li><a href="/products" className="text-blue-200 hover:text-white">Products</a></li>
            <li><a href="/contact" className="text-blue-200 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="/services#tyre-fitting" className="text-blue-200 hover:text-white">Tyre Fitting</a></li>
            <li><a href="/services#wheel-balancing" className="text-blue-200 hover:text-white">Wheel Balancing</a></li>
            <li><a href="/services#wheel-alignment" className="text-blue-200 hover:text-white">Wheel Alignment</a></li>
            <li><a href="/services#puncture-repair" className="text-blue-200 hover:text-white">Puncture Repair</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <div className="space-y-2">
            <p className="flex items-center text-blue-200">
              <MapPin className="w-4 h-4 mr-2" /> 123 Main Street, Rathnapura, SriLanka
            </p>
            <p className="flex items-center text-blue-200">
              <PhoneCall className="w-4 h-4 mr-2" /> +1 234 567 8900
            </p>
            <p className="flex items-center text-blue-200">
              <Mail className="w-4 h-4 mr-2" /> contact@omilga.com
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
        <p>&copy; 2025 Omilga. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
