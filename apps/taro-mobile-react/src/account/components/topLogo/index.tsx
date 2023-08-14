import {View} from '@tarojs/components';

import './index.scss';

import logo from './logo.png';

export const TopLogo = () => {
  return (
    <View className='topLogo'>
      <View className='logo' style={{
        backgroundImage: `url(${logo})`
      }}
      ></View>
    </View>
  )
}
