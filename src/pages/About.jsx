import React from "react";

const skills = {
  "Backend": ["PHP", "Laravel", "CodeIgniter", "MySQL", "RESTful APIs", "Java (basic)"],
  "Frontend": ["HTML", "CSS", "JavaScript (ES6+)", "jQuery", "Bootstrap", "React", "Tailwind CSS"],
  "DevOps / Deployment": ["Git", "GitHub", "GitLab CI", "CI/CD basics", "Composer", "Linux (CentOS)"],
  "Tools": ["Postman", "Visual Studio Code", "WinSCP"],
  "Project Management": ["JIRA", "Agile/Scrum", "Code Reviews"]
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          👨‍💻 About Me
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed text-left">
          Experienced PHP/Laravel developer with 7 years of hands-on experience specializing in backend development using Laravel, PHP, and MySQL. Skilled in designing scalable web applications, optimizing database performance, and implementing RESTful APIs. Strong frontend capabilities with JavaScript, jQuery, and Bootstrap. Proven ability to lead development teams, mentor junior programmers, and deliver efficient, secure backend solutions. Strong collaborative skills and experience working in Agile teams and remote environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {Object.entries(skills).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white border border-gray-300 text-gray-800 py-2 px-4 rounded-full text-base font-medium shadow-sm hover:shadow-md transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
