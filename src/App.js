import Nav from './components/nav/Nav';
import Hero from './components/about/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className="font-ibm text-sm sm:text-base text-slate-600">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
