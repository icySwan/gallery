import React, {Component} from 'react';
import {getList} from '../constents/images';
import Swipe from 'react-swipe';

import '../style/list.less';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: getList(this.props.query.data)
        }
    }
    render() {
        return <div className="list">list</div>;
    }
}

export default List;