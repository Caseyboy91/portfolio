import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./Pages/About/About.js";
import Portfolio from "./Pages/Portfolio/Portfolio.js";
import Contact from "./Pages/Contact/Contact.js";

import "./App.css";

function App() {
  document.title = "Casey Davis | Software Engineer";
  return (
    <main className="bg-light ">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
