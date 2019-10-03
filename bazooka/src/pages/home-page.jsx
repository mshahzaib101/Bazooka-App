import React, { Component } from 'react';
import ImageSlider from '../components/Image-Slider/imageSlider';
import ImageGrid from '../components/imageGrid/image-grid';
import Header from '../containers/header';
import Footer from '../components/footer';



class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <div>
                <Header />
                <ImageSlider />
                <ImageGrid />
                <Footer />
            </div>
        )
    }
}

export default HomePage;