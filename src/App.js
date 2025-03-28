import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import About from "./pages/About";
import EightBitComputer from "./pages/EightBitComputer";
import Internship from "./pages/Internship";
import GroceryStore from "./pages/GroceryStore";
import PizzaStore from "./pages/PizzaStore";
import AcademicExcellence from "./pages/AcademicExcellence";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/personalsite">
      {/* Navigation Bar */}
      <nav className="p-4 bg-gray-900 text-white flex justify-center space-x-12">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/achievements" className="hover:text-gray-400">Achievements</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </nav>

      {/* Page Content */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/about" element={<About />} />

          {/* Detailed achievement routes */}
          <Route path="/achievements/8-bit-computer" element={<EightBitComputer />} />
          <Route path="/achievements/internship" element={<Internship />} />
          <Route path="/achievements/grocery-store-app" element={<GroceryStore />} />
          <Route path="/achievements/pizza-store" element={<PizzaStore />} />
          <Route path="/achievements/academic-excellence" element={<AcademicExcellence />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          {/* Future detailed pages will be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
