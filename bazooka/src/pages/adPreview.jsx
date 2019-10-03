import React, { Component } from 'react';
import Header from '../containers/header';
import Footer from '../components/footer';
import AdPreviewContainer from '../containers/ad-preview';





class AdPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <div>
                <Header />
                    <AdPreviewContainer />
                <Footer />
            </div>
        )
    }
}

export default AdPreview;