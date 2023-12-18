import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      <Footer />
  </BrowserRouter>
    );
  }
}

export default App;