import React from 'react';
import Router from './Router'

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <Router />
            </div>
        </Provider>
    );
}

export default App;
