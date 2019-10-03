import React, { Component } from "react";
import "./css/styles1.css";

const Footer = (props) => {
    return(
        <div className='footer'>
        <h4 className='footer-head'><span className='subfoot'>OUR</span> INFORMATION</h4>
        <ul className='footerContainer'>
            <li className='third-li'>Phone Number<br /> <span className='subli'>0324 3329192</span></li>
            <li className='third-li'>Email Address<br /> <span className='subli'>mshahzaib101ed@gmail.com</span></li>
            <li className='third-li'>Facebook Profile<br /> <a href='www.facebook.com'><span className='subli'>M Shahzaib</span></a></li>
        </ul>

        </div>
    )
}

export default Footer;