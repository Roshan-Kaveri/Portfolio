import React, { useState } from 'react';

export default function ExperienceCard() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <div className="experience-container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">My Experience</h2>
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mx-2 rounded ${activeTab === 'education' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${activeTab === 'work' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('work')}
        >
          Work
        </button>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-500"></div>
        <div className="flex flex-col items-center">
          {activeTab === 'education' && (
            <>
              <div className="timeline-item mb-8 w-1/2">
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Manipal Institute of Technology</h3>
                  <p>CGPA: 7.76 (Current)</p>
                  <p>Currently pursuing a B.Tech in Information Technology, presently in the 5th semester.</p>
                </div>
              </div>
              <div className="timeline-item mb-8 w-1/2">
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Bhandarkars' Arts & Science College</h3>
                  <p>Score: 90%</p>
                  <p>Completed Pre University with a focus on PCMB, scoring 90% in the 12th Board Examinations.</p>
                </div>
              </div>
            </>
          )}
          {activeTab === 'work' && (
            <>
              <div className="timeline-item mb-8 w-1/2">
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Software Developer Intern</h3>
                  <p>XYZ Company</p>
                  <p>Worked on developing web applications using React and Node.js.</p>
                </div>
              </div>
              <div className="timeline-item mb-8 w-1/2">
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Freelance Developer</h3>
                  <p>Various Clients</p>
                  <p>Provided web development services and built custom solutions.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
