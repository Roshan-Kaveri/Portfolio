import React, { useState } from 'react'
import SkillCard from './SkillCard'

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const skills = {
    Languages: [
      { name: 'JavaScript', imageUrl: 'https://www.javascript.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/js-logo.png' },
      { name: 'Python', imageUrl: 'https://www.python.org/static/community_logos/python-logo-generic.svg' },
      { name: 'Java', imageUrl: 'https://www.oracle.com/a/tech/img/cb88-java-logo-001.jpg' },
      { name: 'Embedded C', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' },
    ],
    'Web Development': [
      { name: 'ReactJS', imageUrl: 'https://reactjs.org/logo-og.png' },
      { name: 'Node.js', imageUrl: 'https://nodejs.org/static/images/logo.svg' },
      { name: 'SQL & PostgreSQL', imageUrl: 'https://www.postgresql.org/media/img/about/press/elephant.png' },
    ],
    'Other Skills': [
      { name: 'Machine Learning', imageUrl: 'https://img.icons8.com/cotton/2x/machine-learning.png' },
      { name: 'Figma', imageUrl: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png' },
      { name: 'Canva', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg' },
    ]
  }

  const allSkills = selectedCategory === 'All' 
    ? Object.values(skills).flat()
    : skills[selectedCategory]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-4 py-2 rounded-lg transition-all duration-300 
          ${selectedCategory === 'All'
            ? 'bg-[#5272b8] text-white' 
            : 'bg-transparent text-slate-300 border border-slate-600 hover:bg-slate-800/50'}`}
        >
          All
        </button>
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 
            ${selectedCategory === category 
              ? 'bg-[#5272b8] text-white' 
              : 'bg-transparent text-slate-300 border border-slate-600 hover:bg-slate-800/50'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allSkills.map((skill) => (
          <SkillCard
            key={skill.name}
            imageUrl={skill.imageUrl}
            skillName={skill.name}
          />
        ))}
      </div>
    </div>
  )
}
