import React from 'react'
import RazorpayButton from './RazorPayButton'

export default function Profile() {
  return (
    <>
      <div class="flex flex-col h-[calc(100vh-6.5rem)] items-center justify-center text-white">

      <div className="flex">
        {/* Replace with your logo image or text */}
        <h1 className='text-8xl engagement-regular text-[#5272b8]'>R</h1>
        <h1 className='text-8xl engagement-regular text-slate-300'>K</h1>

      </div>

  <h1 class="text-3xl font-bold mb-2">Hey, I'm <span class="bg-gradient-to-r from-[#5272b8] to-[#779ffc] bg-clip-text text-transparent">
      Roshan Kumar
    </span></h1>
  <p class="text-center max-w-md mb-6">
  A dedicated developer leveraging modern frameworks to build responsive and intuitive applications, who loves to create solutions using code
  </p>
  <div class="flex space-x-4">
    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View My Work</button>
    <button class="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Get in Touch</button>
  </div>
</div>
      <RazorpayButton></RazorpayButton>

    </>
  )
}
