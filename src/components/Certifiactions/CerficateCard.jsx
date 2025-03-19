import React from "react";

export default function CertifacteCard({ title, description, imageUrl, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group max-w-sm h-64 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 block cursor-pointer"
    >
      {/* Image with full coverage */}
      <img
        className="w-full h-full object-cover brightness-[0.3] group-hover:brightness-[0.2] transition-all duration-300"
        src={imageUrl}
        alt={title}
      />

      <div className="absolute inset-0 p-6 flex flex-col justify-end cursor-pointer">
        <h3 className="font-bold text-xl mb-2 text-white cursor-pointer">{title}</h3>
        <p className="text-gray-200 text-base opacity-90 cursor-pointer">{description}</p>
      </div>
    </a>
  );
}
