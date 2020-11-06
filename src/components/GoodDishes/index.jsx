import React, { Component } from 'react'
import { Grid, WhiteSpace } from 'antd-mobile'
import Request from "@/http/request";
import { GoodDishes } from "@/config/uri";

class Index extends Component {
    state = {
        data: [],
    }
    async componentDidMount() {
        try {
            let ret = await Request.get(GoodDishes)
            if (ret.data.code === 0) {
                let data = [];
                ret.data.data.map((item, index) => {
                    data.push({
                        text: item.title,
                        id: item.id,
                        icon: item.img,
                        views: item.views,
                        favorite: item.favorite
                    })
                    return data
                })
                this.setState(() => ({ data }))
            }
        } catch (error) {
            console.log('Error');
        }
    }
    render() {
        return (
            <>
                <WhiteSpace />
                <div className="district gooddishes">
                    <span>精品好菜</span>
                </div>
                <Grid
                    columnNum={2}
                    data={this.state.data}
                    square={false}
                    className="not-square-grid"
                    onClick={(_el) => this.clickHandler(_el)}
                    itemStyle={{ background: '#f5f5f5' }}
                    renderItem={dataItem => (
                        <div style={{ padding: '0 12.5px' }}>
                            <div style={{ background: '#fff' }}>
                                <img src={dataItem.icon} style={{ width: '100%' }} alt="" />
                                <div style={{ color: '#000', fontSize: '14px', marginTop: '12px' }}>
                                    <p><span>{dataItem.text}</span></p>
                                    <p style={{ color: '#969696', fontSize: '10px' }}>
                                        <span>{dataItem.views} 浏览</span>
                                        &nbsp;&nbsp;&nbsp;
                                        <span>{dataItem.favorite} 收藏</span>
                                    </p>
                                    <WhiteSpace />
                                </div>
                            </div>
                        </div>
                    )}
                />
            </>
        )
    }
    clickHandler = (el) => {
        console.log(el);
        // 编程式导航走起
    }
}

export default Index