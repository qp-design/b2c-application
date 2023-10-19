//@ts-nocheck
import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { QjMobileIcon } from '@/common/icon';
import { useGoods } from 'qj-mobile-store';
import { navigatorHandler } from '@brushes/utils';
import { fixPrice } from '@/utils';
const initialGoodsSlider = {
  defaultValue: [],
  goods: [],
  price: true,
  marketPrice: true,
  cart: true,
  wrapRadius: '0px',
  wrapBgColor: '#FFFFFF',
  wrapBorderColor: '#FFFFFF',
  wrapShadow: false,
  goodsRadius: '0px',
  goodsBgColor: '#FFFFFF',
  goodsGap: 10,
  marginLeft: 10,
  marginRight: 10,
  marginTop: 10,
  marginBottom: 10
};

const GoodsSliderJsx: React.FC<typeof initialGoodsSlider> = ({
  defaultValue,
  goods,
  price,
  marketPrice,
  cart,
  apiKey = 'goodsCode',
  wrapRadius,
  wrapBorderColor,
  wrapBgColor,
  wrapShadow,
  goodsRadius,
  goodsBgColor,
  goodsGap,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
}) => {
  const { View } = useComponent();
  const { list } = useGoods({ defaultValue, goods }, apiKey);

  return (
    <View
      className={'goodsSlider'}
      style={{
        borderRadius: wrapRadius,
        borderColor: wrapBorderColor,
        backgroundColor: wrapBgColor,
        boxShadow: wrapShadow ? '0px 0px 20px 5px #EEE' : 'none',
        marginTop,
        marginBottom,
        marginLeft,
        marginRight
      }}
    >
      {list.map((item, index) => {
        return (
          <View
            className={'goodsSliderItem'}
            key={index}
            style={{
              borderRadius: goodsRadius,
              backgroundColor: goodsBgColor,
              marginRight: `${goodsGap}px`
            }}
            onClick={() =>
              navigatorHandler('goodDetail', {
                skuCode: item.skuCode
              })
            }
          >
            <View
              className={'img'}
              style={{
                backgroundImage: `url(${item.dataPic})`
              }}
            ></View>
            <View className={'board'}>
              <View className={'title'}>{item.goodsName}</View>
              <View className={'info'}>
                <View className={'lPart'}>
                  {price ? <View className={'price'}>{fixPrice(item.pricesetNprice)}</View> : null}
                  {marketPrice ? <View className={'marketPrice'}>{fixPrice(item.pricesetMakeprice)}</View> : null}
                </View>
                {cart ? (
                  <View className={'rPart'}>
                    <QjMobileIcon style={{ fontSize: 26, color: '#f00' }} value={'cart'} />
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export const GoodsSlider = memo(GoodsSliderJsx);
