import './style/index.less';
import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import Home from './Home';
import List from './List';

const middleware = [thunk];
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

let path = location.href.split('?')[0].split('/');
path = path.pop().split('.')[0];

let Page = Home;;
if(path === 'list') {
    Page = List;
}
render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('App')
)
