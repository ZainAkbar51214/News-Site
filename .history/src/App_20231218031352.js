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
          <Route path="/business" exact><News pageSize={5} country="in" category="business" /></Route>
          <Route path="/entertainment" exact><News pageSize={5} country="in" category="entertainment" /></Route>
          <Route path="/health" exact><News pageSize={5} country="in" category="health" /></Route>
          <Route path="/science" exact><News pageSize={5} country="in" category="science" /></Route>
          <Route path="/sports" exact><News pageSize={5} country="in" category="sports" /></Route>
          <Route path="/technology" exact><News pageSize={5} country="in" category="technology" /></Route>
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