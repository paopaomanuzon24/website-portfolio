import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white rounded-md">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          📩 Contact Me
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          This contact section is current under development. In the meantime, feel free to reach out to me on LinkedIn.
        </p>
        <a 
          href="https://www.linkedin.com/in/paul-angelo-manuzon/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 text-white py-3 px-6 rounded-full text-base font-semibold hover:bg-gray-700 transition duration-200 transform hover:scale-105"
          >
          🔗 Connect on LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact;