import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "Tech Corp",
      position: "Senior Software Engineer",
      period: "2020 - Present",
      description: "Led development of cloud-native applications, mentored junior developers, and implemented CI/CD pipelines.",
      achievements: [
        "Reduced deployment time by 60% through automation",
        "Led team of 5 developers in major platform upgrade",
        "Implemented microservices architecture"
      ]
    },
    {
      company: "StartUp Inc",
      position: "Full Stack Developer",
      period: "2018 - 2020",
      description: "Developed and maintained multiple web applications using React and Node.js.",
      achievements: [
        "Increased user engagement by 40%",
        "Optimized database queries reducing load times by 50%",
        "Implemented real-time features using WebSocket"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}