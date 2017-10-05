import React, {Component} from 'react';
import {items} from '../constents/home';

import '../style/home.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items
        }
    }
    render() {
        const {items} = this.state;
        const $target = items.map((item, index)=> {
            const {url, doc} = item;
            const style = {
                backgroundImage: "url(" + url + ")"
            }
            return <div className="item" key={index} style={style}>
                <div className="doc">
                    <h2 className="title">{doc.title}</h2>
                    <p className="des">{doc.des}</p>
                </div>
            </div>
        })
        return <div className="home">{$target}</div>;
    }
}

export default Home;