import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Home from './page/home';
import initReactFastClick from 'react-fastclick';
import * as Actions from './action/index';

initReactFastClick();

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return <Home {...this.props} />
    }
}

const mapStateToProps = (state)=> {
    return {
        status: state.status
    }
}

const mapDispatchToProps = (dispatch)=> {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);