import React, { useState, useEffect } from 'react';

export const SuccessMessage = ({ message = "Form successfully updated!", duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in-down">
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md flex items-center">
        <div className="flex-shrink-0 w-6 h-6 mr-2">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

