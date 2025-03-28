import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-200 via-white to-blue-300 px-4">
      <div className="backdrop-blur-md bg-white/60 border border-white/30 shadow-2xl rounded-3xl p-10 max-w-lg w-full">
        <h2 className="text-5xl font-extrabold text-center mb-4 flex items-center justify-center text-gray-800">
          📩 Contact Me
        </h2>
        <p className="text-center text-gray-700 mb-8 text-lg">
          Let's talk! Whether you have a project, question, or just want to connect, feel free to message me.
        </p>

        <form
          action="https://formspree.io/f/xrbpaqvb"
          method="POST"
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            className="p-4 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-md shadow-inner focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            required
            className="p-4 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-md shadow-inner focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message*"
            rows="5"
            required
            className="p-4 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-md shadow-inner resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>

          <input
            type="hidden"
            name="_redirect"
            value="https://unlinedfaun7162.github.io/personalsite/thankyou"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition shadow-lg"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
