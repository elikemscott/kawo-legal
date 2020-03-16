import React, { Component } from 'react';
import '../assets/images/css/kawo_legal.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';



class Home extends Component {
    render() {
        return (

            <div>
                <div className=" background_picture">
                    <Navbar />

                    <div className="back">


                        <div className="text-center note_register">
                            <h4 className="text-center note">KAWOLEGAL</h4>
                            <p className="text-center note">A colloborative ecosystem for problem <br /> solvers and suppprt for startups</p>
                            <br />
                            <Link className="btn btn-default register-btn" to="/registration" role="button">Register
                Now!</Link>

                        </div>
                    </div>


                    <div className="whitespace">

                    </div>
                    <Footer />
                </div>



            </div>





        )
    }
}

export default Home;
