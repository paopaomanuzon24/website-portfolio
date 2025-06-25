import React, { useState } from "react";

const Contact = () => {
  const[form, setForm] = useState({
    name : "",
    email : "",
    message : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent");
    setForm({name: "", email: "", message: ""});
  };

  return (
    <section id="contact" className="py-20 bg-white rounded-md">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">📩 Contact Me</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Have a project in mind or just want to say hi? I'm open to collaborations and conversations.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left bg-white p-8 rounded-2xl shadow-xl border border-gray-400"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input 
              type="text" 
              name="name" 
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-4 bg-gray-100 text gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" 
              placeholder="e.g. Juan Dela Cruz" 
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 fond-medium mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-4 bg-gray-100 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" 
              placeholder="e.g. you@example.com"
              required
              />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value})}
              className="w-full p-4 bg-gray-100 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              rows="5"
              placeholder="Let's buil something amazing..."
              required
              ></textarea>
          </div>

          <div className="text-center">
            <button 
              type="submit"
              className="bg-gray-900 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-800 transition-transform transform hover:scale-105"  
              >🚀 Send Message
              </button>
          </div>
        </form>
      </div>
      
    </section>
  );
  
};

export default Contact;