import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import EZPark from "./components/EZPark";

  export default function App() {
    return (
      <Routes>
          <Route index element={<Home />} >
            <Route path="ezpark" element={<EZPark />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
      </Routes>
    );
  }