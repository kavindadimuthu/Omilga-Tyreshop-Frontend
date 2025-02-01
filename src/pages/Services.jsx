import React, { useEffect } from 'react';
import { Wrench, RotateCw, Move } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const ServiceCard = ({ icon: Icon, title, description, features, id }) => {
  const navigate = useNavigate();

  return (
      <div id={id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow scroll-mt-24">
          <div className="flex items-center mb-6">
              <div className="bg-blue-900 p-3 rounded-full">
                  <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 ml-4">{title}</h3>
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3">
              {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                      {feature}
                  </li>
              ))}
          </ul>
          <button 
              className="mt-6 w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              onClick={() => navigate('/contact')}
          >
              Book Service
          </button>
      </div>
  );
};

const ServicesPage = () => {
    useEffect(() => {
        // Handle hash navigation on page load
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }, []);

    const services = [
        {
          id: 'tyre-fitting',
          icon: Wrench,
          title: "Tyre Fitting",
          description: "Professional tyre fitting service using state-of-the-art equipment to ensure perfect installation every time.",
          features: [
            "Expert fitting for all tyre sizes and types",
            "Proper torque specification application",
            "Free valve replacement with new tyres",
            "Environmentally responsible disposal of old tyres"
          ]
        },
        {
          id: 'wheel-balancing',
          icon: RotateCw,
          title: "Wheel Balancing",
          description: "Precise wheel balancing to eliminate vibrations and ensure even tyre wear for a smoother ride.",
          features: [
            "Computerized balancing equipment",
            "Both static and dynamic balancing",
            "Lead-free wheel weights available",
            "Extends tyre life and improves handling"
          ]
        },
        {
          id: 'wheel-alignment',
          icon: Move,
          title: "Wheel Alignment",
          description: "Complete wheel alignment service to optimize your vehicle's handling and tyre longevity.",
          features: [
            "3D alignment technology",
            "Camber, caster, and toe adjustment",
            "Suspension system inspection",
            "Steering wheel centering"
          ]
        },
        {
          id: 'puncture-repair',
          icon: Move,
          title: "Puncture Repair",
          description: "Quick and reliable puncture repair service to get you back on the road safely.",
          features: [
            "Professional patch-plug repair method",
            "Thorough tyre inspection",
            "Suitable for most tubeless tyres",
            "Lifetime warranty on repairs"
          ]
        }
      ];
    

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[400px] bg-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Tyre Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Expert care for your vehicle with state-of-the-art equipment and certified technicians
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Certified Technicians</h3>
              <p className="text-gray-600">Our team is fully certified and regularly trained on the latest techniques</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Quick Service</h3>
              <p className="text-gray-600">Most services completed within 60 minutes or less</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden fees</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 py-16" style={{ borderBottom: 'solid white' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience our professional service firsthand
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;