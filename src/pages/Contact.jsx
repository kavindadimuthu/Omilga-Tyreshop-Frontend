import React from 'react';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, Clock, CheckCircle, Award, Users, Building2 } from 'lucide-react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="relative bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">We're Here to Help</p>
          </div>
        </div>
        {/* Contact Information */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Main Showroom</h3>
                      <p className="text-gray-600">123 Main Street, Rathnapura, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <PhoneCall className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">+94 47 234 5678</p>
                      <p className="text-gray-600">Hotline: 1234 (24/7)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">info@omilga.lk</p>
                      <p className="text-gray-600">support@omilga.lk</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 8:30 AM - 6:30 PM</p>
                      <p className="text-gray-600">Sunday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea className="w-full p-3 border rounded-lg h-32"></textarea>
                  </div>
                  <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Rathnapura Branch</h3>
                <p className="text-gray-600">123 Main Street, Rathnapura</p>
                <p className="text-gray-600">Tel: +94 47 234 5678</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Colombo Branch</h3>
                <p className="text-gray-600">123 Galle Road, Colombo 03</p>
                <p className="text-gray-600">Tel: +94 11 234 5678</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Kandy Branch</h3>
                <p className="text-gray-600">45 Peradeniya Road, Kandy</p>
                <p className="text-gray-600">Tel: +94 81 234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default Contact;
