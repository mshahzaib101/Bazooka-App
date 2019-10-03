import React, { Component } from 'react';
import Header from '../containers/header';
import Footer from '../components/footer';
import SearchContainer from '../containers/searchBar';


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <div>
                <Header />
                <SearchContainer />
                <Footer />
            </div>
        )
    }
}

export default SearchPage;