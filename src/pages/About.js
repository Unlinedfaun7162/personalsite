import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-2xl rounded-2xl p-12 max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold mb-6 flex items-center justify-center">
          About Me <span className="ml-3 text-6xl">👋</span>
        </h1>

        {/* Personal Background */}
        <p className="text-2xl text-gray-800 leading-loose">
          Hello! I'm <span className="font-bold text-blue-700">Biswash Lamsal</span>, a dedicated computer science student at
          <span className="font-bold text-blue-700"> Kennesaw State University</span>.
          Originally from <span className="font-bold text-red-500">Nepal</span>, I moved to the United States, where I attended
          <span className="font-bold text-blue-700"> Sprayberry High School</span>.
        </p>

        <div className="border-b-4 border-gray-400 my-8 w-3/4 mx-auto"></div>

        {/* Academic Journey */}
        <p className="text-2xl text-gray-800 leading-loose">
          My journey at KSU has been intense yet rewarding. I have consistently pushed myself, successfully completing
          <span className="font-bold text-green-600"> four consecutive overloaded semesters</span>.
          This included two rigorous summer terms (14 & 15 credits), all while maintaining a strong academic record.
        </p>

        <div className="border-b-4 border-gray-400 my-8 w-3/4 mx-auto"></div>

        {/* Work Experience & Balancing Responsibilities */}
        <p className="text-2xl text-gray-800 leading-loose">
          Throughout my college career, I have worked part-time to support my family and meet my personal financial needs.
          Managing both work and a demanding academic workload has strengthened my
          <span className="font-bold text-purple-700"> time management</span>,
          <span className="font-bold text-purple-700"> adaptability</span>, and
          <span className="font-bold text-purple-700"> problem-solving skills</span>.
        </p>

        <div className="border-b-4 border-gray-400 my-8 w-3/4 mx-auto"></div>

        {/* Passion & Interests */}
        <p className="text-2xl text-gray-800 leading-loose">
          Beyond academics and work, I have a deep passion for
          <span className="font-bold text-red-600"> technology</span>,
          <span className="font-bold text-green-600"> soccer</span>, and
          <span className="font-bold text-yellow-600"> traveling</span>.
          I enjoy **building innovative projects** related to computers and exploring new technologies that challenge and inspire me.
        </p>

        {/* Large Icons Section (Fixed Size) */}
        <div className="flex justify-center mt-12 space-x-20">
          <span className="text-[150px] hover:scale-125 transition-transform duration-300">💻</span>
          <span className="text-[150px] hover:scale-125 transition-transform duration-300">⚽</span>
          <span className="text-[150px] hover:scale-125 transition-transform duration-300">✈️</span>
        </div>
      </div>
    </div>
  );
};

export default About;
