import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from './components/Experience';

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      <Header />
      <main className="px-4 md:px-12 lg:px-24 py-12 space-y-24">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
