import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>

                <div classname="footer">
                    <p classname="copyrights">2017 KawoLegal All Rights Reserved</p>
                    <div classname="social-media-icons">
                        <a href="fb.com"> <span classname="mdi mdi-facebook"></span></a>
                        <a href="tw.com"> <span classname="mdi mdi-twitter"></span></a>
                        <a href="link.com"> <span classname="mdi mdi-linkedin"></span></a>
                        <a href="ig.com"> <span classname="mdi mdi-instagram"></span></a>
                    </div>

                </div>

            </div>
        )
    }
}
export default Footer;