import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./Pages/About/About.js";
import Portfolio from "./Pages/Portfolio/Portfolio.js";
import Contact from "./Pages/Contact/Contact.js";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  document.title = "Casey Davis | Software Engineer";
  return (
    <>
      <Header />
      <body className="bg-light ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </body>
      <Footer />
    </>
  );
}

export default App;
