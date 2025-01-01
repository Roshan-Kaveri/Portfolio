import React from 'react';

export default function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="relative group max-w-sm h-64 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      {/* Image with full coverage */}
      <img 
        className="w-full h-full object-cover brightness-[0.3] group-hover:brightness-[0.2] transition-all duration-300" 
        src={imageUrl} 
        alt={title} 
      />
      
      {/* Text overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
        <p className="text-gray-200 text-base opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
} 