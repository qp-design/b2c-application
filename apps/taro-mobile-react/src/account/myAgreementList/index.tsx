import {useRef} from "react";
import { View } from '@tarojs/components';
import HeaderJsx from "@/components/header";
import {useAgreement} from "@/account/hooks";
import {IconMobile} from '@brushes/simulate-component';
import './index.scss'

const Index = () => {
  const {goDetail} = useAgreement()
  const config = useRef([
    {
      label: '用户协议',
      type: 'xieyi'
    },
    {
      label: '隐私协议',
      type: 'yinsi'
    }
  ])

  return (
    <View className='myAgreementList'>
      <HeaderJsx />
      <View className='list'>
        {
          config.current.map((item, index) => {
            return (
              <View
                key={index}
                className='item'
                onClick={goDetail.bind(null, item.type)}
              >
                <View>{item.label}</View>
                <View><IconMobile value='xiangyou1' /></View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}


export default Index;
