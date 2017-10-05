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
    componentDidMount() {
        const self = this;
        window.onhashchange = (e)=> {
            const {newURL, oldURL} = e;
            if(!location.hash) {
                self.props.changeCurrent && self.props.changeCurrent('init');
            } else {
                const current = location.hash.replace(/#/g, '');
                self.props.changeCurrent && self.props.changeCurrent(current);
            }
        }
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