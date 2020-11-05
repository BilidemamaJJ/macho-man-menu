import React, { Component } from 'react'
// 底部导航
import Layout from '@/components/Layout/index'
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