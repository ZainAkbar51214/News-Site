import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/pages/Home';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Login from "./Components/pages/Login";
import SignUp from "./Components/pages/SignUp";

function App() {
  return (
    <Router> 
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      <Footer />
  </Router>
  );
}

export default App;