import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 px-4">
      <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 max-w-xl w-full">
        <h2 className="text-4xl font-extrabold text-center mb-4 flex justify-center items-center">
          <span className="mr-2">📩</span> Contact Me
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Have questions or want to connect? Fill out the form below!
        </p>

        <form
          action="https://formspree.io/f/xrbpaqvb"
          method="POST"
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            className="p-3 border border-gray-300 rounded-lg shadow-sm"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            required
            className="p-3 border border-gray-300 rounded-lg shadow-sm"
          />

          <textarea
            name="message"
            placeholder="Type your message here..."
            required
            rows="5"
            className="p-3 border border-gray-300 rounded-lg shadow-sm resize-none"
          ></textarea>

          <input
            type="hidden"
            name="_redirect"
            value="https://unlinedfaun7162.github.io/personalsite/thankyou"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition shadow-md"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
