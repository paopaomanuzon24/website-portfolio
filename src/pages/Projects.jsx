import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  {
    name: "Personal Portfolio Website",
    description: "A responsive personal portfolio showcasing my projects, built with React and Tailwind CSS.",
    thumbnail: "/images/portfolio.png", // Replace with real image URL
    images: ["/images/projects/personal-portfolio/hero.png", "/images/projects/personal-portfolio/about-me.png", "/images/projects/personal-portfolio/projects.png", "/images/projects/personal-portfolio/contact-me.png"], // Replace with real image URL
    stacks: ["React", "Tailwind CSS", "JavaScript", "GitHub"],
  },
  {
    name: "Academic Information Management System (AimsV2)",
    description: "Laravel-based academic system for managing students, enrollment, and grades. (Screenshots only - employer project)",
    //thumbnail: "https://via.placeholder.com/300x200", // Replace with screenshot if available
    images: ["/images/projects/aims-laravel/dashboard-two.png", "/images/projects/aims-laravel/gradingsheet.png", "/images/projects/aims-laravel/grading-sheet-inside.png", "/images/projects/aims-laravel/application-data.png", "/images/projects/aims-laravel/dashboard-one.png"],
    stacks: ["Laravel", "PHP", "MySQL", "JavaScript", "jQuery","Bootstrap", "GitLab"],
  },
  {
    name: "Academic Information Management System (AimsV1)",
    description: "Original PHP version of academic management system with core features. (Screenshots only - employer project)",
    //thumbnail: "https://via.placeholder.com/300x200", // Replace with screenshot if available
    images: ["/images/projects/aims-php/applicant-list.png", "/images/projects/aims-php/course-file.png"],
    stacks: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS"],
  },
  {
    name: "Barangay Management System (Backend)",
    description: "Backend system with database logic for managing residents and barangay certifications.",
    thumbnail: "/images/barangay-thumbnail.png",// Optional: replace with a backend architecture image or placeholder
    stacks: ["PHP", "Laravel", "MySQL", "GitHub", "RESTful APIs"],
    github: "https://github.com/paopaomanuzon24/barangay"
  },
  {
    name: "CLI Calculator with Unit Testing",
    description: "A command-line calculator with PHPUnit tests built during a technical assessment.",
  //thumbnail: "https://via.placeholder.com/300x200", // Optional: Use a terminal-themed placeholder or GitHub logo
    stacks: ["PHP", "PHPUnit", "GitHub"],
    github: "https://github.com/paopaomanuzon24/cli-calculator"
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">🚀 Projects</h2>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-300"
            >
              

              {project.images && project.images.length > 0 ? (
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop
                  className="w-full h-48"
                  
                >
                  {project.images.map((img, i) => (
                    <div key={i}>
                      <img src={img} alt={`${project.name} screenshot ${i + 1}`} className="h-48 object-cover w-full" />
                    </div>
                  ))}
                </Carousel>
              ) : (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-500 text-4xl">
                  No Thumbnail
                </div>
              )
            }
          
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 ">
                  {project.stacks.map((stack, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-1 px-4 rounded-full text-sm font-medium transition transform hover:scale-105 hover:bg-gray-300"
                    >
                      {stack}
                      
                    </span>
                  ))}
                  
                </div>
                {
                        project.github && (
                          <div className="mt-4">
                            <a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-gray-800  text-white text-sm px-4 py-2 rounded-full hover:bg-gray-700 transition"
                              >
                                View on GitHub
                              </a>
                          </div>
                        )
                      }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
