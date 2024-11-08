import { ArrowDown, Code, Cpu, Palette } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-24 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in relative z-20 leading-tight py-2" style={{ paddingBottom: '0.4em' }}>
            Manglam Jaiswal
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2 relative z-20">
            I'm a second-year Electronics and Computer Science student skilled in HTML, CSS, JavaScript, Java, C/C++, and basic Flutter, Dart, and Arduino. Passionate about AI, ML, IoT, and full-stack development, I'm eager to tackle real-world challenges through creative, collaborative projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-2 relative z-20">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-sm sm:text-base text-gray-200">Web Development</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span className="text-sm sm:text-base text-gray-200">IoT & Arduino</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Palette className="w-5 h-5 text-blue-400" />
              <span className="text-sm sm:text-base text-gray-200">UI/UX Design</span>
            </div>
          </div>
          <a 
            href="#about"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white 
                     transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-delay-3 relative z-20"
          >
            <span className="text-sm sm:text-base">Learn More</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
      {/* Modified background gradient with reduced opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent z-10"></div>
      {/* Dark overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>
    </section>
  );
}