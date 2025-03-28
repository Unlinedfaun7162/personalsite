import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-2xl rounded-2xl p-12 max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold mb-6">📩 Contact Me</h1>

        <p className="text-gray-600 mb-6">
          Have questions or want to connect? Fill out the form below!
        </p>

        <form
          action="https://formspree.io/f/xrbpaqvb"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="w-full p-3 border rounded"
          ></textarea>

          {/* Formspree redirect */}
          <input
            type="hidden"
            name="_redirect"
            value="https://unlinedfaun7162.github.io/personalsite/thankyou"
          />

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
