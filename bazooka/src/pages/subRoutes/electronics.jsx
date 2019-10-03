import React, { Component } from 'react';
import Header from '../../containers/header';
import Footer from '../../components/footer';
import ElectronicsContainer from '../../containers/electronics';


const   Electronics = (props) => {
    return(
        <div>
            <Header />
                <ElectronicsContainer />
            <Footer />
        </div>
    )
}

export default Electronics;