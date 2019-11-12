import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import DeviceInstall from './components/Devices/DeviceInstall'
import DeviceRegister from './components/Devices/DeviceRegister'

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
            <BrowserRouter>
                <Switch>
                    <Route exact path="/access" component={Login} />
                    <Route exact path="/access/dashboard" component={Dashboard} />
                    <Route exact path="/access/devices1" component={DeviceInstall} />
                    <Route exact path="/access/devices2" component={DeviceRegister} />
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Router;