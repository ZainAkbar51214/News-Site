import React from "react";
import {
  BrowserRouter,
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
    <BrowserRouter> 
      <Navbar />
        <Route>
          <Routes path="/" element={<Home />}></Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Route>
      <Footer />
  </BrowserRouter>
  );
}

export default App;