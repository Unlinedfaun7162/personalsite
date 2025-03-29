import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/image.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Section (Profile and Intro) */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white py-16 px-4 md:px-12">
        {/* Left side text */}
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">Biswash Lamsal</h1>
          <p className="text-xl">Computer Science & Development</p>

          {/* Call-to-Action Button */}
          <Link to="/achievements">
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition">
              View My Achievements
            </button>
          </Link>
        </div>

        {/* Right side profile image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
           src={`${process.env.PUBLIC_URL}/image.png`}
             alt="Profile"
             className="rounded-full w-64 h-64 object-cover"
          />
        </div>
      </div>

      {/* Motivational Quotes Section */}
      <div className="py-12 px-4 md:px-12">
        <h2 className="text-3xl font-semibold mb-6">HOW YOU DOING?</h2>

        <div className="space-y-4">
          <div className="border rounded p-4 shadow-sm bg-white">
            <h3 className="font-bold">01. Henry David Thoreau</h3>
            <p className="text-gray-600 italic">
              "Rather than love, than money, than faith, than fame, than fairness, give me truth."
            </p>
          </div>

          <div className="border rounded p-4 shadow-sm bg-white">
            <h3 className="font-bold">02. Steve Jobs</h3>
            <p className="text-gray-600 italic">
              "Innovation distinguishes between a leader and a follower."
            </p>
          </div>

          <div className="border rounded p-4 shadow-sm bg-white">
            <h3 className="font-bold">03. Nelson Mandela</h3>
            <p className="text-gray-600 italic">
              "It always seems impossible until it's done."
            </p>
          </div>
        </div>
      </div>

      {/* What I'm Working On Section */}
      <div className="py-12 px-4 md:px-12">
        <h2 className="text-3xl font-semibold mb-6">🚀 What I'm Working On</h2>

        <div className="space-y-4">
          <div className="border rounded p-4 shadow-sm bg-white">
            <h3 className="font-bold">🎯 MacOS Audio Manager</h3>
            <p className="text-gray-600">
              Developing a macOS application to control per-app volume with custom shortcuts.
            </p>
          </div>

          <div className="border rounded p-4 shadow-sm bg-white">
            <h3 className="font-bold">🛒 Grocery Store App Enhancements</h3>
            <p className="text-gray-600">
              Improving the UI and backend features for better admin control and product management.
            </p>
          </div>
        </div>
      </div>

      {/* Skills & Current Projects Section */}
      <div className="py-12 px-4 md:px-12 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-6">🎯 Skills & Technologies</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          <div className="border rounded-lg p-4 shadow-md bg-white">
            <h3 className="font-bold">💻 Programming</h3>
            <p className="text-gray-600">Java, C#, C++, Python</p>
          </div>

          <div className="border rounded-lg p-4 shadow-md bg-white">
            <h3 className="font-bold">🌐 Web Development</h3>
            <p className="text-gray-600">HTML, CSS, JavaScript, React</p>
          </div>

          <div className="border rounded-lg p-4 shadow-md bg-white">
            <h3 className="font-bold">☁️ Cloud Computing</h3>
            <p className="text-gray-600">AWS Cloud</p>
          </div>

          <div className="border rounded-lg p-4 shadow-md bg-white">
            <h3 className="font-bold">🗄️ Databases</h3>
            <p className="text-gray-600">SQL</p>
          </div>

          <div className="border rounded-lg p-4 shadow-md bg-white">
            <h3 className="font-bold">🖥️ Tools</h3>
            <p className="text-gray-600">GitBash, Xcode, Swift</p>
          </div>

          <div className="border rounded-lg p-4 shadow-md bg-white">
            <h3 className="font-bold">📊 Microsoft Office</h3>
            <p className="text-gray-600">Excel, Word, PowerPoint, Access</p>
          </div>

          <div className="border rounded-lg p-4 shadow-md bg-white">
            <h3 className="font-bold">🌎 Languages</h3>
            <p className="text-gray-600">English, Nepali, Hindi, Spanish</p>
          </div>
        </div>
      </div>

      {/* Contact & Social Links Section */}
      <div className="mt-12 py-6 bg-gray-900 text-white text-center">
        <h2 className="text-2xl font-semibold">📬 Get in Touch</h2>
        <p className="mt-2 text-gray-300">Feel free to reach out for collaboration or inquiries.</p>

       <div className="mt-12 py-6 bg-gray-900 text-white text-center">
         <h2 className="text-2xl font-semibold">📬 Get in Touch</h2>
         <p className="mt-2 text-gray-300">Feel free to reach out for collaboration or inquiries.</p>

         <div className="mt-4 flex justify-center">
           <a href="mailto:lbiswash228@gmail.com" className="text-blue-400 hover:underline">
             Email
           </a>
         </div>
       </div>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>© {new Date().getFullYear()} Biswash Lamsal | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
