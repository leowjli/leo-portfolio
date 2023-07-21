import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Layout from "./components/Layout";
import EZPark from "./components/EZPark";
import ErrorPage from "./components/ErrorPage";

  export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/ezpark" element={<EZPark />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }