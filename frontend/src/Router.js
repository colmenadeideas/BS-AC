import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login'

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
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Router;