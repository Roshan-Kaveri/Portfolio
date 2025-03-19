import React, { useState } from "react";
import NavigationBar from "../components/General/NavigationBar";
import ProjectCard from "../components/Projects/ProjectCard";
import CertifacteCard from "../components/Certifiactions/CerficateCard";
import Footer from "../components/Footer/Footer";

export default function Certificates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Development", "Machine Learning", "Other"];

  const certificates = [
    // High-value Machine Learning & Web Development Certifications
    {
        title: "Supervised Machine Learning: Classification",
        description: "IBM",
        imageUrl: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NLW3EZ04ET9M/CERTIFICATE_LANDING_PAGE~NLW3EZ04ET9M.jpeg",
        category: "Machine Learning",
        link: "https://www.coursera.org/account/accomplishments/verify/NLW3EZ04ET9M"
    },
    {
        title: "Supervised Machine Learning: Regression",
        description: "IBM",
        imageUrl: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Q2DUAN96P7O0/CERTIFICATE_LANDING_PAGE~Q2DUAN96P7O0.jpeg",
        category: "Machine Learning",
        link: "https://www.coursera.org/account/accomplishments/verify/Q2DUAN96P7O0"
    },
    {
        title: "Exploratory Data Analysis for Machine Learning",
        description: "IBM",
        imageUrl: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~3T4OBJXBZQS3/CERTIFICATE_LANDING_PAGE~3T4OBJXBZQS3.jpeg",
        category: "Machine Learning",
        link: "https://www.coursera.org/account/accomplishments/verify/3T4OBJXBZQS3"
    },
    {
        title: "The Complete 2024 Web Development Bootcamp",
        description: "Udemy",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-27070a93-2daf-4457-9f8e-f7e22b2ed9cf.jpg",
        category: "Web Development",
        link: "https://www.udemy.com/certificate/UC-27070a93-2daf-4457-9f8e-f7e22b2ed9cf/"
    },
    {
        title: "Develop Minecraft Plugins",
        description: "Udemy",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-8abb9b70-93c7-4056-9be2-3d655bedde5a.jpg",
        category: "Other",
        link: ""
    },
    {
        title: "Google Cloud Computing Foundations",
        description: "Google",
        imageUrl: "https://cdn.qwiklabs.com/VvGZuErP4zQ5ktjYw0amu2Ul7h6iUqrnaORwCNwkuto%3D",
        category: "Web Development",
        link: "https://www.cloudskillsboost.google/public_profiles/fdf99129-3c96-4eb0-ab79-fc978ee58b30/badges/10646157?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
        title: "Career Essentials in Software Development",
        description: "Microsoft & LinkedIn",
        imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQFUNaTdqgFXTQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1730213308067?e=1745452800&v=beta&t=gge4Sf5IumYkdprXTWB9H1s7egmo7Oi9gg7nYFgE6BQ",
        category: "Web Development",
        link: "https://www.linkedin.com/learning/certificates/c028598a9b97bb0257663f89a1454a323fc85784dd89cdcea8847e765a32b608?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgBgFRmEwQ8mnS%2F4bx4ehNA%3D%3D"
    },
    {
        title: "Introduction to Big Data",
        description: "University of California, San Diego - Rady School of Management",
        imageUrl: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ORT0ITKWUQI8/CERTIFICATE_LANDING_PAGE~ORT0ITKWUQI8.jpeg",
        category: "Machine Learning",
        link: "https://www.coursera.org/account/accomplishments/verify/ORT0ITKWUQI8"
    },
    {
        title: "Data Visualisation: Empowering Business with Effective Insights",
        description: "Tata Group (Forage)",
        imageUrl: "https://i.postimg.cc/Qxq0Z4DQ/image.png",
        category: "Machine Learning",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_3HfHZa9PpveQarXqX_1729664148035_completion_certificate.pdf"
    },
    
    
    {
        title: "Java (Basic)",
        description: "HackerRank",
        imageUrl: "https://i.postimg.cc/rFy5x864/image.png",
        category: "Other",
        link: "https://www.hackerrank.com/certificates/864de8b93ffc"
    },
    {
        title: "Software Engineer Intern",
        description: "HackerRank",
        imageUrl: "https://i.postimg.cc/rFy5x864/image.png",
        category: "Other",
        link: "https://www.hackerrank.com/certificates/df555cebfde3"
    },
    
];


  const filteredcertificates = certificates.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || project.category === selectedCategory),
  );

  return (
    <>
      <NavigationBar activeElement="Certificates" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6 mb-8">
          <input
            type="text"
            placeholder="Search Certificates..."
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
          {filteredcertificates.map((project, index) => (
            <CertifacteCard
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
