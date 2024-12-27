// import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About_us from "./components/About_us";
import Blog from "./components/Blog";
import Contact_us from "./components/Contact_us";
import Nav from "./Nav";
import Footer from "./components/Footer";
import { BioProvider } from "./components/Index";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About_us" element={<About_us />} />
        <Route path="/Contact_us" element={<Contact_us />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
