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
        //TODO在这里做数据初始化
    }
    render() {
        const {status} = this.props;
        let Page = null;
        switch(status.current) {
            case 'home':
                Page = Home;
        }
        return <Page {...this.props} />
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