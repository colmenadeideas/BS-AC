import React from 'react';
import { BrowserRouter} from 'react-router-dom';

//import history from './helpers/history'
import Router from './Router'

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrash, faEye, faBars, faUser, faMobile, faBell, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap';


function App() {
    //aca se agregan los iconos a exportar de fontawesome, para mas informacion ir a este link: 
    //https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently
    library.add(fab, faTrash, faEye, faBars, faUser, faMobile, faBell, faCheck, faPlus, faUser)

    return (
        <BrowserRouter >
            <Provider store={store}>
                <div className="container">
                    <Router />
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
