import React, { useState, useEffect, useRef } from 'react';

export default function SkillCard({ Icon, skillName }) {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      // Check if the card's width is smaller than a threshold (e.g., 150px)
      if (cardRef.current.offsetWidth < 150) {
        setIsTextVisible(false); // Hide text if card is too small
      } else {
        setIsTextVisible(true); // Show text if card has enough space
      }
    });

    resizeObserver.observe(cardRef.current);

    // Cleanup observer on unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={cardRef} className="flex items-center border w-72 rounded-sm overflow-hidden shadow">
      <div className="p-4 bg-green-400">
        {Icon ? (
          <Icon className="h-12 w-12 text-white" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </div>
  
        {isTextVisible && (
          <div className="px-4 text-gray-100">
            <h3 className="text-sm ">Skill</h3>
            <p className="text-2xl">{skillName || 'Skill Name'}</p>
          </div>
        )}
      
    </div>
  );
}
