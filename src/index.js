// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Components import
import App from './components/app';

// Reducers import
import reducers from './reducers/index';

// Store definition with Middleware applying and Rendering of React Document Object Model
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, document.querySelector('#react-application')
);