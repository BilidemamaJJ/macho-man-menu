// 包裹当前菜谱显示页面中的所有子组件或内容
import React, { Component } from 'react'
import HeaderNav from '@/components/HeaderNav'
import Swiper from '@/components/Swiper'
import Search from '@/components/Search'
import HotCate from '@/components/Hotcate'
import GoodDishes from '@/components/GoodDishes'
class Index extends Component {
    render() {
        return (
            <>
                <HeaderNav />
                <Swiper />
                <Search />
                <HotCate />
                <GoodDishes />
            </>
        )
    }
}

export default Index