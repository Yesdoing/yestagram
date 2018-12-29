import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Switch, Route } from 'react-router-dom';
import Auth from '../Auth';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Feed from 'components/Feed';
import Explore from 'components/Explore';
import Search from 'components/Search';
import Profile from 'components/Profile';

const App = props => [
    props.isLoggedIn ? <Navigation key={0} /> : null,
    props.isLoggedIn ? <PrivateRoute key={1} /> : <PublicRoute key={1} />,
    <Footer key={2} />
];

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};


const PrivateRoute = props => (
    <Switch className="main">
        <Route exact path="/" component={Feed} />
        <Route path="/explore" component={Explore}/>
        <Route path="/search/:searchTerm" component={Search} />
        <Route path="/profile" component={Profile} />
    </Switch>
);

const PublicRoute = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/recover" render={()=> "recover password"}/>
    </Switch>
)



export default App;
