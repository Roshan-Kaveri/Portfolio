import React, { useState, useEffect, useLayoutEffect } from 'react';
import projects from '../data/projects';
import ProjectCard from '../Projects/ProjectCard';
import { Link } from 'react-router-dom';

export default function ProjectCarousel() {
  
  const filteredProjects = projects.filter((project) => project.carousel);
  const totalProjects = filteredProjects.length;

  
  const extendedProjects = [...filteredProjects, ...filteredProjects, ...filteredProjects];

  const [currentIndex, setCurrentIndex] = useState(totalProjects); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
  
  useEffect(() => {
    if (isHovered) return; 
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  
  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

 
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= totalProjects * 2) {
     
      setCurrentIndex(totalProjects);
    } else if (currentIndex < totalProjects) {
   
      setCurrentIndex(totalProjects + (currentIndex % totalProjects));
    }
  };

 
  const calculateTransform = () => {
    return `translateX(-${(currentIndex * 100) / 3}%)`;
  };

  return (
    <> <h2 className="text-3xl text-center font-bold mb-8 text-white">My Projects</h2>
    <div
      className="overflow-hidden relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
     
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          isTransitioning ? '' : 'duration-0'
        }`}
        style={{ transform: calculateTransform() }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedProjects.map((project, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-2">
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          </div>
        ))}
      </div>

      
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
      >
        &#8250;
      </button>
    </div>

        <div className="flex justify-center mt-8">
    <Link to="/projects" className="p-2 bg-[#3e6cf7] text-white rounded-md self-center">Show All</Link>
    </div>
    </>
  );
}
