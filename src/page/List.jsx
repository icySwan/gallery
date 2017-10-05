import React, {Component} from 'react';
import {getList} from '../constents/images';
import Swipe from 'react-swipe';

import '../style/list.less';

const pfx = (window.innerWidth < 800) ? '?x-oss-process=style/percent50' : '';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: getList(this.props.query.data),
            lastIndex: 0
        }
    }
    onClick() {
        return (e)=> {
            let {lastIndex} = this.state;
            this.setState({
                lastIndex: ++lastIndex
            });
        }
    }
    onShow(target) {
        return (e)=> {
            this.setState({
                target
            });
        }
    }
    onHide() {
        return (e)=> {
            this.setState({
                target: null
            });
        }
    }
    render() {
        const {list, lastIndex, target} = this.state;
        const listForShow = list.slice(0, 10 * (1 + lastIndex));
        return <div className="list">
            {
                listForShow.map((item, index)=> {
                    if(item) {
                        return <img src={item + pfx} onClick={this.onShow(item)} className="cell" key={index} />
                    }
                })
            }
            {
                target ? <div className="show" onClick={this.onHide()}>
                    <img src={target} className="show-img"/>
                </div>: null
            }
            <div className="more" onClick={this.onClick()}>click to load more...</div>
        </div>;
    }
}

export default List;