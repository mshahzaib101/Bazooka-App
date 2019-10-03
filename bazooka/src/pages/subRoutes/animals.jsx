import React, { Component } from 'react';
import Header from '../../containers/header';
import Footer from '../../components/footer';
import AnimalsContainer from '../../containers/animals'; 


const Animals = (props) => {
    return(
        <div>
            <Header />
                <AnimalsContainer />
            <Footer />
        </div>
    )
}

export default Animals;