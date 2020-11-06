import React, { Component } from 'react'
// 底部导航
import Layout from '@/components/Layout/index'
// 引入全局样式
import GlobalStyle from './style'

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Layout></Layout>
            </>
        )
    }
}

export default App