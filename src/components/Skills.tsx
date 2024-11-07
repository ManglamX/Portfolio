import React from 'react';
import { 
  Code2, 
  Database, 
  Cpu, 
  Palette, 
  GitBranch, 
  Terminal, 
  Laptop, 
  Users,
  MessageSquare,
  LineChart,
  Briefcase,
  Target,
  UserPlus,
  UsersRound
} from 'lucide-react';

const SkillCard = ({ skill }: { skill: { name: string; icon: React.ReactNode; color?: string } }) => (
  <div className="group relative flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${skill.color || 'bg-primary/10 dark:bg-primary/20'} group-hover:scale-110 transition-transform duration-300`}>
      {skill.icon}
    </div>
    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary dark:group-hover:text-primary/80 transition-colors duration-300">
      {skill.name}
    </span>
  </div>
);

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { 
          name: "HTML/CSS", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-6 h-6" alt="HTML5" />,
          color: "bg-orange-100 dark:bg-orange-900/20"
        },
        { 
          name: "JavaScript", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-6 h-6" alt="JavaScript" />,
          color: "bg-yellow-100 dark:bg-yellow-900/20"
        },
        { 
          name: "Python", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 h-6" alt="Python" />,
          color: "bg-blue-100 dark:bg-blue-900/20"
        },
        { 
          name: "Java", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-6 h-6" alt="Java" />,
          color: "bg-red-100 dark:bg-red-900/20"
        },
        { 
          name: "C++", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-6 h-6" alt="C++" />,
          color: "bg-blue-100 dark:bg-blue-900/20"
        },
        { 
          name: "C", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="w-6 h-6" alt="C" />,
          color: "bg-indigo-100 dark:bg-indigo-900/20"
        },
        { 
          name: "Dart", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" className="w-6 h-6" alt="Dart" />,
          color: "bg-blue-100 dark:bg-blue-900/20"
        }
      ]
    },
    {
      category: "Frameworks & Technologies",
      items: [
        { 
          name: "Flutter", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="w-6 h-6" alt="Flutter" />,
          color: "bg-blue-100 dark:bg-blue-900/20"
        },
        { 
          name: "Firebase", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="w-6 h-6" alt="Firebase" />,
          color: "bg-yellow-100 dark:bg-yellow-900/20"
        },
        { 
          name: "MongoDB", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-6 h-6" alt="MongoDB" />,
          color: "bg-green-100 dark:bg-green-900/20"
        },
        { 
          name: "PostgreSQL", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-6 h-6" alt="PostgreSQL" />,
          color: "bg-blue-100 dark:bg-blue-900/20"
        },
        { 
          name: "Arduino", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" className="w-6 h-6" alt="Arduino" />,
          color: "bg-teal-100 dark:bg-teal-900/20"
        }
      ]
    },
    {
      category: "Development Tools",
      items: [
        { 
          name: "VS Code", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="w-6 h-6" alt="VS Code" />,
          color: "bg-blue-100 dark:bg-blue-900/20"
        },
        { 
          name: "Git", 
          icon: <GitBranch className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
          color: "bg-orange-100 dark:bg-orange-900/20"
        },
        { 
          name: "Arduino IDE", 
          icon: <Terminal className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
          color: "bg-teal-100 dark:bg-teal-900/20"
        },
        { 
          name: "AutoCAD", 
          icon: <Laptop className="w-6 h-6 text-red-600 dark:text-red-400" />,
          color: "bg-red-100 dark:bg-red-900/20"
        },
        { 
          name: "Canva", 
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" className="w-6 h-6" alt="Canva" />,
          color: "bg-blue-100 dark:bg-blue-900/20"
        }
      ]
    },
    {
      category: "Professional Skills",
      items: [
        { 
          name: "Marketing", 
          icon: <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
          color: "bg-purple-100 dark:bg-purple-900/20"
        },
        { 
          name: "Teamwork", 
          icon: <UsersRound className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
          color: "bg-blue-100 dark:bg-blue-900/20"
        },
        { 
          name: "Team Management", 
          icon: <UserPlus className="w-6 h-6 text-green-600 dark:text-green-400" />,
          color: "bg-green-100 dark:bg-green-900/20"
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">A comprehensive showcase of my technical abilities and professional competencies</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category} 
              className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillGroup.items.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}