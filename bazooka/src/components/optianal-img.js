import React, { Component } from "react";
import OptionalimageDisplay from '../images/inner1.jpg';
import './css/styles1.css';


const inlineStyles1 = {
     /* The image used */
     'background-image': `url(${OptionalimageDisplay})`,

     /* Set a specific height */
     'height': '230px',
     'width': '100%', 
 
     /* Create the parallax scrolling effect */
     'background-attachment': 'fixed',
     'background-position': 'center',
     'background-repeat': 'no-repeat',
     'background-size': 'cover',
     'margin-top' : '-42px',
}

const DisplayImg = (props) => {
    return(
        <div>
            <div className='displayOptionalImg' style={inlineStyles1}>
            <div class="hero-text">
            <h2 className='imgHeading'>{props.displayTextonImg}</h2>
        </div>
            
            </div>
        </div>
    )
}

export default DisplayImg;