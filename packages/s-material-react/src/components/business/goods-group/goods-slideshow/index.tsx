import React, { memo, useMemo, useState } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useGoods } from 'qj-mobile-store';
import { getEnv } from '@brushes/utils';
import { navigatorHandler } from '@brushes/utils';
import { fixPrice } from '@/utils';
const initialGoodsSlideshow = {
  defaultValue: [],
  goods: [],
  GoodsSlideshowBg: '',
  marketPrice: true,
  goodsName: true,
  salesNum: true,
  price: true,
  goodsRadius: '',
  goodsBorder: true,
  goodsShadow: true,
  btnText: '',
  btnBg: '',
  btnColor: '',
  btnRadius: '',
  apiKey: 'goodsCode'
};

const GoodsSlideshowJsx: React.FC<typeof initialGoodsSlideshow> = ({
  defaultValue,
  goods,
  GoodsSlideshowBg,
  marketPrice,
  goodsName,
  salesNum,
  price,
  apiKey = 'goodsCode',
  goodsRadius,
  goodsBorder,
  goodsShadow,
  btnText,
  btnBg,
  btnColor,
  btnRadius
}) => {
  const flag = useMemo(() => getEnv(), []);
  const { list } = useGoods({ defaultValue, goods }, apiKey);
  const { SmoothSwiper, View, Image } = useComponent();
  const [coe, setCoe] = useState(0);
  const change = (item: any) => {
    setCoe(item.detail.current);
  };

  return (
    <View className={'goodsSlideshow'}>
      <Image src={GoodsSlideshowBg} className={'bg'} mode={'widthFix'} />
      <SmoothSwiper
        indicatorDots={false}
        imgHeight={{
          width: 190,
          height: 410
        }}
        defaultIndex={1}
        data={list}
        style={{}}
        type={1}
        autoplay={false}
        autoplayInterval={5000}
        onChange={change}
        previousMargin={40}
        nextMargin={40}
        slideSize={70}
        trackOffset={15}
        render={(item: any) => (
          <View
            className={['goodsSlideshowItem', `${item.goodsCode === list[coe].goodsCode && flag ? 'active' : ''}`].join(
              ' '
            )}
            style={{
              borderRadius: goodsRadius,
              borderStyle: goodsBorder ? 'solid' : 'none',
              boxShadow: goodsShadow ? '0px 0px 20px 10px #ddd' : ''
            }}
            onClick={() =>
              navigatorHandler('goodDetail', {
                skuCode: item.skuCode
              })
            }
          >
            <Image className={'logo'} src={item.dataPic} mode={'widthFix'} />
            {goodsName ? <View className={'goodsName'}>{item.goodsShowname}</View> : null}
            {salesNum ? <View className={'salesNum'}>销量：{item.goodsSalesvolume}</View> : null}
            {price ? <View className={'price'}>{fixPrice(item.pricesetNprice)}</View> : null}
            {marketPrice ? <View className={'marketPrice'}>{fixPrice(item.pricesetMakeprice)}</View> : null}

            <View
              className={'btn'}
              style={{
                backgroundColor: btnBg,
                color: btnColor,
                borderRadius: btnRadius
              }}
            >
              {btnText}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export const GoodsSlideshow = memo(GoodsSlideshowJsx);
