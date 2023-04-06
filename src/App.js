import About from "./Pages/About/About.js";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio.js";
import Contact from "./Pages/Contact/Contact.js";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  document.title = "Casey Davis | Software Engineer";
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
