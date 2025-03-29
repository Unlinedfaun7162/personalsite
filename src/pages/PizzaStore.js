import React from 'react';

const PizzaStore = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-24">
      <h1 className="text-4xl font-bold mb-6">🍕 Pizza Store Web Application</h1>

      <p className="mb-4 text-lg">
        Built a secure **React-based login and authentication system** for a **pizza store project**.
        This application ensures **customer data security**, **role-based authentication**, and **seamless user experience**.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">🔖 Key Features</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>**User Authentication** - Secure login & signup functionality</li>
        <li>**Role-Based Access** - Admin & customer dashboard</li>
        <li>**Product Ordering System** - Customers can add pizzas to cart</li>
        <li>**Database Integration** - Orders are stored & managed securely</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">🛠️ Technologies Used</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>React (Frontend)</li>
        <li>Node.js & Express (Backend)</li>
        <li>SQL (Database Management)</li>
        <li>HTML, CSS, JavaScript</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">🚧 Challenges & Learning</h2>
      <p className="mb-4">
        Implemented **secure user authentication**, improved database efficiency, and enhanced frontend responsiveness.
      </p>

      {/* Display the login page image */}
      <h2 className="text-2xl font-bold mt-8 mb-4">📸 Login Page Preview</h2>
      <div className="flex justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/pizza1.png`}
          alt="Pizza Store Login Page"
          className="rounded-lg shadow-md w-3/5 md:w-2/5"
        />
      </div>

    </div>
  );
};

export default PizzaStore;
