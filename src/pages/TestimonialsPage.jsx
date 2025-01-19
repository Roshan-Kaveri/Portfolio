import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import spigot from '../components/images/spigot.png';
import NavigationBar from '../components/General/NavigationBar';

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    image: "https://via.placeholder.com/150",
    statusImage: spigot,
    review: "This product exceeded my expectations! I would definitely recommend it to others.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://via.placeholder.com/150",
    statusImage: spigot, // Yellow for idle status
    review: "Great quality and fast shipping. The customer service was also very helpful.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sara Lee",
    image: "https://via.placeholder.com/150",
    statusImage: spigot, // Red for offline status
    review: "I love the design and the functionality of this product. It's perfect for my needs.",
    rating: 5,
  },
  // Add more testimonials...
];

const TestimonialsPage = () => {
  return (
    <>
    <NavigationBar></NavigationBar>
    
    <div className="min-h-screen  text-white py-10">
      <h2 className="text-3xl text-center font-bold mb-10">All Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {testimonials.map(({ id, name, image, statusImage, review, rating }) => (
          <div key={id} className="border text-white rounded-lg p-6 shadow-lg">
            <div className="relative flex items-center mb-4">
              <img className="w-16 h-16 rounded-full border-2 mr-4" src={image} alt={name} />
              <img
                className="absolute bottom-0 ml-10 w-8 h-8 rounded-full border-2 object-fill p-1 border-white bg-gray-400"
                src={statusImage}
                alt="status"
              />
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
        ))}
      </div>
    </div>
    </>
  );
};

export default TestimonialsPage;
