import React from "react";
import NavigationBar from "../components/General/NavigationBar";
import Profile from "../components/Home/Profile";
import ExperienceCard from "../components/Experience/Experience";
import ProjectCarousel from "../components/Home/ProjectsCarousel";
import TestimonialCarousel from "../components/Home/Testimonial";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <>
    
    

      <NavigationBar activeElement="Home"></NavigationBar>

      <Profile></Profile>

      <br />
      <ProjectCarousel></ProjectCarousel>
      <br />

      <ExperienceCard></ExperienceCard>
      <br />
      <TestimonialCarousel></TestimonialCarousel>
      <br />
      <Footer></Footer>
    </>
  );
}
