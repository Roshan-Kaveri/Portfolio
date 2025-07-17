"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import skills from "../data/skillsdata";
import SkillCard from "./SkillCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillCarousel = () => {
  const allSkills = Object.values(skills).flat();

  const half = Math.ceil(allSkills.length / 2);
  const rows = [allSkills.slice(0, half), allSkills.slice(half)];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="my-10"
    >
      <h2 className="text-3xl text-center font-bold mb-8 text-white">
        Things I Know
      </h2>
      <div className="space-y-8 w-full px-4">
        {rows.map((row, index) => (
          <SliderRow key={index} skills={row} reverse={index % 2 === 1} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="/skills"
          className="p-2 bg-[#3e6cf7] text-white rounded-md self-center"
        >
          Show All
        </Link>
      </div>
    </motion.div>
  );
};

const animation = { duration: 10000, easing: (t) => t };

const SliderRow = ({ skills, reverse }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: reverse,
    renderMode: "performance",
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 3, spacing: 12 },
      },
    },
    slides: {
      perView: 4,
      spacing: 16,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="mx-2 sm:mx-10">
      <div ref={sliderRef} className="keen-slider">
        {skills.map((skill, i) => (
          <div key={i} className="keen-slider__slide">
            <SkillCard Icon={skill.Icon} skillName={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;
