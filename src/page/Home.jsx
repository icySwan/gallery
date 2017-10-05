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
    onClick(id) {
        return (e)=> {
            location.hash = '#list';
            this.props.showList && this.props.showList(id);
        }
    }
    render() {
        const {items} = this.state;
        const $target = items.map((item, index)=> {
            const {url, doc, slider, id} = item;
            const style = {
                backgroundImage: "url(" + url + ")"
            }
            return <div className="item" key={index} style={style} onClick={this.onClick(id)}>
                <Swipe className="slider" swipeOptions={swipeOptions}>
                    {
                        slider.map((s, key)=> {
                            return <div key={"s-" + key}><img src={s} className="image" /></div>
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