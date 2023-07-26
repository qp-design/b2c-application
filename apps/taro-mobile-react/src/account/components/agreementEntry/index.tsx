import {View} from '@tarojs/components';
import {useAgreement} from "../../hooks";

import './index.scss'

export const AgreementEntry = () => {
  const {goDetail} = useAgreement()


  return (
    <View className='agreement'>
      注册和登录即代表同意 《<View className='link' onClick={goDetail.bind(null, 'xieyi')}>用户协议</View>》 和 《<View className='link' onClick={goDetail.bind(null, 'yinsi')}>隐私政策</View>》
    </View>
  )
}
