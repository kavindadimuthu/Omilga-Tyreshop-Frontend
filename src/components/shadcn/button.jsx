// src/components/ui/button.jsx
import React from 'react';

export const Button = ({ 
  children, 
  variant = 'default', 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors";
  
  const variants = {
    default: "bg-blue-900 text-white hover:bg-blue-800",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

