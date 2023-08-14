import { useComponent } from '@brushes/simulate-component';
import type { FC, MutableRefObject } from 'react';
import { NoData } from './noData';
import type { CouponListProps } from '../index';

interface CouponItemProps extends Omit<CouponListProps, 'paddingBottom' | 'paddingTop'> {
  list: Array<any>;
  coe: MutableRefObject<number>;
  config: MutableRefObject<any>;
}

export const CouponItem: FC<CouponItemProps> = ({ list, coe, config, backgroundColor, color }) => {
  const { View, Text } = useComponent();
  return (
    <>
      {list.length ? (
        list.map((item: any, index: number) => {
          return (
            <View
              className={`couponListItem
                   ${config.current[coe.current]['styleName']}`}
              key={index}
              style={{ backgroundColor, color }}
            >
              <View className={'coupon-content'}>
                <View className={'price'}>
                  {/*<Text className={'symbol'}>￥</Text>*/}
                  <Text className={'num'}>{item.pbName}</Text>
                </View>
                <View className={'couponListItem-info'}>
                  <Text className={'title'}>{item.discName}</Text>
                  <Text className={'date'}>
                    有效期至：
                    {`${new Date(item.gmtModified).getFullYear()}-${
                      new Date(item.gmtModified).getMonth() + 1
                    }-${new Date(item.gmtModified).getDate()}`}
                  </Text>
                  {config.current[coe.current]['text'] ? (
                    <View className={'btn'}>{config.current[coe.current]['text']}</View>
                  ) : null}

                  {coe.current === 2 ? (
                    <>
                      <View className={'round'}>已失效</View>
                    </>
                  ) : null}
                </View>
              </View>
            </View>
          );
        })
      ) : (
        <NoData />
      )}
    </>
  );
};
