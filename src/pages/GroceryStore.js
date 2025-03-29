import React from 'react';

const GroceryStore = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-24">
      <h1 className="text-4xl font-bold mb-6">🛒 Full-Stack Grocery Store Web App</h1>

      {/* Project Description */}
      <p className="mb-4 text-lg">
        This project is a <strong>full-stack grocery store system</strong> that enables users to browse, add items to cart, and complete purchases.
        The application also includes a <strong>secure admin dashboard</strong> for managing products, orders, and customers.
      </p>

      {/* Key Features Section */}
      <h2 className="text-2xl font-bold mt-8 mb-4">🔖 Key Features</h2>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>🔐 <strong>User authentication (login, registration, role-based access)</strong></li>
        <li>📦 <strong>Admin control panel</strong> to manage products, customers, and orders</li>
        <li>💳 <strong>Secure checkout & transaction processing</strong></li>
        <li>📋 <strong>Dynamic product catalog with search & filter functionality</strong></li>
      </ul>

      {/* Technologies Used */}
      <h2 className="text-2xl font-bold mt-8 mb-4">🛠️ Technologies Used</h2>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>⚛️ <strong>React.js</strong> (Frontend UI)</li>
        <li>🗄️ <strong>SQL Database</strong> (Storing users, products, orders)</li>
        <li>🚀 <strong>Node.js & Express.js</strong> (Backend API)</li>
        <li>🎨 <strong>HTML, CSS, JavaScript</strong></li>
      </ul>

      {/* Challenges & Learning */}
      <h2 className="text-2xl font-bold mt-8 mb-4">🚧 Challenges & Learning</h2>
      <p className="text-lg">
        This project provided deep insights into <strong>backend security, database normalization, and efficient data retrieval</strong>.
        <br />
        <span className="font-semibold">Key challenges:</span>
      </p>
      <ul className="list-disc pl-5 space-y-2 mt-3 text-lg">
        <li>⚡ <strong>Optimizing SQL queries</strong> for better performance.</li>
        <li>🛡️ <strong>Ensuring secure user authentication and transactions</strong>.</li>
        <li>🔄 <strong>Managing real-time data updates between frontend and backend.</strong></li>
      </ul>

      {/* Database Schema & ERD Section */}
      <h2 className="text-2xl font-bold mt-8 mb-4">📊 Database Design & Architecture</h2>
      <p className="text-lg mb-4">
        The database schema was carefully designed to ensure <strong>data integrity, normalization</strong>, and <strong>efficient retrieval</strong>.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(8)].map((_, i) => (
          <img
            key={i}
            src={`${process.env.PUBLIC_URL}/Database${i + 1}.png`}
            alt={`Database Design ${i + 1}`}
            className="rounded-lg shadow-md w-full h-auto object-contain border"
          />
        ))}
      </div>

      {/* Download Section */}
      <h2 className="text-2xl font-bold mt-12 mb-4">📂 Download Database Files</h2>
      <p className="text-lg mb-4">You can download all database design images in a ZIP file for reference.</p>
      <a
        href={`${process.env.PUBLIC_URL}/database_assets.zip`}
        download="database_assets.zip"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition inline-block"
      >
        📥 Download Database Files
      </a>
    </div>
  );
};

export default GroceryStore;
