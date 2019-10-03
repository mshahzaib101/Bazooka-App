import React, { Component } from 'react';
import DisplayImg from '../components/optianal-img';
import Header from '../containers/header';
import Footer from '../components/footer';
import UserDashboardContainer from '../containers/user-dashboard';



class UserDashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <div>
                <Header />
                <DisplayImg displayTextonImg='Dashboard' />
                <UserDashboardContainer />
                <Footer />
            </div>
        )
    }
}

export default UserDashboardPage;