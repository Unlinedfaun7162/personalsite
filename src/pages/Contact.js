import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 max-w-xl w-full text-center">
        <h1 className="text-4xl font-extrabold mb-4">📩 Contact Me</h1>
        <p className="text-gray-600 mb-8">
          Have questions or want to connect? Fill out the form below!
        </p>

        <form
          action="https://formspree.io/f/xrbpaqvb"
          method="POST"
          className="flex flex-col space-y-6 w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            required
            className="p-3 border border-gray-300 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            required
            className="p-3 border border-gray-300 rounded"
          />

          <textarea
            name="message"
            placeholder="Type your message here..."
            required
            rows="4"
            className="p-3 border border-gray-300 rounded resize-none"
          ></textarea>

          {/* Redirect to thank you page */}
          <input
            type="hidden"
            name="_redirect"
            value="https://unlinedfaun7162.github.io/personalsite/thankyou"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
