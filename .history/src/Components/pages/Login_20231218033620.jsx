import React, { Component } from 'react';

class App extends Component{
    render(){
      return(
         <div className="container">
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
              <div className="image">
              </div>
            </div>
            <div className="body-form">
             <form>
                <div className="input-group mb-3">
     <div className="input-group-prepend">
      <span className="input-group-text"><i class="fa fa-user"></i></span>
    </div>
    <input type="text" className="form-control" placeholder="Username" />
  </div>
   <div className="input-group mb-3">
     <div className="input-group-prepend">
      <span className="input-group-text"><i class="fa fa-lock"></i></span>
    </div>
    <input type="text" className="form-control" placeholder="Password" />
  </div>
   <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
   <div className="message">
  <div><input type="checkbox" /> Remember ME</div>
   <div><Link to="/">Forgot your password</Link></div>
   </div>
     </form>
              <div className="social">
                <Link to="/"><i className="fab fa-facebook"></i></Link>
                <Link to="/"><i className="fab fa-twitter-square"></i></Link>
                <Link to="/"><i className="fab fa-google"></i></Link>
              </div>
            </div>
          </div>
         </div>   
      )
    }
  }
  

export default Login;