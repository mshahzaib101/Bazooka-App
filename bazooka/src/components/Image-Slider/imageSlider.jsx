import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../images/banner1.jpg';
import image2 from '../../images/banner2.jpg';
import image3 from '../../images/banner3.jpg';
import image4 from '../../images/banner4.jpg';
import image5 from '../../images/banner5.jpg';
import image6 from '../../images/banner6.jpg';
import image7 from '../../images/banner7.jpg';
import image8 from '../../images/banner8.jpg';
import image9 from '../../images/banner9.jpg';
import image10 from '../../images/banner10.jpg';



class ImageSlider extends Component {
    render() {
        return (
            <Carousel autoPlay={true} interval='4000' useKeyboardArrows={true} stopOnHover={false} >
                <div>
                    <img src={image3} />
                    <p className="legend">All in One</p>
                </div>
                <div>
                    <img src={image7} />
                    <p className="legend">Vehicles</p>
                </div>
                <div>
                    <img src={image1} />
                    <p className="legend">Home Decor</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Suits</p>
                </div>
                
                <div>
                    <img src={image4} />
                    <p className="legend">Clothing</p>
                </div>
                <div>
                    <img src={image5} />
                    <p className="legend">Furniture</p>
                </div>
                <div>
                    <img src={image6} />
                    <p className="legend">Books</p>
                </div>
                
                <div>
                    <img src={image8} />
                    <p className="legend">Animals</p>
                </div>
                <div>
                    <img src={image9} />
                    <p className="legend">Watches</p>
                </div>
                <div>
                    <img src={image10} />
                    <p className="legend">Others</p>
                </div>
            </Carousel>
        );
    }
}

export default ImageSlider;