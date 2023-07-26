//@ts-nocheck
import { Component, PropsWithChildren } from 'react'
import { setTaro, getStorage, getTaro } from '@brushes/utils';
import { fly, wxEngine } from "@brushes/request";
import { initApplication } from '@brushes/taro-hooks';
import {appendPath, tabBarList} from '@/routerMap';
import { queryNewTginfoMenuTree, getPfsModelTagValueByTginfo } from 'qj-b2c-api';
import {safeArea} from "./utils";
import './app.scss'

// eslint-disable-next-line import/no-commonjs
const Taro = require('@tarojs/taro');

setTaro(Taro);
class App extends Component<PropsWithChildren, any> {

  componentDidMount () {
    console.log(85, '================ componentDidShow ==============')
    /**
     * 初始化应用
     */
    //@ts-ignore
    initApplication({
      tabBar: tabBarList,
      subpackage: appendPath,
      menuTreeIo: queryNewTginfoMenuTree,
      pageInfoIo: getPfsModelTagValueByTginfo
    });

    safeArea()

    if(Taro.getEnv() === 'WEB'){
      fly.engine= XMLHttpRequest
    } else {
      wxEngine()
    }
    //
    fly.interceptors.request.use((config) => {
      //给所有请求添加自定义header
      config.headers = {
        'saas-token': getStorage('saas-token'),
      }

      config.baseURL = process.env.REACT_APP_BASE_URL;

      if(Taro.getEnv() !== 'WEB') {
        config.headers['Saas-Agent'] = 'qj-wemini';
      }
      if(Taro.getEnv() === 'WEB' && process.env.NODE_ENV === 'production') {
        config.baseURL = location.origin + '/'
      }
      return config;
    })
    // /**
    //  * 初次加载判断网络情况
    //  * 无网络状态下根据实际情况进行调整
    //  */
    // wx.getNetworkType({
    //   success(res) {
    //     const networkType = res.networkType
    //     if (networkType === 'none') {
    //       // that.globalData.isConnected = false
    //       wx.showToast({
    //         title: '当前无网络',
    //         icon: 'loading',
    //         duration: 2000
    //       })
    //     }
    //   }
    // });
    // /**
    //  * 监听网络状态变化
    //  * 可根据业务需求进行调整
    //  */
    // wx.onNetworkStatusChange(function(res) {
    //   if (!res.isConnected) {
    //     // that.globalData.isConnected = false
    //     wx.showToast({
    //       title: '网络已断开',
    //       icon: 'loading',
    //       duration: 2000
    //     })
    //   } else {
    //     // that.globalData.isConnected = true
    //     wx.hideToast()
    //   }
    // })
  }

  componentDidShow () {

  }

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
