import React, { Component } from 'react';
import Header from '../../containers/header';
import Footer from '../../components/footer';
import OthersContainer from '../../containers/others';


const Others = (props) => {
    return(
        <div>
            <Header />
                <OthersContainer />
            <Footer />
        </div>
    )
}

export default Others;