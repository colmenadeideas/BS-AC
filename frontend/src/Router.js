import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Landing from './components/Landing/Landing'

import PayPlans from './components/Affiliation/PayPlans'
import Form from './components/Affiliation/Form'
import Pay from './components/Affiliation/Pay'

import Welcome from './components/Welcome/Welcome'
import AddEmployee from './components/AddEmployee/AddEmployee';

import Devices from './components/Devices/Devices'
import DeviceInstall from './components/Devices/DeviceInstall'

import PaymentSuccess from './components/PaymentSuccess/PaymentSuccess'
import FinishSetting from './components/FinishSetting/FinishSetting'


class Router extends Component {

    render() { 
        return (  
            <Switch>
                <Route exact path="/access" component={Landing} />
                <Route exact path="/access/login" component={Login} />
                <Route exact path="/access/dashboard" component={Dashboard} />

                <Route exact path="/access/affiliation/form" component={Form} />
                <Route exact path="/access/affiliation/payplans" component={PayPlans} />
                <Route exact path="/access/affiliation/pay" component={Pay} /> 
                
                <Route exact path="/access/devices" component={Devices} />
                <Route exact path="/access/devices/install" component={DeviceInstall} /> 

                <Route exact path="/access/paymentsuccess" component={PaymentSuccess} />
                <Route exact path="/access/finishsetting" component={FinishSetting} />

                <Route exact path="/access/welcome" component={Welcome} />
                <Route exact path="/access/addemployee" component={AddEmployee} />
            </Switch>
        );
    }
}
 
export default Router;