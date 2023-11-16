//@ts-nocheck;
import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import { setTaro, getStorage } from '@brushes/utils';
import { fly, wxEngine } from "@brushes/request";
import { initApplication, setMaterial } from '@brushes/taro-hooks';
import {appendPath, tabBarList} from '@/routerMap';
import { queryNewTginfoMenuTree, getPfsModelTagValueByTginfo } from 'qj-b2c-api';
import * as materials from 's-material-react';
import {safeArea} from "./utils";
import './app.scss'

// eslint-disable-next-line import/no-commonjs
const Taro = require('@tarojs/taro')

setTaro(Taro);
function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    setMaterial(materials);
    /**
     * 初始化应用
     */
    //@ts-ignore
    initApplication({
      tabBar: tabBarList,
      subpackage: appendPath,
      menuTreeIo: queryNewTginfoMenuTree,
      pageInfoIo: getPfsModelTagValueByTginfo,
    });

    safeArea()

    if(Taro.getEnv() === 'WEB'){
      fly.engine = XMLHttpRequest
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
  })

  // children 是将要会渲染的页面
  return children
}

export default App
