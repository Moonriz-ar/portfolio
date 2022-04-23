import About from "./components/about/About";
import Hero from "./components/about/Hero";
import Demo from "./components/demo/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="font-ibm text-sm sm:text-base scroll-smooth text-slate-800">
      <Hero />
      <About />
      <Skills />
      <Demo />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
