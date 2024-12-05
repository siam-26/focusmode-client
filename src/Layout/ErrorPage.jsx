import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing for navigation

const ErrorPage = () => {
  const navigate = useNavigate(); // Hook for navigating back to the home page

  // Function to navigate back to the home page
  const goBackHome = () => {
    navigate('/'); // Redirects to the home page ("/")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="mb-6 text-lg">We're working on something great! Stay tuned.</p>
        <button 
          onClick={goBackHome}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
