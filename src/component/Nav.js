import React, {Component} from 'react';

import '../style/nav.less';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.current || 'home'
        }
    }
    onClick(target) {
        return (e)=> {
            if(target === 'home') {
                location.href = '/index.html';
            } else {
                location.href = '/list.html';
            }
        }
    }
    render() {
        const {current} = this.state;
        const homeClassName = (current === 'home') ? ' selected' : '';
        const listClassName = (current === 'home') ? '' : ' selected';
        return <div className="nav">
            {
                (current === 'home') ? null: <div className="back" onClick={()=>{history.back()}}></div>
            }
            <div onClick={this.onClick('home')} className={"nav-cell" + homeClassName}>Home</div>
            <div onClick={this.onClick('gallery')} className={"nav-cell" + listClassName}>Gallery</div>
        </div>;
    }
}

export default Nav;