import React from "react";
import file from "./Roshan_Kumar_220911016_IT_ML_SD_NP.pdf";

export default function ResumeDownload() {
  const handleDownload = () => {
    window.open(file, "_blank");
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="text-lg px-2 rounded-md bg-[#5272b8] text-slate-100 hover:underline"
      >
        Resume
      </button>
    </div>
  );
}
