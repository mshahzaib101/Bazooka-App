import React, { Component } from 'react';
import './flipping.css';
import MenueImage from '../../images/menu-image.jpg';


// this component will recieve 2 props for front and back images
class FlippingImages extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
	        <div className="flipper">
		        <div className="front">
                        {/* <!-- front content --> */}
                        <img src={this.props.front} alt="showcase"/>
                        
		        </div>
		        <div className="back">
                        {/* <!-- back content --> */}
                        <img src={this.props.back} alt="showcase"/>
		        </div>
            	</div>
        </div>
        )
    }
}

export default FlippingImages;