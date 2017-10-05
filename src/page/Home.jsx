import React, {Component} from 'react';
import {items} from '../constents/home';
import Swipe from 'react-swipe';

import '../style/home.less';

const pfx = (window.innerWidth < 800) ? '?x-oss-process=style/percent50' : '';
const swipeOptions = {
    startSlide: 0,
    speed: 500,
    auto: 5000,
    continuous: true,
    disableScroll: true
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items,
            enableSlider: false
        }
    }
    componentDidMount() {
        const self = this;
        let timer = setTimeout(()=> {
            clearTimeout(timer);
            self.setState({
                enableSlider: true
            })
        }, 2000);
    }
    onClick(id) {
        return (e)=> {
            location.href='./list.html?id=' + id;
        }
    }
    render() {
        const {items, enableSlider} = this.state;
        const $target = items.map((item, index)=> {
            const {url, doc, slider, id} = item;
            const style = {
                backgroundImage: "url(" + url + pfx + ")"
            }
            return <div className="item" key={index} style={style} onClick={this.onClick(id)}>
                {
                    enableSlider ? <Swipe className="slider" swipeOptions={swipeOptions}>
                    {
                        slider.map((s, key)=> {
                            s += pfx;
                            return <div key={"s-" + key}><img src={s} className="image" /></div>
                        })
                    }
                </Swipe> : null
                }
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