import React from 'react';

const GroceryStore = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-24">
      <h1 className="text-4xl font-bold mb-6">🛒 Full-Stack Grocery Store Web App</h1>

      {/* Project Description */}
      <p className="mb-4 text-lg">
        This project is a **full-stack grocery store system** that enables users to browse, add items to cart, and complete purchases.
        The application also includes a **secure admin dashboard** for managing products, orders, and customers.
      </p>

      {/* Key Features Section */}
      <h2 className="text-2xl font-bold mt-8 mb-4">🔖 Key Features</h2>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>🔐 **User authentication (login, registration, role-based access)**</li>
        <li>📦 **Admin control panel** to manage products, customers, and orders</li>
        <li>💳 **Secure checkout & transaction processing**</li>
        <li>📋 **Dynamic product catalog with search & filter functionality**</li>
      </ul>

      {/* Technologies Used */}
      <h2 className="text-2xl font-bold mt-8 mb-4">🛠️ Technologies Used</h2>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>⚛️ **React.js** (Frontend UI)</li>
        <li>🗄️ **SQL Database** (Storing users, products, orders)</li>
        <li>🚀 **Node.js & Express.js** (Backend API)</li>
        <li>🎨 **HTML, CSS, JavaScript**</li>
      </ul>

      {/* Challenges & Learning */}
      <h2 className="text-2xl font-bold mt-8 mb-4">🚧 Challenges & Learning</h2>
      <p className="text-lg">
        This project provided deep insights into **backend security, database normalization, and efficient data retrieval**.
        **Key challenges** I tackled:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>⚡ **Optimizing SQL queries** for better performance.</li>
        <li>🛡️ **Ensuring secure user authentication and transactions**.</li>
        <li>🔄 **Managing real-time data updates between frontend and backend.**</li>
      </ul>

      {/* Database Schema & ERD Section */}
      <h2 className="text-2xl font-bold mt-8 mb-4">📊 Database Design & Architecture</h2>
      <p className="text-lg mb-4">
        The database schema was carefully designed to ensure **data integrity, normalization**, and **efficient retrieval**.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <img
            key={index}
            src={`/database${index + 1}.png`}
            alt={`Database Design ${index + 1}`}
            className="rounded-lg shadow-md w-full h-auto object-contain border"
          />
        ))}
      </div>

      {/* Download Section */}
      <h2 className="text-2xl font-bold mt-12 mb-4">📂 Download Database Files</h2>
      <p className="text-lg mb-4">You can download all database design images in a ZIP file for reference.</p>
      <a
        href="/database_assets.zip"
        download="database_assets.zip"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition inline-block"
      >
        📥 Download Database Files
      </a>
    </div>
  );
};

export default GroceryStore;
