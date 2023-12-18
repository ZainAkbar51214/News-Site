import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/pages/Home';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import About from "./Components/pages/Login";

function App() {
  return (
    <BrowserRouter> 
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Login />}></Route>
        </Routes>
      <Footer />
  </BrowserRouter>
  );
}

export default App;