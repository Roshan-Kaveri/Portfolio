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
      date: "2022 - Present",
      title: "Manipal Institute of Technology",
      description: "B.Tech in Information Technology\nCGPA: 7.95 (6th Semester)",
    },
    {
      date: "2020 - 2022",
      title: "Bhandarkars' Arts & Science College",
      description: "Pre-University (PCMB)\n12th Board Score: 90%",
    },
    {
      date: "2019",
      title: "Sri Venkataramana English Medium School",
      description: "10th Board Score: 97%",
    },
  ];
  

  const workData = [
    {
      date: "Dec 2024 - Jan 2025",
      title: "Full Stack Intern",
      description:
        "Accolade Tech Solutions\n" +
        "Built a web-based library system using MERN stack. " +
        "Integrated authentication and payment gateway for secure transactions.",
    },
    {
      date: "Dec 2022 - Present",
      title: "Freelance Plugin Developer",
      description:
        "Hmmbo Studios \n" +
        "Developed and sold custom Spigot plugins (10K+ downloads, 500 sales). " +
        "Integrated advanced features using plugin APIs.",
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
