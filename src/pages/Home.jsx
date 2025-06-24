import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          👋 Hi, I'm Paul Angelo Manuzon
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
          A passionate web developer with 7+ years of experience building modern,
          scalable applications using PHP, Laravel, JavaScript, and React.
        </p>

        <a
          href="#projects"
          className="inline-block bg-gray-800 text-white py-3 px-6 rounded-full text-base font-semibold hover:bg-gray-700 transition duration-200 transform hover:scale-105"
        >
          🚀 View My Projects
        </a>

        {/* Optional Profile Image */}
        {/* <div className="mt-8 flex justify-center">
          <img
            src="/images/profile.png"
            alt="Paul Angelo Manuzon"
            className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Home;
