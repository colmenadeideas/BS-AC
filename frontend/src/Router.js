import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing'
import PayPlans from './components/Affiliation/PayPlans'
import Form from './components/Affiliation/Form'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Devices from './components/Devices/Devices'

/*ale */
import PaymentSuccess from './components/PaymentSuccess/PaymentSuccess'
import FinishSetting from './components/FinishSetting/FinishSetting'
/*end ale */
class Router extends Component {

    render() { 
        return (  
            <Switch>
                <Route exact path="/access/login" component={Login} />
                <Route exact path="/access" component={Landing} />
                <Route exact path="/access/affiliation/form" component={Form} />
                <Route exact path="/access/affiliation/payplans" component={PayPlans} />
                <Route exact path="/access/dashboard" component={Dashboard} />
                <Route exact path="/access/devices" component={Devices} />
                {/* ale */}
                <Route exact path="/access/paymentsuccess" component={PaymentSuccess} />
                <Route exact path="/access/finishsetting" component={FinishSetting} />
                {/* end ale */}
            </Switch>
        );
    }
}
 
export default Router;