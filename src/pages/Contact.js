import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-200 px-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 max-w-lg w-full text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 flex justify-center items-center mb-8">
          <span className="mr-2">📩</span> Contact Me
        </h2>
        <p className="text-gray-600 mb-6">Have questions or want to connect? Fill out the form below!</p>

        <form
          action="https://formspree.io/f/xrbpaqvb"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300"
          />

          <textarea
            name="message"
            placeholder="Type your message here..."
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 h-32"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
