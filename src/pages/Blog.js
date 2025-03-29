import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-24">
      <h1 className="text-4xl font-bold mb-10 text-center">📝 Personal Blog</h1>

      {/* Post: The Rise of AI and Its Impact */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">The Rise of AI and Its Impact on Society</h2>
        <p className="text-gray-600 text-sm mb-4">March 29, 2025</p>
        <p className="mb-2">
          Artificial Intelligence (AI) is no longer a futuristic concept—it's already transforming our world in healthcare, education, transportation, and more. From smart assistants like ChatGPT to autonomous vehicles, AI is driving the next wave of innovation.
        </p>
        <p className="mb-2">
          According to a 2023 McKinsey report, "Generative AI could add the equivalent of $2.6 trillion to $4.4 trillion annually across various industries" 
          <a
            href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            (McKinsey, 2023)
          </a>.
        </p>
        <p className="mb-2">
          However, while the potential is exciting, it raises important questions about job displacement, data privacy, and ethical use. As developers and students, it's essential that we not only embrace AI's capabilities but also critically evaluate its long-term implications.
        </p>
        <p>
          Personally, I’ve started integrating AI into my own work—from using ChatGPT for brainstorming to exploring how AI models could enhance user experiences in web development. The future is unfolding quickly—and it’s up to us to shape it responsibly.
        </p>
      </div>
    </div>
  );
};

export default Blog;