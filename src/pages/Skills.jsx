import React from "react";
import SkillCard from "../components/Skills/SkillCard";
import SkillsGrid from "../components/Skills/SkillsGrid";
import NavigationBar from "../components/General/NavigationBar";
import Footer from "../components/Footer/Footer";

export default function Skills() {
  return (
    <div>
      <NavigationBar activeElement="Skills"></NavigationBar>
      <SkillsGrid></SkillsGrid>
    
    </div>
  );
}
