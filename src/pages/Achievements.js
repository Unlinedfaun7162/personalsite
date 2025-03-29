import React from "react";
import { Link } from "react-router-dom";
import achievementImage from "../assets/image2.png";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Section with Image */}
      <div className="flex flex-col items-center justify-center bg-black text-white py-16 px-4">
        <img
          src={achievementImage}
          alt="Achievements"
          className="rounded-full w-64 h-64 object-cover mb-6"
        />
        <h1 className="text-4xl font-bold"></h1>
      </div>

      {/* Achievement Grid Layout */}
      <div className="py-12 px-4 md:px-12">
        <h2 className="text-3xl font-semibold text-center mb-6">🏆 Notable Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 8-bit Computer Project */}
          <Link to="/achievements/8-bit-computer">
            <div className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition hover:bg-gray-100 cursor-pointer">
              <h3 className="font-bold">🔧 8-bit Functional Computer</h3>
              <p className="text-gray-600">Built and optimized a functional 8-bit computer in Multisim.</p>
              <p className="text-sm text-blue-500 mt-2">Click to view details</p>
            </div>
          </Link>

          {/* Grocery Store App */}
          <Link to="/achievements/grocery-store-app">
            <div className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition hover:bg-gray-100 cursor-pointer">
              <h3 className="font-bold">🛒 Grocery Store Web App</h3>
              <p className="text-gray-600">Developed a full-stack grocery store system with admin control.</p>
              <p className="text-sm text-blue-500 mt-2">Click to view details</p>
            </div>
          </Link>

          {/* Internship */}
          <Link to="/achievements/internship">
            <div className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition hover:bg-gray-100 cursor-pointer">
              <h3 className="font-bold">🌐 Internship at Web Surfing Studios</h3>
              <p className="text-gray-600">Contributed to multiple non-monetized projects using React.</p>
              <p className="text-sm text-blue-500 mt-2">Click to view details</p>
            </div>
          </Link>

          {/* Pizza Store */}
          <Link to="/achievements/pizza-store">
            <div className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition hover:bg-gray-100 cursor-pointer">
              <h3 className="font-bold">🚀 Pizza Store Web Application</h3>
              <p className="text-gray-600">Built a secure React-based login and authentication system.</p>
              <p className="text-sm text-blue-500 mt-2">Click to view details</p>
            </div>
          </Link>

          {/* Academic Excellence */}
          <Link to="/achievements/academic-excellence">
            <div className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition hover:bg-gray-100 cursor-pointer">
              <h3 className="font-bold">📚 Strong Academic Performance</h3>
              <p className="text-gray-600">Maintained a GPA of 3.72, excelling in computer science coursework.</p>
              <p className="text-sm text-blue-500 mt-2">Click to view details</p>
            </div>
          </Link>
        </div>

        {/* Resume Download Button (Centered Below Grid) */}
        <div className="mt-10 flex justify-center">
          <a
            href={`${process.env.PUBLIC_URL}/resume.docx`}
            download="Biswash_Lamsal_Resume.docx"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition"
          >
            📥 Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
