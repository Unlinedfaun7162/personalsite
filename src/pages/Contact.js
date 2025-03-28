import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full">
        <h2 className="text-4xl font-bold text-center mb-2 flex justify-center items-center">
          <span className="mr-2">📩</span> Contact Me
        </h2>
        <p className="text-center text-gray-600 mb-6 px-2">
          Have questions or want to connect? Fill out the form below!
        </p>

        <form
          action="https://formspree.io/f/xrbpaqvb"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            placeholder="Type your message here..."
            required
            rows="4"
            className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <input
            type="hidden"
            name="_redirect"
            value="https://unlinedfaun7162.github.io/personalsite/thankyou"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
