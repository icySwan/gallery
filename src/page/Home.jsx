import React, {Component} from 'react';
import {items} from '../constents/home';
import Swipe from 'react-swipe';

import '../style/home.less';

const swipeOptions = {
    startSlide: 0,
    speed: 500,
    auto: 3000,
    continuous: true
}

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
            const {url, doc, slider} = item;
            const style = {
                backgroundImage: "url(" + url + ")"
            }
            return <div className="item" key={index} style={style}>
                <Swipe className="slider" swipeOptions={swipeOptions}>
                    {
                        slider.map((s, key)=> {
                            return <div><img src={s} key={"s-" + key} className="image" /></div>
                        })
                    }
                </Swipe>
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