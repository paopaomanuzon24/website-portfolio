import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-gray-900">
          My Portfolio
        </h1>
        <ul className="flex space-x-6 text-base font-medium">
          <li>
            <a 
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Home
              </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul> 
      </nav>
    </header>
  )
}

export default Header;