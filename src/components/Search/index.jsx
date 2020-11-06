import React, { Component } from 'react'
import { SearchBar, WhiteSpace } from 'antd-mobile'

class Search extends Component {
    render() {
        return (
            <>
                <WhiteSpace />
                <SearchBar placeholder="想吃什么就来这里搜，如大臭脚丫子" maxLength={10} />
                <WhiteSpace />
            </>
        )
    }
}

export default Search