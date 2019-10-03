import React, { Component } from 'react';
import Header from '../containers/header';
import Footer from '../components/footer';
import PublishAddForm from '../containers/publish-add-form';

const PublishAdd = (props) => {

    return(
        <div>
            <Header />
            <PublishAddForm />
            <Footer />
        </div>
    )
}

export default PublishAdd;