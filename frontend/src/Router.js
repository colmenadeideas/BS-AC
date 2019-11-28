import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import ConfirmPass from './components/Login/ConfirmPass'
import Logout from './components/Logout/Logout'

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
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/authenticate/:id/:mail" component={ConfirmPass} />
                <Route exact path="/logout" component={Logout} />

                <Route exact path="/dashboard" component={Dashboard} />

                <Route exact path="/affiliation/form" component={Form} />
                <Route exact path="/affiliation/payplans" component={PayPlans} />
                <Route exact path="/affiliation/payment" component={Payment} /> 
                <Route exact path="/affiliation/paymentsuccess" component={PaymentSuccess} />
                
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/addemployee" component={AddEmployee} />
                <Route exact path="/selectcarnet" component={SelectCarnet} />
                <Route exact path="/finishsetting" component={FinishSetting} />

                <Route exact path="/devices" component={Devices} />
                <Route exact path="/devices/install" component={DeviceInstall} /> 

                <Route exact path="/carnet/preview" component={CarnetPreview} /> 

            </Switch>
        );
    }
}
 
export default Router;