// 包裹当前菜谱显示页面中的所有子组件或内容
import React, { Component } from 'react'
import HeaderNav from '@/components/HeaderNav'

class Index extends Component {
    render() {
        return (
            <>
                <HeaderNav />
            </>
        )
    }
}

export default Index