import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Home from './page/home';
import List from './page/list';
import initReactFastClick from 'react-fastclick';
import * as Actions from './action/index';

initReactFastClick();

class App extends Component {
    constructor(props) {
        super(props);
    }
    hashHandler() {
        return ()=> {
            if(!location.hash) {
                if(this.props.status.current !== 'home') {
                    this.props.changeCurrent && this.props.changeCurrent('home');
                }
            } else {
                const current = location.hash.replace(/#/g, '');
                this.props.changeCurrent && this.props.changeCurrent(current);
            }
        }
    }
    componentDidMount() {
        if(location.hash) {
            location.hash = '';
        }
        window.onhashchange = this.hashHandler();
    }
    render() {
        const {status} = this.props;
        let Page = null;
        switch(status.current) {
            case 'home':
                Page = Home;
                break;
            case 'list':
                Page = List;
                break;
            default:
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