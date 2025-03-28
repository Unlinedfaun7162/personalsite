import React, { useState } from 'react';

const EightBitComputer = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-24">
      <h1 className="text-4xl font-bold mb-6">🔧 8-bit Computer Project</h1>

      <p className="mb-4 text-lg">
        As part of a <strong>research-driven project</strong>, I contributed to the <strong>design and implementation</strong>
        of a fully functional <strong>8-bit digital computer</strong> in <strong>Multisim</strong>.
        This system operates based on the <strong>Fetch-Decode-Execute (FDE) cycle</strong> and follows <strong>von Neumann architecture</strong>.
        The project also implemented <strong>Euclid's Algorithm</strong> for computing the <strong>Greatest Common Divisor (GCD)</strong> using <strong>x86 assembly language</strong>.
      </p>

      {/* Achievements Section */}
      <h2 className="text-3xl font-bold mt-8 mb-6 text-gray-800 flex items-center">
        🏅 Achievements
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700">
          <span className="font-bold text-gray-900">🏆 Awarded:</span>
          <strong> C-Day Best Undergraduate Research</strong> at
          <span className="text-blue-600"> Kennesaw State University</span>, Fall 2024.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          📢 Project was <strong className="text-gray-900">published online</strong>, with
          <span className="text-green-600 font-semibold"> 40+ downloads/views</span>.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          🖥️ Successfully designed <span className="font-semibold">memory, control unit, and ALU functionality</span>
          to execute <span className="text-gray-900 font-bold">16 unique instructions</span>.
        </p>
      </div>

      {/* Technologies Used Section */}
      <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800 flex items-center">
        🛠️ Technologies Used
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ul className="list-none space-y-2">
          <li className="text-lg text-gray-700">
            🔌 <strong className="text-gray-900">Multisim</strong> - Circuit Simulation
          </li>
          <li className="text-lg text-gray-700">
            💾 <strong className="text-gray-900">x86 Assembly Language</strong> - Implemented Euclid’s GCD Algorithm
          </li>
          <li className="text-lg text-gray-700">
            ⚙️ <strong className="text-gray-900">Digital Logic Design</strong> - Built registers, memory, ALU, and control unit
          </li>
        </ul>
      </div>

      {/* Challenges & Learning Section */}
      <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800 flex items-center">
        🚧 Challenges & Learning
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700">
          This project provided <strong className="text-gray-900">hands-on experience</strong>
          with low-level computing concepts. <br />
          <span className="text-gray-800 font-semibold">Key challenges:</span>
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-3 text-lg text-gray-700">
          <li>🚀 Optimizing <strong className="text-gray-900">instruction execution</strong> for better performance.</li>
          <li>🛠️ Debugging <strong className="text-gray-900">complex hardware-software interactions</strong> in circuit design.</li>
          <li>🔗 Ensuring proper data flow between <strong className="text-gray-900">registers, memory, and ALU</strong>.</li>
        </ul>
      </div>

      {/* C-Day Poster */}
      <h2 className="text-2xl font-bold mt-8 mb-4">📜 Project Poster</h2>
      <div className="mb-4">
        <iframe
          src={`${process.env.PUBLIC_URL}/UR-147_8-bit_Computer_Poster.pdf`}
          width="100%"
          height="500px"
          className="border rounded-lg shadow-md"
          title="8-bit Computer Poster"
        ></iframe>
        <div className="mt-2">
          <a
            href={`${process.env.PUBLIC_URL}/UR-147_8-bit_Computer_Poster.pdf`}
            download="8-bit_Computer_Poster.pdf"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition inline-block"
          >
            📥 Download Poster
          </a>
        </div>
      </div>

      {/* YouTube Video Embed */}
      <h2 className="text-2xl font-bold mt-8 mb-4">🎥 Project Presentation</h2>
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-96 border rounded-lg shadow-md"
          src="https://www.youtube.com/embed/mVzDSG38od8"
          title="8-bit Computer Presentation"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* 📸 C-Day Event Pictures */}
      <h2 className="text-2xl font-bold mt-8 mb-4">📸 C-Day Event Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center">
        {["cday1.png", "cday2.png", "cday3.png"].map((img, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/${img}`}
            alt={`C-Day Presentation ${index + 1}`}
            className="w-full sm:w-48 h-32 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(`${process.env.PUBLIC_URL}/${img}`)}
          />
        ))}
      </div>

      {/* Click-to-Enlarge Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Enlarged View" className="max-w-full max-h-full rounded-lg shadow-lg" />
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default EightBitComputer;
