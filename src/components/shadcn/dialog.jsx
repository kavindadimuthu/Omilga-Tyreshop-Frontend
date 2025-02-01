// src/components/ui/dialog.jsx
import React from 'react';

export const Dialog = ({ open, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" /> {/* Backdrop */}
      <div className="relative z-50 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export const DialogHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export const DialogTitle = ({ children }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>;
};

export const DialogDescription = ({ children }) => {
  return <p className="mt-2 text-gray-600">{children}</p>;
};

export const DialogFooter = ({ children }) => {
  return <div className="mt-6 flex justify-end space-x-2">{children}</div>;
};

