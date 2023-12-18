import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to="/">News App</Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/sign-up">Sign Up</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/sign-up">business</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/sign-up">entertainment</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/sign-up">general</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/sign-up">health</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/sign-up">science</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/sign-up">sports</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/sign-up">technology</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Navbar;