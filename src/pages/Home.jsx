import React, { useState, useEffect, useMemo  } from 'react';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import useTyreProducts from '../hooks/useTyreProducts';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

import sliderimg1 from '/SliderImages/img1.jpg'
import sliderimg2 from '/SliderImages/img2.jpg'
import sliderimg3 from '/SliderImages/img3.jpg'
import sliderimg4 from '/SliderImages/img4.jpg'
import { use } from 'react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    {
      image: sliderimg1,
      title: "Your Trusted Partner for Quality Tyres",
      description: "Find the perfect tyres for your vehicle with our guidance and competitive prices."
    },
    {
      image: sliderimg2,
      title: "Professional Tyre Services for Quality Tyres",
      description: "Expert fitting and maintenance services for all vehicle types with quality."
    },
    {
      image: sliderimg3,
      title: "Premium Brands Available for Quality Tyres",
      description: "Choose from top tyre manufacturers and great choices at competitive prices."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.1), rgba(30, 58, 138, 0.6)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{slide.title}</h1>
              <p className="text-lg mb-8">{slide.description}</p>
              <div className="flex space-x-4">
              <button
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                onClick={() => navigate('/products')}
              >
                Shop Now
              </button>
                <button 
                  className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                  onClick={() => navigate('/contact')}
                >
                  Book Service
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};


const ProductCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const tyreFilters = useMemo(() => ({
    limit: 6,
    page: 1,
  }), []);

  const { tyres, loading, error } = useTyreProducts(tyreFilters);

  console.log(tyres)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (tyres.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (tyres.length - 2)) % (tyres.length - 2));
  };

  if (loading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-blue-900">Loading tyres...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-red-600">Failed to load tyres. Please try again later.</div>
        </div>
      </div>
    );
  }

  if (!tyres.length) {
    return null;
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Featured Tyres</h2>
        <div className="relative">
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors"
              disabled={tyres.length <= 3}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="overflow-hidden mx-8">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 25}%)`,
                }}
              >
                {tyres.map((tyre) => (
                  <div key={tyre._id} className="min-w-[25%] px-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <img
                        src={tyre.images[0]}
                        alt={`${tyre.tyreBrand} ${tyre.tyreWidth}/${tyre.profile}R${tyre.rimSize}`}
                        className="w-full h-48 object-contain rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-semibold text-blue-900">
                        {tyre.tyreBrand} {tyre.tyreWidth}/{tyre.profile}R{tyre.rimSize}
                      </h3>
                      <p className="text-gray-600">{tyre.vehicleCategory}</p>
                      {tyre.oldPrice && tyre.oldPrice > tyre.price && (
                        <p className="text-gray-500 line-through">
                          ${tyre.oldPrice.toFixed(2)}
                        </p>
                      )}
                      <p className="text-lg font-bold text-blue-900 mt-2">
                        ${tyre.price.toFixed(2)}
                      </p>
                      {/* <div className="mt-2 text-sm text-gray-600">
                        {tyre.tube ? "Tube Type" : "Tubeless"}
                      </div> */}
                      <button 
                        className="mt-4 w-full bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                        onClick={() => navigate(`/product/${tyre._id}`)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors"
              disabled={tyres.length <= 3}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <Layout>
      <HeroCarousel />
      
      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-900 text-xl font-semibold mb-4">Wide Selection</div>
              <p className="text-gray-600">Choose from our extensive range of tyres from leading manufacturers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-900 text-xl font-semibold mb-4">Expert Fitting</div>
              <p className="text-gray-600">Professional installation by our certified technicians.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-900 text-xl font-semibold mb-4">Best Price Guarantee</div>
              <p className="text-gray-600">We offer competitive prices and price matching on all our products.</p>
            </div>
          </div>
        </div>
      </div>

      <ProductCarousel />
  
      {/* Search Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Find Your Perfect Tyres</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <select className="flex-1 p-3 border rounded-lg">
                <option>Select Vehicle Make</option>
              </select>
              <select className="flex-1 p-3 border rounded-lg">
                <option>Select Vehicle Model</option>
              </select>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center">
                Search <Search className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;