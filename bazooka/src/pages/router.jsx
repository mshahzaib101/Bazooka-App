import React from 'react';
import {Route,Router, Link} from 'react-router-dom';
import history from './history'; //a seprate history file
import HomePage from './home-page';
import PublishAdd from './publishAdd-page';
import Vehicles from './subRoutes/vehicles';
import Property from './subRoutes/property';
import Others from './subRoutes/others';
import Mobiles from './subRoutes/mobiles';
import Electronics from './subRoutes/electronics';
import Clothing from './subRoutes/clothing';
import BooksSports from './subRoutes/books-sports';
import Bikes from './subRoutes/bikes';
import Animals from './subRoutes/animals';
import Furniture from './subRoutes/furniture';
import AdPreview from './adPreview';
import UserDashboardPage from './userDashboard';
import SearchPage from './search';


//creating a pure custom routes element
const CustomRoutes = () => {
    return(
        <Router history={history}>
            <div>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/publish-Add' component={PublishAdd} />
                <Route exact path='/vehicles' component={Vehicles} />
                <Route exact path='/property' component={Property} />
                <Route exact path='/others' component={Others} />
                <Route exact path='/mobiles' component={Mobiles} />
                <Route exact path='/electronics-&-Home-Appliances' component={Electronics} />
                <Route exact path='/clothing' component={Clothing} />
                <Route exact path='/books-and-sports' component={BooksSports} />
                <Route exact path='/bikes' component={Bikes} />
                <Route exact path='/animals' component={Animals} />
                <Route exact path='/furniture-&-Home-Decor' component={Furniture} />
                <Route exact path='/ad-preview' component={AdPreview} />
                <Route exact path='/user-dashboard' component={UserDashboardPage} />
                <Route exact path='/search-ads' component={SearchPage} />
                 {/* <Route exact path='/dashboard' component={Dashboard} /> */}
                {/*<Route path='/' component={} />
                <Route path='/' component={} /> */}

            </div>
        </Router>
    )
}

export default CustomRoutes;