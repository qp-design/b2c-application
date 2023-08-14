import React, {memo, useRef} from 'react';
import { useComponent } from '@brushes/simulate-component';
import {navigatorHandler} from "@brushes/utils";
import {IconMobile} from '@brushes/simulate-component';

const MyAgreementListJsx: React.FC = () => {
  const { View } = useComponent();

  const goDetail = (agreeType: string) => {
    navigatorHandler(`/account/agreement/index?type=${agreeType}`)
  }

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
  );
};

export const MyAgreementList = memo(MyAgreementListJsx);
