import React from 'react';
import { fixPrice } from '@/utils';
import { GoodsDetailCollection } from './goodsDetailCollection';
import { useComponent } from '@brushes/simulate-component';
import { useGoodFootprint, useGoodDetail, useGoodSpecAndPrice } from 'qj-mobile-store';

const GoodsDetailInfoInitial = {
  priceShow: true,
  mPriceShow: true,
  salesVolumeShow: true,
  collectionShow: true,
  skuCode: '',
  scene: ''
};

export const GoodsDetailInfo: React.FC<typeof GoodsDetailInfoInitial> = ({
  skuCode,
  priceShow,
  collectionShow,
  scene
}) => {
  const { View, SmoothView } = useComponent();
  const { rsSkuDomainList } = useGoodDetail(skuCode, scene);
  const { goodInfo } = useGoodSpecAndPrice(rsSkuDomainList);
  useGoodFootprint(skuCode);
  return (
    <View className={'goodsDetail-topInfo'}>
      <View className={'lPart'}>
        <SmoothView className={'name'}>{goodInfo.goodsName}</SmoothView>
        <SmoothView className={'price'} style={{ display: priceShow ? 'block' : 'none' }}>
          {fixPrice(goodInfo.pricesetNprice)}
        </SmoothView>
      </View>
      <View className={'rPart'} style={{ display: collectionShow ? 'flex' : 'none' }}>
        <GoodsDetailCollection
          goodsName={goodInfo.goodsName}
          pricesetNprice={goodInfo.pricesetNprice}
          dataPic={goodInfo.dataPic}
          skuCode={skuCode}
        />
      </View>
    </View>
  );
};
