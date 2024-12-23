import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

import Mesh from "./components/Mesh";

const App = () => {
  return (
    <div className="container">
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="#portfolio">
        <Portfolio />
      </section>

      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
