// src/pages/Blog.js
import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-24">
      <h1 className="text-4xl font-bold mb-6 text-center">📝 Personal Blog</h1>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why I Started Coding</h2>
          <p className="text-gray-700">
            I’ve always loved building things with logic. From digital circuits to web apps, problem-solving excites me...
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Balancing College and Work</h2>
          <p className="text-gray-700">
            Managing full course loads while working part-time has taught me valuable life and time management skills...
          </p>
        </div>

        {/* Add more posts here later */}
      </div>
    </div>
  );
};

export default Blog;
