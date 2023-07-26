// @ts-nocheck
import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { config } from '../config';

const result = {
  errorCode: null,
  sysRecode: 'success',
  msg: '操作成功',
  dataObj: {},
  success: true
};

const { sysRecode, msg } = result;

const PlaceOrderResultIconJsx: React.FC = () => {
  const { View, Text, IconMobile } = useComponent();
  return (
    <>
      <IconMobile value={config.success.icon.img} style={{ fontSize: '35px', color: '#2ed82e' }} />
      <View className={'tips'}>
        <Text className={'title'}>支付中</Text>
      </View>
    </>
  );
};

export const PlaceOrderResultIcon = memo(PlaceOrderResultIconJsx);
