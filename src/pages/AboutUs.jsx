import React from 'react';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, Clock, CheckCircle, Award, Users, Building2 } from 'lucide-react';
import Layout from '../components/Layout';


const AboutUs = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="relative bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Omilga</h1>
            <p className="text-xl">Sri Lanka's Trusted Tyre Solutions Provider Since 1995</p>
          </div>
        </div>
        {/* Our Story Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 1995 in the heart of Colombo, Omilga has grown from a small family-owned shop to one of Sri Lanka's leading tyre retailers. For over 25 years, we've been serving our community with quality products and exceptional service.
                </p>
                <p className="text-gray-700 mb-4">
                  Our journey began with a simple mission: to provide Sri Lankan drivers with access to world-class tyres and professional service at fair prices. Today, we're proud to serve customers across the island, from Jaffna to Galle.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-blue-900 mb-2" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">50,000+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Building2 className="w-8 h-8 text-blue-900 mb-2" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">15+</h3>
                  <p className="text-gray-600">Locations</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Award className="w-8 h-8 text-blue-900 mb-2" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">25+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-blue-900 mb-2" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">100%</h3>
                  <p className="text-gray-600">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose Us Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose Omilga</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Island-Wide Service</h3>
                <p className="text-gray-600">With 15+ locations across Sri Lanka, we're never far from you. Find us in major cities including Colombo, Kandy, Galle, and Jaffna.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Expert Team</h3>
                <p className="text-gray-600">Our certified technicians undergo regular training to stay updated with the latest tyre technology and service techniques.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Premium Brands</h3>
                <p className="text-gray-600">We partner with leading global tyre manufacturers to offer you the best selection of products for all vehicle types.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;