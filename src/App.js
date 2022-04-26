import Nav from "./components/nav/Nav";
import Hero from "./components/about/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Demo from "./components/demo/Demo";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="font-ibm text-sm sm:text-base text-slate-600">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
