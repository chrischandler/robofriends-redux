import React from 'react';
import ReactDOM from 'react-dom';

// Next two imports added for Redux to work
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

// Added for redux-logger to be used
import { createLogger } from 'redux-logger';

//Added for redux-thunk to be used
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

// For redux-logger to be used
const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots});
// Create a Redux store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();