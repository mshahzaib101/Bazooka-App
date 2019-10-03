import React, { Component } from 'react';
import Header from '../../containers/header';
import Footer from '../../components/footer';
import BikesContainer from '../../containers/bikes';


const Bikes = (props) => {
    return(
        <div>
            <Header />
                <BikesContainer />
            <Footer />
        </div>
    )
}

export default Bikes;