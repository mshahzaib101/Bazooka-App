import React, { Component } from 'react';
import Header from '../../containers/header';
import Footer from '../../components/footer';
import VehiclesContainer from '../../containers/vehicles';


const Vehicles = (props) => {
    return(
        <div>
            <Header />
                <VehiclesContainer />
            <Footer />
        </div>
    )
}

export default Vehicles;