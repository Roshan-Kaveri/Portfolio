import React, { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import spigot from "../images/spigot.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    image: "https://via.placeholder.com/150",
    statusImage: spigot,
    review:
      "This product exceeded my expectations! I would definitely recommend it to others.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://via.placeholder.com/150",
    statusImage: spigot, // Yellow for idle status
    review:
      "Great quality and fast shipping. The customer service was also very helpful.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sara Lee",
    image: "https://via.placeholder.com/150",
    statusImage: spigot, // Red for offline status
    review:
      "I love the design and the functionality of this product. It's perfect for my needs.",
    rating: 5,
  },
  // Add more testimonials...
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const extendedProjects = [...testimonials, ...testimonials, ...testimonials];

 
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= extendedProjects.length) {
      setCurrentIndex(0);
    }
  };

  const calculateTransform = () => {
    return `translateX(-${(currentIndex * 100) / 3}%)`;
  };

  return (
    <>
     <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
      <h2 className="text-3xl text-center font-bold mb-1 mt-10 text-white">
      User Reviews
      </h2>
      
      <div
        className="overflow-hidden relative w-full max-w-6xl mx-auto p-6 rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? "" : "duration-0"}`}
          style={{ transform: calculateTransform() }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedProjects.map(
            ({ id, name, image, statusImage, review, rating }) => (
              <div key={id} className="flex-shrink-0 w-full md:w-1/3 px-2 mb-6">
                <div className="border text-white rounded-lg p-6 shadow-lg transform transition-transform duration-200 hover:scale-105 cursor-pointer">
                  <div className="relative flex items-center mb-4">
                    <div className="">
                      <img
                        className="w-16 h-16 rounded-full border-2 mr-4"
                        src={image}
                        alt={name}
                      />
                      {/* Status Image - positioned near the profile image */}
                      <img
                        className="absolute bottom-0 ml-10 w-8 h-8 rounded-full border-2 object-fill p-1 border-white bg-gray-400"
                        src={statusImage}
                        alt="status"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg">{name}</h2>
                      <div className="flex text-yellow-500">
                        {[...Array(rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 italic mb-4">
                    <FaQuoteLeft className="inline mr-2 text-gray-500" />
                    {review}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        >
          &#8250;
        </button>
      </div>
      <div className="flex justify-center">
        <Link
          to="/testimonials"
          className="p-2 bg-[#3e6cf7] text-white rounded-md self-center"
        >
          Show All
        </Link>
      </div>
      </motion.div>
    </>
  );
};

export default TestimonialCarousel;
