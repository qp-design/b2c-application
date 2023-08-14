//@ts-nocheck
import { useEffect, useState, memo, useRef } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';
import { find } from 'qj-b2c-api';
import classNames from 'classnames';
import { QjMobileIcon } from '@/common/icon';
import { isEqual, isEmpty, get } from 'lodash-es';
import { fixPrice } from '@/utils';
export interface GoodsType {
  defaultValue: Array<{
    goodsCode: string | number;
    goodsName: string | number;
    dataPic: string;
    goodsSalesvolume: number;
    brandName: string | number;
    pricesetNprice: number;
    pricesetMakeprice?: number;
  }>;
  margin?: number;
  cell: number;
  gap?: number;
  showSales: boolean;
  goods: Array<never> | undefined;
  circular?: boolean;
  markedPrice?: number;
  classCode?: string;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  goodsName?: boolean;
  goodsPrice?: boolean;
  goodsCar?: boolean;
  goodsBorder?: boolean;
  goodsShadow?: boolean;
  marginGap?: number;
}

const GoodsJsx: React.FC<GoodsType> = ({
  defaultValue = [],
  classCode = '',
  margin,
  circular = false,
  cell,
  showSales = true,
  gap = 10,
  goods = [],
  markedPrice,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  goodsName = true,
  goodsPrice = true,
  goodsCar = true,
  goodsBorder = true,
  goodsShadow = false,
  marginGap = 10
}) => {
  const [list, setList] = useState<Array<any>>(defaultValue);
  const preGoods = useRef<Array<any>>();
  const { View, Text } = useComponent();
  useEffect(() => {
    if (isEqual(preGoods.current, goods)) return;
    preGoods.current = goods;
    if (isEmpty(goods)) {
      setList(defaultValue);
      return;
    }
    (async () => {
      try {
        const data = await find({ goodsCode: goods.toString(), distinctField: 'goodsNo' });
        const list = get(data, 'list', []);
        setList(list);
      } catch (err) {
        setList(defaultValue);
      }
    })();
  }, [goods]);
  return (
    <View style={{ paddingTop, paddingBottom }}>
      <View
        className={classNames({ [`goods-${classCode}`]: true })}
        style={{
          display: 'grid',
          gap: marginGap,
          marginBottom: margin,
          gridTemplateColumns: `repeat(${cell}, 1fr)`,
          paddingLeft,
          paddingRight
        }}
      >
        {list.map((item, index) => (
          <View
            style={{
              overflow: 'hidden',
              borderRadius: circular ? '8px' : '0px',
              border: goodsBorder ? '1px solid #000000' : ''
            }}
            onClick={() =>
              navigatorHandler('goodDetail', {
                skuCode: item.skuCode
              })
            }
            className={[`goods ${goodsShadow ? 'outer-shadow' : ''}`].join(' ')}
            key={index}
          >
            <View className={`goods-img`} style={{ backgroundImage: `url(${item.dataPic})` }}></View>
            <View className={'space'}>
              <View className={'titleType'} style={{ display: goodsName ? 'block' : 'none' }}>
                {item.goodsName}
              </View>
              <View className={'subTitle'}>{item.brandName}</View>
              {showSales && <View className={'sales'}>已售:{item.goodsSalesvolume}件</View>}
              <View className={'price'}>
                <View style={{ fontSize: 18 }}>
                  {/* <Text className={'subPrice'} style={{ display: goodsPrice ? 'inline' : 'none' }}>
                  </Text> */}
                  {goodsPrice ? fixPrice(item.pricesetNprice) : ''}
                  {markedPrice === 1 && (
                    <Text className={'markedPrice'}>
                      {/* <Text className={'subPrice'}></Text> */}
                      {fixPrice(item.pricesetMakeprice)}
                    </Text>
                  )}
                </View>
                <View className={'anticon'} style={{ display: goodsCar ? 'block' : 'none' }}>
                  <QjMobileIcon style={{ fontSize: 30, color: '#f00' }} value={'cart'} />
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export const Goods = memo(GoodsJsx);
