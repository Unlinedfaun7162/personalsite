import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-200 px-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 max-w-lg w-full text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 flex justify-center items-center mb-8">
          <span className="mr-2">📩</span> Contact Me
        </h2>
        <p className="text-gray-600 mb-6">Have questions or want to connect? Fill out the form below!</p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email*"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <textarea
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none h-32"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-lg"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
