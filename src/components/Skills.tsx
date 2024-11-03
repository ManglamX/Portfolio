'use client'

import React from 'react'

export default function Skills() {
  const skills = {
    "Technical": [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "Python", level: 50 },
      { name: "C/C++", level: 70 },
      { name: "Firebase", level: 65 }
    ],
    "Development": [
      { name: "Web Development", level: 70 },
      { name: "Flutter", level: 40 },
      { name: "Arduino", level: 40},
      { name: "MongoDB", level: 30 },
      { name: "PostgreSQL", level: 60 }
    ],
    "Tools": [
      { name: "AutoCAD", level: 62 },
      { name: "Canva", level: 80 },
      { name: "Git", level: 60 },
      { name: "Arduino IDE", level: 40 }
    ],
    "Soft Skills": [
      { name: "Team Leadership", level: 40 },
      { name: "Marketing", level: 50 },
      { name: "Project Management", level: 65 }
    ]
  }

  const getColorClass = (level: number) => {
    if (level < 40) return 'bg-red-500'
    if (level < 60) return 'bg-orange-500'
    if (level < 80) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-fade-in-down">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className={`animate-fade-in-up bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category}</h3>
                <div className="space-y-4">
                  {items.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-half h-2.5 overflow-hidden">
                        <div 
                          className={`h-2.5 rounded-full ${getColorClass(skill.level)} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}