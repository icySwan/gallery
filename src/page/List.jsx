import React, {Component} from 'react';
import {getList} from '../constents/images';
import Nav from '../component/Nav';

import '../style/list.less';

const pfx = (window.innerWidth < 800) ? '?x-oss-process=style/percent50' : '';
class List extends Component {
    constructor(props) {
        super(props);
        let list = getList(this.props.query.data);

        let categoryLastIndex = {};
        let selectedCategory = null;
        if(list.length >=1 && list[0].category) {
            list.forEach((item, index)=> {
                if(index === 0) {
                    selectedCategory = item.category;
                }
                categoryLastIndex[item.category] = 0;
            });
        }
        const lastIndex = 0;

        this.state = {
            list,
            lastIndex,
            categoryLastIndex,
            selectedCategory
        }
    }
    onClick(category) {
        return (e)=> {
            if(category) {
                let {categoryLastIndex} = this.state;
                categoryLastIndex[category] = 1 + categoryLastIndex[category];
                this.setState({
                    categoryLastIndex
                })
            } else {
                let {lastIndex} = this.state;
                this.setState({
                    lastIndex: ++lastIndex
                });
            }
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
    // swipeEnd() {
    //     return (i, e)=> {
    //         const {selectedCategory, list} = this.state;
    //         const newCategory = list[i]['category'];
    //         if(selectedCategory !== newCategory) {
    //             this.setState({
    //                 selectedCategory: newCategory
    //             });
    //         }
    //     }
    // }
    onCategoryClick(index) {
        return (e)=> {
            const {selectedCategory, list} = this.state;
            const newCategory = list[index]['category'];

            if(selectedCategory !== newCategory) {
                this.setState({
                    selectedCategory: newCategory
                });
                window.scrollTo(0, 0);
            }
        }
    }
    render() {
        const {list, lastIndex, target, categoryLastIndex, selectedCategory} = this.state;
        //带分类的
        if(list.length >=1 && list[0].category) {
            return <div className="list with-category">
                <Nav current="gallery" />
                <div className="category-list">
                    {
                        list.map((item, index)=> {
                            const cls = selectedCategory === item.category ? " selected" : "";
                            return <div onClick={this.onCategoryClick(index)} className="cell" key={item.category}><span className={"txt" + cls}>{item.category}</span></div>
                        })
                    }
                </div>
                {
                    list.map((item, index)=> {
                        if(selectedCategory === item.category) {
                            const category = item.category;
                            const imgsForShow = item.imgs.slice(0, 10 * (1 + categoryLastIndex[category]));
                            return <div className="list-content" key={index}>
                                {
                                    imgsForShow.map((imgSrc, key)=> {
                                        if(imgSrc) {
                                            return <img src={imgSrc + pfx} onClick={this.onShow(imgSrc)} className="cell" key={key} />
                                        }
                                    })
                                }
                                <div className="more" onClick={this.onClick(category)}>click to load more...</div>
                            </div>
                        } else {
                            return null;
                        }
                    })
                }
                {
                    target ? <div className="show">
                        <img src={target} className="show-img"/>
                        <div className="close" onClick={this.onHide()}>X</div>
                    </div>: null
                }
            </div>
        } else {
            //普通的
            const listForShow = list.slice(0, 10 * (1 + lastIndex));
            return <div className="list">
                <Nav current="gallery" />
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
}

export default List;