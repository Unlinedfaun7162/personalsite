import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full">
        <h2 className="text-4xl font-extrabold text-center mb-4 flex justify-center items-center">
          <span className="mr-2">📩</span> Contact Me
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Have questions or want to connect? Fill out the form below!
        </p>

        <form
          action="https://formspree.io/f/xrbpaqvb"
          method="POST"
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-left">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              required
              className="p-3 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-left">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              required
              className="p-3 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-left">Message</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              required
              rows="4"
              className="p-3 border border-gray-300 rounded resize-none"
            ></textarea>
          </div>

          <input
            type="hidden"
            name="_redirect"
            value="https://unlinedfaun7162.github.io/personalsite/thankyou"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded transition"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
