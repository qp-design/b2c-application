import { memo } from 'react';
import dayjs from 'dayjs';
import { useComponent } from '@brushes/simulate-component';
const CouponJsx = ({ couponStart, pbName, discName, promotionCode, promotionName, couponEnd }: any) => {
  const { View, Text, Radio } = useComponent();
  return (
    <View className="couponItem">
      <View className={'coupon-content'}>
        <View className={'price'}>
          <View className={'symbol'}>{pbName}</View>
          <View className={'num'}>{discName}</View>
        </View>
        <View className={'info'}>
          <Text className={'title'}>{promotionName}</Text>
          <Text className={'date'}>
            {dayjs(couponStart).format('YYYY-MM-DD')} - {dayjs(couponEnd).format('YYYY-MM-DD')}
          </Text>
        </View>
        <View className={'choose'}>
          <Radio value={promotionCode}></Radio>
        </View>
      </View>
    </View>
  );
};

export const Coupon = memo(CouponJsx);
