import React, { Component } from 'react';
import Header from '../../containers/header';
import Footer from '../../components/footer';
import PropertyContainer from '../../containers/property';


const Property = (props) => {
    return(
        <div>
            <Header />
                <PropertyContainer />
            <Footer />
        </div>
    )
}

export default Property;