import React from 'react';
import style from './styles.scss';
import Footer from 'components/Footer';
import { Switch, Route } from 'react-router-dom';

const App = props => [
    // Nav,
    props.isLoggedIn ? <PrivateRoute key={1} /> : <PublicRoute key={1} />,
    <Footer key={2} />
];

const PrivateRoute = props => (
    <Switch>
        <Route exact path="/" render={() => "Feed"}/>
        <Route path="/explore" render={()=>"explore"}/>
    </Switch>
);

const PublicRoute = props => (
    <Switch>
        <Route exact path="/" render={() => "login"} />
        <Route path="/recover" render={()=> "recover password"}/>
    </Switch>
)



export default App;
