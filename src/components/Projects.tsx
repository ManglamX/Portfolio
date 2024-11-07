import { Github } from 'lucide-react';

import ee1999 from '../assets/ee1999.png';

const projects = [
  {
    title: 'EETARA Cafe',
    description: 'Restaurant website with AI recommendation system, multi-role views, booking, and event scheduling.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    tech: ['Firebase', 'AI/ML', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/ManglamX',
  },
  {
    title: 'DreamHome Platform',
    description: 'Home accommodation platform with property listings, criminal verification, and rental management.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    tech: ['Firebase', 'AI/ML', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/ManglamX',
  },
  {
    title: 'MistVision',
    description: 'Innovative 3D hologram display using mist for unique visual experiences.',
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800',
    tech: ['IoT', 'Arduino', 'Hardware Design'],
    githubUrl: '', // Added empty string as a placeholder
  },
  {
    title: 'Electronics Engineering 1999 Batch Website',
    description: 'A dynamic website for the Electronics Engineering batch of 1999 alumni of Fr. Conceicao Rodrigues College of Engineering, featuring profiles, search functionality, and upcoming event details',
    image: ee1999, // Corrected this line
    tech: ['Firebase', 'AI/ML', 'HTML', 'CSS', 'JavaScript', 'React'],
    githubUrl: 'https://github.com/ManglamX/EE_Batch1999',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <Github size={16} className="mr-1" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}