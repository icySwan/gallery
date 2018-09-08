import './style/index.less';
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from "react-router";

import initReactFastClick from 'react-fastclick';
import reducer from './reducer';
import Home from './Home';
import List from './List';

initReactFastClick();

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    connectRouter(history)(reducer),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
    ),
);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div> { /* your usual react-router v4 routing */}
                <Switch>
                    <Route exact path="/list.html" component={List} />
                    <Route component={Home} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('App')
)
