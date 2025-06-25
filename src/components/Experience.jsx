import React from "react";

const experiences = [
  {
    company: "Pinnacle Technologies, Inc.",
    location: "Caloocan City, Philippines",
    roles: [
      {
        title: "Senior Web Developer",
        date: "July 2018 – June 2024",
        bullets: [
          "Led backend development using Laravel and MySQL",
          "Implemented RESTful APIs and integrated third-party services",
          "Mentored junior developers and managed code reviews",
          "Deployed CI/CD pipelines and managed staging environments",
        ],
      },
      {
        title: "Junior Web Developer",
        date: "2016 – June 2018",
        bullets: [
          "Built and maintained academic and enrollment systems",
          "Developed web apps using PHP, MySQL, jQuery, and Bootstrap",
          "Collaborated with senior devs on project delivery and testing",
        ],
      },
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    roles: [
      {
        title: "Freelance Full-Stack Developer",
        date: "Nov 2021 – Mar 2022",
        bullets: [
          "Developed custom websites and admin dashboards for local businesses",
          "Handled full project lifecycle: client communication, dev, deployment",
          "Used PHP, Laravel, JavaScript, and MySQL for backend and frontend",
        ],
      },
    ],
  },
  ,
  {
    company: "Sinagtek",
    location: "Remote",
    roles: [
      {
        title: "Remote Web Developer",
        date: "Jan 2020 – Apr 2020",
        bullets: [
          "Developed custom websites and admin dashboards for local businesses",
          "Handled full project lifecycle: client communication, dev, deployment",
          "Used PHP, Laravel, JavaScript, and MySQL for backend and frontend",
        ],
      },
    ],
  },
  ,
  {
    company: "Pointwest",
    location: "Quezon City, Philippines",
    roles: [
      {
        title: "Java Trainee",
        date: "Mar 2016 – May 2016",
        bullets: [
          "Developed custom websites and admin dashboards for local businesses",
          "Handled full project lifecycle: client communication, dev, deployment",
          "Used PHP, Laravel, JavaScript, and MySQL for backend and frontend",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
          🧑‍💼 Experience
        </h2>

        <div className="relative border-l-4 border-gray-300 pl-8">
         {experiences.map((exp, i) => (
  <div key={i} className="mb-12 relative">
    {/* Timeline Dot */}
    <span className="absolute -left-4 top-2 w-4 h-4 bg-gray-800 rounded-full border-4 border-white shadow-md"></span>

    <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
    <p className="text-sm text-gray-600 mb-4">{exp.location}</p>

    {exp.roles.map((role, j) => (
      <div key={j} className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h4 className="text-lg font-semibold text-gray-700">{role.title}</h4>
          <span className="text-sm text-gray-600">{role.date}</span>
        </div>
        <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
          {role.bullets.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    ))}

    {/* 👇 Add separator after each company except the last */}
    {i !== experiences.length - 1 && (
      <div className="border-t border-gray-300 mt-10 mb-6 w-full"></div>
    )}
  </div>
))}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
