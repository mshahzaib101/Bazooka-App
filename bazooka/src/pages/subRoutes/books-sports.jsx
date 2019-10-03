import React, { Component } from 'react';
import Header from '../../containers/header';
import Footer from '../../components/footer';
import BooksContainer from '../../containers/books-sports';


const BooksSports = (props) => {
    return(
        <div>
            <Header />
                <BooksContainer />
            <Footer />
        </div>
    )
}

export default BooksSports;