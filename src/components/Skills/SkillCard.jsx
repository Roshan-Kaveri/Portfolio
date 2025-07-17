import React, { useState, useEffect, useRef } from "react";

export default function SkillCard({ Icon, skillName }) {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (window.innerWidth <= 1024) {
        setIsTextVisible(false);
      } else {
        setIsTextVisible(true);
      }
    });

    if (cardRef.current) {
      resizeObserver.observe(cardRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex items-center h-full lg:w-full w-max max-w-[260px] rounded-md overflow-hidden border bg-zinc-900 text-white shadow transition-all duration-300"
    >
      <div className="p-4 bg-[#639efb] flex items-center justify-center min-w-[64px]">
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
        <div className="px-4">
          <h3 className="text-sm text-zinc-400">Skill</h3>
          <p className="text-lg font-semibold">{skillName || "Skill Name"}</p>
        </div>
      )}
    </div>
  );
}
