import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About"
import Product from "./pages/Product";
import Contact from "./pages/Contact";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
