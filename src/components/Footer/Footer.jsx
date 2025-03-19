import React from "react";

const Footer = (props) => {
  return (
    <footer class="border-t text-white bg-black py-4 px-3 mt-16">
  <div class="container mx-auto flex flex-wrap items-center justify-between">
    <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
      <p class="text-xs text-white md:text-sm">
        Share your thoughts on the website
      </p>
    </div>
    <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
      <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
        <li>
          <a href="https://www.linkedin.com/in/roshan-k-kumar/" 
             class="hover:underline text-blue-400" 
             target="_blank" 
             rel="noopener noreferrer">
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
