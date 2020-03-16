import React, { Component } from 'react'
import Navbar from './navbar';
import Footer from './footer';
import '../assets/images/css/registration.css';



class Registration extends Component {
    render() {
        return (

            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="forms">
                                <h4>Join KawoLegal. Sign up to get your Startup listed now!</h4>
                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Full Name</label>
                                        <input type="email" className="form-control input-form" id="exampleInputEmail1" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control input-form" id="exampleInputEmail1" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control input-form" id="exampleInputPassword1"
                                            placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Confirm Password</label>
                                        <input type="password" className="form-control input-form" id="exampleInputPassword1"
                                            placeholder="Confirm Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </form>
                            </div>

                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
                <div className="rfmove">
                <Footer />
                </div>
                



            </div>


        )
    }
}

export default Registration;
