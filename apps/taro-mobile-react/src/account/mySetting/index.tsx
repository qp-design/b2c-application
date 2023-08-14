import { View } from '@tarojs/components';
import HeaderJsx from "@/components/header";
import {IconMobile} from '@brushes/simulate-component';
import Taro from '@tarojs/taro';
import {miniLogout} from 'qj-b2c-api';
import {routerMap} from "qj-mobile-store";
import './index.scss'

const Index = () => {

  const goBind = () => {
    Taro.navigateTo({
      url: routerMap.confirmPhone
    })
  }

  const logout = async () => {
    try {
      await miniLogout();
      Taro.removeStorage({
        key: 'saas-token'
      })
      Taro.showToast({
        title: '操作成功',
        icon: 'success',
        duration: 1000
      })
      setTimeout(() => {
        Taro.switchTab({
          url: routerMap.index
        })
      }, 1000)
    }catch (err) {
      console.log(err)
    }
  }

  return (
    <View className='mySetting'>
      <HeaderJsx />
      <View className='item' onClick={goBind}>
        <View>绑定手机</View>
        <View><IconMobile value='xiangyou1' /></View>
      </View>

      <View className='btn' onClick={logout}>退出登录</View>
    </View>

  )
}


export default Index;
