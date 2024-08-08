import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/home/Home";
import Course from "./assets/course/Course";
import Signup from "./assets/components/Signup";
import Contact from "./assets/components/Contact";
import About from "./assets/components/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
