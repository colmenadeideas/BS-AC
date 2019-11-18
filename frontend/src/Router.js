import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing'
import PayPlans from './components/Affiliation/PayPlans'
import Form from './components/Affiliation/Form'
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
                <Route exact path="/access/login" component={Login} />
                <Route exact path="/access" component={Landing} />
                <Route exact path="/access/affiliation/form" component={Form} />
                <Route exact path="/access/affiliation/payplans" component={PayPlans} />
                <Route exact path="/access/dashboard" component={Dashboard} />
                <Route exact path="/access/devices" component={Devices} />
            </Switch>
        );
    }
}
 
export default Router;