import { useComponent } from '@brushes/simulate-component';
import { fixPrice } from '@/utils';
import { useMemo } from 'react';

export interface CardItemType {
  dataPic: string;
  goodsName: string;
  dataBmoney?: number;
  goodsCamount: number;
  // contractGoodsId: number
  pricesetNprice?: number;
  skuName?: string;
  skuCode?: string;
  children?: React.ReactNode;
}

export const CardJsx = ({
  dataPic,
  goodsName,
  goodsCamount,
  pricesetNprice,
  skuName,
  children
}: // skuCode,
CardItemType) => {
  const { View, Image, SmoothView } = useComponent();
  const price = fixPrice(pricesetNprice);
  const goodsCount = useMemo(() => {
    return goodsCamount ? `x ${goodsCamount}` : '';
  }, [goodsCamount]);

  return (
    <>
      <View className={'card-item'}>
        <Image src={dataPic} alt="" className={'card-item-img'} />
        <View className={'card-item-info'}>
          <View className={'card-item-info-container'}>
            <SmoothView className={'card-item-info-container-title'}>{goodsName}</SmoothView>
            <SmoothView className={'card-item-info-container-price'}>{price}</SmoothView>
          </View>
          <View className={'card-item-info-sub'}>
            <SmoothView className={'sku'}>{skuName}</SmoothView>
            <SmoothView className={'count'}>{goodsCount}</SmoothView>
          </View>
          {children}
        </View>
      </View>
    </>
  );
};
