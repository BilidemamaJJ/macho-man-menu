import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import Request from "@/http/request"
import { Swiper } from "@/config/uri"

class Index extends Component {
    state = {
        data: [1, 2, 3],
        imgHeight: 176,
        flag: false,
    }
    async componentDidMount() {
        try {
            let request = await Request.get(Swiper)
            if (request.data.code === 0) {
                this.setState(() => ({
                    data: request.data.data, flag: true
                }))
            }
        } catch (error) {

        }
    }
    render() {
        return (
            <>
                {/* 逻辑运算符&&的特性，如果前面为假则后面的表达式就不会执行。当然如果不习惯你可以写成if判断 */}
                {this.state.flag && (
                    <Carousel autoplay={true} infinite>
                        {this.state.data.map((val, index) => (
                            <img
                                key={index}
                                src={val.img}
                                alt=""
                                style={{ width: "100%", verticalAlign: "top" }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event("resize"));
                                    this.setState({ imgHeight: "auto" });
                                }}
                            />
                        ))}
                    </Carousel>
                )}

            </>
        );
    }
}

export default Index