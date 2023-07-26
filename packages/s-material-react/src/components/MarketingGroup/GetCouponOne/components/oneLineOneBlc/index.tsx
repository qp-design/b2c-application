import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useAllCoupon } from 'qj-mobile-store';
import { get } from 'lodash-es';
import dayjs from 'dayjs';

const initialOneLineOneBlc = {
  defaultValue: [],
  coupons: [],
  bg: '',
  borderColor: '',
  btnColor: '',
  typeColor: '',
  ruleColor: '',
  titleColor: '',
  timeColor: '',
  paddingTop: 0,
  paddingBottom: 0
};

const OneLineOneBlcJsx: React.FC<typeof initialOneLineOneBlc> = ({
  defaultValue,
  coupons,
  bg,
  borderColor,
  btnColor,
  typeColor,
  titleColor,
  ruleColor,
  timeColor,
  paddingTop,
  paddingBottom
}) => {
  const { View } = useComponent();

  const { list, takeCoupon, takeList } = useAllCoupon({ defaultValue, coupons });

  return (
    <View
      style={{
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`
      }}
    >
      {list.map((item: any, index: number) => {
        const typeVal = get(item, 'pbName');
        const ruleArr = get(item, 'pmPromotionDiscountList');
        const ruleVal = get(ruleArr.at(-1), 'discName');
        const titleVal = get(item, 'promotionName');
        const start = dayjs(get(item, 'promotionBegintime')).format('YYYY-MM-DD');
        const end = dayjs(get(item, 'promotionEndtime')).format('YYYY-MM-DD');
        const promotionCode = get(item, 'promotionCode');

        return (
          <View
            className={'OneLineOneBlc'}
            key={index}
            style={{
              backgroundColor: bg,
              borderColor
            }}
          >
            <View className={'lPart'}>
              <View className={'intro'}>
                <View className={'type'} style={{ color: typeColor }}>
                  {typeVal}
                </View>
                <View className={'rule'} style={{ color: ruleColor }}>
                  {ruleVal}
                </View>
              </View>
              <View className={'info'}>
                <View
                  className={'title'}
                  style={{
                    color: titleColor
                  }}
                >
                  {titleVal}
                </View>
                <View
                  className={'validity'}
                  style={{
                    color: timeColor
                  }}
                >
                  {start} - {end}
                </View>
              </View>
            </View>
            <View
              className={'rPart'}
              style={{
                backgroundColor: btnColor
              }}
            >
              {item.availabledate === -1 || takeList.includes(index) ? (
                <View className={'txt'}>已 领 取</View>
              ) : (
                <View className={'txt'} onClick={() => takeCoupon({ promotionCode, couponAmount: 1, index })}>
                  立 即 领 取
                </View>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export const OneLineOneBlc = memo(OneLineOneBlcJsx);
