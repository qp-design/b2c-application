//@ts-nocheck
import React from 'react';
import { fixPrice } from '@/utils';
import { GoodsDetailCollection } from './goodsDetailCollection';
import { useComponent } from '@brushes/simulate-component';
import { useGoodFootprint, useGoodDetail, useGoodSpecAndPrice } from 'qj-mobile-store';
import { useDataPageQuery } from '@/hooks/useDataPageQuery';

const GoodsDetailInfoInitial = {
  priceShow: true,
  mPriceShow: true,
  salesVolumeShow: true,
  collectionShow: true
};

export const GoodsDetailInfo: React.FC<typeof GoodsDetailInfoInitial> = ({ priceShow, collectionShow, ...rest }) => {
  const { View, SmoothView } = useComponent();
  const skuCode = useDataPageQuery(rest, 'skuNo');
  const { rsSkuDomainList } = useGoodDetail(skuCode);
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
