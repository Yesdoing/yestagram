import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Footer from 'components/Footer';
import { Switch, Route } from 'react-router-dom';
import Auth from '../Auth';

const App = props => [
    // Nav,
    props.isLoggedIn ? <PrivateRoute key={1} /> : <PublicRoute key={1} />,
    <Footer key={2} />
];

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};


const PrivateRoute = props => (
    <Switch>
        <Route exact path="/" render={() => "Feed"}/>
        <Route path="/explore" render={()=>"explore"}/>
    </Switch>
);

const PublicRoute = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/recover" render={()=> "recover password"}/>
    </Switch>
)



export default App;
