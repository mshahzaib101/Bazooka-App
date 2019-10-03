import React, { Component } from 'react';
import Header from '../../containers/header';
import Footer from '../../components/footer';
import FurnitureContainer from '../../containers/furniture';


const Furniture = (props) => {
    return(
        <div>
            <Header />
                <FurnitureContainer />
            <Footer />
        </div>
    )
}

export default Furniture;