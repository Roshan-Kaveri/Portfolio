import React from "react";
import ExperienceCard from "../components/Experience/Experience";
import NavigationBar from "../components/General/NavigationBar";
import Footer from "../components/Footer/Footer";

export default function Experience() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <ExperienceCard></ExperienceCard>
      <Footer></Footer>
    </div>
  );
}
