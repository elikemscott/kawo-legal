import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/kawa-logo2.png'

const Navbar = () => {

    return (
        <div>
            <nav class="navbar navbar-default bar">
                <div class="container-fluid navbar-fixed-top">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand logo" href="#"> <img src={logo} alt="" width="105px"
                            height="50px" /></a>
                    </div>


                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


                        <ul class="nav navbar-nav navbar-right active-nav">
                            <li class="active"><Link to="/">Home <span class="sr-only">(current)</span></Link></li>
                            <li><Link to="/startup">Startups</Link></li>
                            <li><Link to="/registration">Register</Link></li>
                            <li><a href="/login">Login</a></li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>


    )

};

export default Navbar;