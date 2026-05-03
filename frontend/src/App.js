import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Businesses from "./pages/Businesses";
import Nogoya from "./pages/Nogoya";
import MudaiKitchen from "./pages/MudaiKitchen";
import Collaborations from "./pages/Collaborations";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="businesses" element={<Businesses />} />
            <Route path="businesses/nogoya" element={<Nogoya />} />
            <Route path="businesses/mudai-kitchen" element={<MudaiKitchen />} />
            <Route path="collaborations" element={<Collaborations />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
