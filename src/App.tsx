import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 dark:from-primary/5 to-transparent dark:to-transparent pointer-events-none"></div>
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="bg-gray-50 dark:bg-dark-100 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Manglam Jaiswal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;