import React from "react";
import Timeline from "./Timeline";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const ExperienceCard = () => {
  const [activeTab, setActiveTab] = React.useState("education");
   
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  
  const educationData = [
    {
      date: "2022 - present",
      title: "Manipal Institute of Technology",
      description:
        "B.Tech in Information Technology | CGPA: 7.76 (Current) - 5th Semester",
    },
    {
      date: "2020",
      title: "Bhandarkars' Arts & Science College",
      description:
        "Pre University - PCMB | Score: 90% in 12th Board Examinations",
    },
  ];

  const workData = [
    {
      date: "2023 - present",
      title: "Software Developer Intern",
      description:
        "Worked on developing web applications using React and Node.js.",
    },
    {
      date: "2022",
      title: "Freelance Developer",
      description:
        "Developed web applications and websites for various clients.",
    },
  ];

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="experience-container mx-auto text-center mt-10">
      <h2 className="text-3xl font-bold mb-8 text-white">My Experience</h2>
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mx-2 rounded ${
            activeTab === "education"
              ? "bg-[#5272b8] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            activeTab === "work" ? "bg-[#5272b8] text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("work")}
        >
          Work
        </button>
      </div>

      <Timeline data={activeTab === "education" ? educationData : workData} />
    </div>
    </motion.div>
  );
};

export default ExperienceCard;
