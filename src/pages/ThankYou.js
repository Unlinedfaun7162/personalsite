import React from "react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 text-center">
      <div>
        <h1 className="text-4xl font-bold text-green-800">🎉 Thank You!</h1>
        <p className="mt-4 text-lg text-gray-700">Your message was submitted successfully.</p>
      </div>
    </div>
  );
};

export default ThankYou;