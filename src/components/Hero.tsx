import React from 'react';
import { ArrowDown, Code, Cpu, Palette } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Manglam Jaiswal
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
          I’m a second-year Electronics and Computer Science student skilled in HTML, CSS, JavaScript, Java, C/C++, and basic Flutter, Dart, and Arduino. Passionate about AI, ML, IoT, and full-stack development, I’m eager to tackle real-world challenges through creative, collaborative projects.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-delay-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
              <Code className="w-5 h-5 text-primary" />
              <span>Web Development</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
              <Cpu className="w-5 h-5 text-primary" />
              <span>IoT & Arduino</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
              <Palette className="w-5 h-5 text-primary" />
              <span>UI/UX Design</span>
            </div>
          </div>
          <a 
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary-dark text-white 
                     transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-delay-3"
          >
            Learn More
            <ArrowDown className="w-4 h-4 animate-float" />
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
    </section>
  );
}