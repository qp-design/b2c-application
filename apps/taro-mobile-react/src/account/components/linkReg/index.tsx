import {View} from '@tarojs/components';
import Taro from '@tarojs/taro';

export const LinkReg = () => {
  const goReg = () => {
    Taro.navigateTo({
      url: 'account/register/index'
    })
  }

  return (
    <View onClick={goReg} style={{paddingRight: '10px'}}>注册</View>
  )
}
