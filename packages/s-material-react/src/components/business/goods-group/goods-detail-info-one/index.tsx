//@ts-nocheck
import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useGoodDetail, useGoodFootprint, useGoodSpecAndPrice } from 'qj-mobile-store';
import { HandleBar } from './handleBar';
import { fixPrice } from '@/utils';

const initGoodsDetailInfoOne = {
  priceShow: true,
  collectionShow: true,
  shareShow: true,
  skuCode: ''
};

const GoodsDetailInfoOneJsx: React.FC<typeof initGoodsDetailInfoOne> = ({
  priceShow,
  collectionShow,
  shareShow,
  skuCode
}) => {
  const { View, SmoothView } = useComponent();
  const { rsSkuDomainList } = useGoodDetail(skuCode);
  const { goodInfo } = useGoodSpecAndPrice(rsSkuDomainList);

  useGoodFootprint(skuCode);

  return (
    <View className={'goodsDetail-info-one'}>
      <SmoothView
        className={'price'}
        style={{
          display: priceShow ? 'block' : 'none'
        }}
      >
        {fixPrice(goodInfo.pricesetNprice)}
      </SmoothView>
      <SmoothView className={'title'}>{goodInfo.goodsName}</SmoothView>
      <HandleBar
        collectionShow={collectionShow}
        shareShow={shareShow}
        goodsName={goodInfo.goodsName}
        pricesetNprice={goodInfo.pricesetNprice}
        dataPic={goodInfo.dataPic}
        skuCode={skuCode}
      />
    </View>
  );
};

export const GoodsDetailInfoOne = memo(GoodsDetailInfoOneJsx);
