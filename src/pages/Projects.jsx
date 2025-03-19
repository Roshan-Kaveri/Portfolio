import React, { useState, useLayoutEffect } from "react";
import NavigationBar from "../components/General/NavigationBar";
import ProjectCard from "../components/Projects/ProjectCard";
import projects from "../components/data/projects"
import Footer from "../components/Footer/Footer";
export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Development", "Mobile Apps", "Machine Learning"];

  

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || project.category === selectedCategory),
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavigationBar activeElement="Projects" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6 mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 border-2 border-[#5272b8] bg-transparent rounded-lg w-full max-w-md
            text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#5272b8] 
            transition-all duration-300 hover:border-opacity-80"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 
                ${
                  selectedCategory === category
                    ? "bg-[#5272b8] text-white"
                    : "bg-transparent text-slate-300 border border-slate-600 hover:bg-slate-800/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </div>
            <Footer></Footer>
      
    </>
  );
}
