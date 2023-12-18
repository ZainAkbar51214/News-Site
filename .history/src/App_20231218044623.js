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
          <Route path="/" exact><News key="general" pageSize={5} country="in" category="general" title="General" /></Route>
          <Route path="/business" exact><News key="business" pageSize={5} country="in" category="business" /></Route>
          <Route path="/entertainment" exact><News key="entertainment" pageSize={5} country="in" category="entertainment" /></Route>
          <Route path="/health" exact><News key="health" pageSize={5} country="in" category="health" /></Route>
          <Route path="/science" exact><News key="science" pageSize={5} country="in" category="science" /></Route>
          <Route path="/sports" exact><News key="sports" pageSize={5} country="in" category="sports" /></Route>
          <Route path="/technology" exact><News key="technology" pageSize={5} country="in" category="technology" /></Route>
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