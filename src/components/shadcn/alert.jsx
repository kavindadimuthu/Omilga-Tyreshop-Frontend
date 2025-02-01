// src/components/ui/alert.jsx
import React from 'react';

export const Alert = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variants = {
    default: 'bg-blue-50 text-blue-900',
    destructive: 'bg-red-50 text-red-900',
  };

  return (
    <div className={`p-4 rounded-lg ${variants[variant]} ${className}`} role="alert">
      {children}
    </div>
  );
};

export const AlertTitle = ({ children }) => {
  return <h5 className="font-medium mb-1">{children}</h5>;
};

export const AlertDescription = ({ children }) => {
  return <div className="text-sm">{children}</div>;
};