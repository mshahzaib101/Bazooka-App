import React, { Component } from 'react';
import Header from '../../containers/header';
import Footer from '../../components/footer';
import ClothingContainer from '../../containers/clothing';


const Clothing = (props) => {
    return(
        <div>
            <Header />
                <ClothingContainer />
            <Footer />
        </div>
    )
}

export default Clothing;