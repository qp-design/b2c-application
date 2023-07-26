// @ts-nocheck
import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { OneLineOneBlc } from './components/oneLineOneBlc';
import { OneLineTwoBlc } from './components/oneLineTwoBlc';

interface defaultType {
  [v: string]: any;
}
interface initialGetCoupon extends defaultType {
  type: number;
  coupons: Array<any>;
}

const GetCouponOneJsx: React.FC<initialGetCoupon> = ({ type = 1, coupons = [], ...restProps }) => {
  const { View } = useComponent();

  return (
    <View className={'getCouponOne'}>
      {type === 1 ? <OneLineOneBlc coupons={coupons} {...restProps} /> : null}
      {type === 2 ? <OneLineTwoBlc coupons={coupons} {...restProps} /> : null}
    </View>
  );
};

export const GetCouponOne = memo(GetCouponOneJsx);
