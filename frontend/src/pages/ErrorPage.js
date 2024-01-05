import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-gray-600 mb-8">
          Oops! It seems like you need to log in to access this feature.
        </p>
        <a
          href="/signin"  
          className="text-white text-lg font-medium bg-purple-lighter hover:bg-purple-lighter-hover py-2 px-8 rounded-lg cursor-pointer transition duration-300"
        >
          Log In
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
