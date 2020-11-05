import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

import cb from "@/assets/icon/cookbook.png";
import cbActive from "@/assets/icon/cookbook-active.png";
import category from "@/assets/icon/menu.png";
import categoryActive from "@/assets/icon/menu-active.png";
import loc from "@/assets/icon/location.png";
import locActive from "@/assets/icon/location-active.png";
import more from "@/assets/icon/more.png";
import moreActive from "@/assets/icon/more-active.png";

import CookbookCmp from '@/views/Cookbook/cookbook'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'menuTab',
            hidden: false,
            fullScreen: true,
        };
    }

    render() {
        return (
            <>
                <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="black"
                        barTintColor="#fff"
                        hidden={this.state.hidden}
                    >
                        <TabBar.Item
                            title="菜谱"
                            key="menu"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${cb}) center center /  21px 21px no-repeat`
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${cbActive}) center center /  21px 21px no-repeat`
                            }}
                            />
                            }
                            selected={this.state.selectedTab === 'menuTab'}
                            // badge={1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'menuTab',
                                });
                            }}
                            data-seed="logId"
                        >
                            <CookbookCmp></CookbookCmp>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${category}) center center /  21px 21px no-repeat`
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${categoryActive}) center center /  21px 21px no-repeat`
                                }}
                                />
                            }
                            title="分类"
                            key="category"
                            // badge={'new'}
                            selected={this.state.selectedTab === 'categoryTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'categoryTab',
                                });
                            }}
                            data-seed="logId1"
                        >
                            分类内容
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${loc}) center center /  21px 21px no-repeat`
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${locActive}) center center /  21px 21px no-repeat`
                                }}
                                />
                            }
                            title="地图"
                            key="location"
                            // dot
                            selected={this.state.selectedTab === 'locationTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'locationTab',
                                });
                            }}
                        >
                            地图
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: `${more}` }}
                            selectedIcon={{ uri: `${moreActive}` }}
                            title="更多"
                            key="more"
                            selected={this.state.selectedTab === 'moreTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'moreTab',
                                });
                            }}
                        >
                            更多
                        </TabBar.Item>
                    </TabBar>
                </div>
            </>
        );
    }
}

export default Index