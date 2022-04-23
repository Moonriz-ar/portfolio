import About from "./components/About";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-ibm">
      <h1 className="text-slate-700 font-square text-9xl p-5">Andrea Lin</h1>
      <Header />
      <About />
      <Skills />
      <Demo />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
