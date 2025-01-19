import React from "react"

const Footer = (props) => {
  return (
    <footer class="border-t text-white py-4 px-3 mt-16">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <p class="text-xs text-gray-400 md:text-sm">Share your thoughts on the website</p>
        </div>
        <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
            Linkedin 
            </ul>
        </div>
    </div>
</footer>
  )
};

export default Footer;
