import React from "react";

const Footer = () => {
  return (
    <footer className="border-t text-white bg-black py-4 px-3 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center gap-4">
        <div className="w-full md:w-1/2">
          <p className="text-xs md:text-sm text-white">
            Share your thoughts on the website
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="flex justify-center flex-wrap text-xs md:text-sm gap-3">
            <li>
              <a
                href="https://www.linkedin.com/in/roshan-k-kumar/"
                className="hover:underline text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
