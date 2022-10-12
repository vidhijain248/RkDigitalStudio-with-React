import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalStyle from "./components/globalStyles";
import { SliderData } from "./components/SliderData";
import Dropdown from "./components/Dropdown";
import React, { useState } from "react";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./components/InfoData";
import Footer from "./components/Footer";
import PhotoGallery from "./components/Pages/PhotoGallery";
import Blogs from "./components/Pages/Blogs";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Hero slides={SliderData} />
        {/* <Gallery/>
    <Cards/>
   <InfoSection {...InfoData}/> */}
        <InfoSection {...InfoData} />
        <Routes>
          {/* <Route path="/home" exact element={<Home/>}/> */}
          <Route path="/gallery" exact element={<PhotoGallery />} />
          <Route path="/blog" exact element={<Blogs />} />
          {/* <Route path="/about" exact element={<Abouthoga />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
