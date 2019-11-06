import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

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
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Router;