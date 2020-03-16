import React, { Component } from 'react'
import Navbar from './navbar';
import Footer from './footer';
import '../assets/images/css/login.css';



class Login extends Component {
    render() {
        return (

            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div>
                                <div className="forms">
                                    <h4>Already a Member? Login to add your Startup</h4>
                                    <form>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control input-form" id="exampleInputEmail1"
                                                placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control input-form" id="exampleInputPassword1"
                                                placeholder="Password" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign In</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
                <div className="fmove">
                <Footer />
                </div>







            </div>


        )
    }
}

export default Login;
