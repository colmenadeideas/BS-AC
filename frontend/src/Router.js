import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

import PayPlans from './components/Affiliation/PayPlans'
import Form from './components/Affiliation/Form'
import Payment from './components/Affiliation/Payment'
import PaymentSuccess from './components/Affiliation/PaymentSuccess'

import Welcome from './components/Welcome/Welcome'
import AddEmployee from './components/AddEmployee/AddEmployee';
import SelectCarnet from './components/Welcome/SelectCarnet'
import FinishSetting from './components/Welcome/FinishSetting'

import Devices from './components/Devices/Devices'
import DeviceInstall from './components/Devices/DeviceInstall'

import CarnetPreview from './components/Carnet/CarnetPreview'



class Router extends Component {

    render() { 
        return (  
            <Switch>
                <Route exact path="/access" component={Landing} />
                <Route exact path="/access/login" component={Login} />
                <Route exact path="/access/dashboard" component={Dashboard} />

                <Route exact path="/access/affiliation/form" component={Form} />
                <Route exact path="/access/affiliation/payplans" component={PayPlans} />
                <Route exact path="/access/affiliation/payment" component={Payment} /> 
                <Route exact path="/access/affiliation/paymentsuccess" component={PaymentSuccess} />
                
                <Route exact path="/access/welcome" component={Welcome} />
                <Route exact path="/access/addemployee" component={AddEmployee} />
                <Route exact path="/access/selectcarnet" component={SelectCarnet} />
                <Route exact path="/access/finishsetting" component={FinishSetting} />

                <Route exact path="/access/devices" component={Devices} />
                <Route exact path="/access/devices/install" component={DeviceInstall} /> 

                <Route exact path="/access/carnet/preview" component={CarnetPreview} /> 

            </Switch>
        );
    }
}
 
export default Router;