import React, { Component } from 'react'
import '../assets/images/css/startup.css'
import Navbar from './navbar';
import Footer from './footer';
import image2 from '../assets/images/2.png'
import image3 from '../assets/images/3.png'
import image4 from '../assets/images/4.png'

class Startup extends Component {
    render() {
        return (

            <div className="">
                <Navbar />

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="form-float">


                                <form className="form-inline fl">
                                    <div className="form-group">
                                        <label className="sr-only" for="exampleInputAmount"></label>
                                        <div className="input-group">
                                            <input type="text" className="form-control input-form" id="exampleInputAmount"
                                                placeholder="Search Startup by name or industry" />

                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-default" aria-label="search">
                                        <span className="glyphicon glyphicon-search" aria-hidden="true"> Search</span>
                                    </button>
                                </form>
                            </div> <br />


                            <div className="think-zoom">
                                <div> <img src={image4} alt="" width="150px" height="150px" /> </div>
                                <div>
                                    <h4>Think and Zoom</h4>
                                    <p>Providing solution for the visually impaired, such as mid-controlled zooming and wearable
                                    controlled
                            zooming</p>
                                    <button className="btn btn-primary" type="submit">See full detaials</button>
                                </div>
                            </div> <br />

                            <div className="slatecube">
                                <div> <img src={image3} alt="" width="150px" height="150px" /> </div>
                                <div>
                                    <h4>Slatecube</h4>
                                    <p>Slatecube helps job seekers develop job-relevant skills, gain experience, and land well
                                    paying jobs
                            through world className up-skilling courses and virtual intenships</p>
                                    <button className="btn btn-primary" type="submit">See full details</button>
                                </div>
                            </div> <br />

                            <div className="sleekjob">
                                <div> <img src={image2} alt="" width="90px" height="100px" /> </div>
                                <div>

                                    <h4>Sleekjob Acadamy</h4>
                                    <p>Trains world className software developers in Ghana and matches them to employment opportunities
                        </p>

                                    <button className="btn btn-primary" type="submit">See full details</button>
                                </div>
                            </div>



                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <span>
                    <Footer />
                    </span>
                </div>

            </div>


        )
    }
}
export default Startup;