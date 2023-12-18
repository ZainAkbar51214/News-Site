import React from "react";
import { Link } from "react-router-dom";
import '../Footer/Footer.css';

const Navbar = () => {
    return (
        <>
            <div className="d-flex flex-column h-100">
                {/* <!-- FOOTER --> */}
                <footer className="w-100 py-4 flex-shrink-0">
                    <div className="container py-4">
                        <div className="row gy-4 gx-5">
                            <div className="col-lg-4 col-md-6">
                                <h5 className="h1 text-white">FB.</h5>
                                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <Link className="text-primary" to="https://sketchcoder.com" target="_blank">sketchcoder.com</Link></p>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Get started</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Get started</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="text-white mb-3">Newsletter</h5>
                                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <form action="#">
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Navbar;