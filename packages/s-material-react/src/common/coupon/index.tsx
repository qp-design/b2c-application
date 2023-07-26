//@ts-nocheck
import { memo, useMemo } from 'react';
import dayjs from 'dayjs';
import { useAddCoupon, initialCoupon } from 'qj-mobile-store';
import { useComponent } from '@brushes/simulate-component';

const CouponJsx = ({
  promotionBegintime,
  pbName,
  discName,
  promotionCode,
  promotionName,
  couponOnceNums,
  couponOnceNumd,
  promotionEndtime
}: typeof initialCoupon) => {
  const { View, Text } = useComponent();
  const { save, isPick } = useAddCoupon();

  const isRest = useMemo(() => {
    return couponOnceNums - couponOnceNumd;
  }, [couponOnceNums, couponOnceNumd]);

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
            {dayjs(promotionBegintime).format('YYYY-MM-DD')} - {dayjs(promotionEndtime).format('YYYY-MM-DD')}
          </Text>
        </View>
        {isRest > 0 ? (
          <View
            className={isPick ? 'coupon-pick-default' : 'coupon-pick'}
            onClick={() => save({ promotionCode, couponAmount: 1 })}
          >
            {isPick ? '已领取' : '领取'}
          </View>
        ) : (
          <View className={'coupon-pick-default'}>已领完</View>
        )}
      </View>
    </View>
  );
};

export const Coupon = memo(CouponJsx);
