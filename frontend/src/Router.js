import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Devices from './components/Devices/Devices'

class Router extends Component {
    state = {
        pathname: ''
    }
    pathname = (e) => {
        if (e !== this.state.pathname) {
            this.setState({
                pathname: e
            })
        }
    }

    render() { 
        return (  
            <Switch>
                <Route exact path="/access" component={Login} />
                <Route exact path="/access/dashboard" component={Dashboard} />
                <Route exact path="/access/devices" component={Devices} />
            </Switch>
        );
    }
}
 
export default Router;