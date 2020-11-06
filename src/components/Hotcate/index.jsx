import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import Request from "@/http/request";
import { Hotcate } from "@/config/uri";

class Index extends Component {
    state = {
        data: [],
    }
    async componentDidMount() {
        try {
            let ret = await Request.get(Hotcate)
            if (ret.data.code === 0) {
                let data = [];
                ret.data.data.map((item, index) => {
                    data.push({
                        text: item.title,
                        id: item.id,
                    })
                    return data
                })
                data.push({ text: "更多>>", id: 0 })
                this.setState(() => ({ data }))
            }
        } catch (error) {
            console.log('Error');
        }
    }
    render() {
        return (
            <>
                <div className="district">
                    <span>热门分类</span>
                </div>
                <Grid
                    data={this.state.data}
                    square={false}
                    className="not-square-grid"
                    onClick={(_el) => this.clickHandler(_el)}
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