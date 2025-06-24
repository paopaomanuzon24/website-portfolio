import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-12">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
