import React, { Component } from 'react';
import Header from '../../containers/header';
import Footer from '../../components/footer';
import MobilesContainer from '../../containers/mobiles';


const Mobiles = (props) => {
    return(
        <div>
            <Header />
                <MobilesContainer />
            <Footer />
        </div>
    )
}

export default Mobiles;