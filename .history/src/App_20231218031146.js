import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Login from "./Components/pages/Login";
import SignUp from "./Components/pages/SignUp";
import News from "./Components/Layouts/News";

function App() {
  return (
    <Router> 
      <Navbar />
        <Switch>
          <Route path="/" exact><News pageSize={5} country="in" category="general" /></Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      <Footer />
  </Router>
  );
}

export default App;