//@ts-nocheck
import { useComponent } from '@brushes/simulate-component';
import { useGoodDetail, useGoodSpecAndPrice, usePromotion } from 'qj-mobile-store';

export const GoodsDetailPromotion = ({ skuCode }) => {
  const { View, Text } = useComponent();
  const { rsSkuDomainList } = useGoodDetail(skuCode);
  const { goodInfo } = useGoodSpecAndPrice(rsSkuDomainList);
  const promotionList = usePromotion(rsSkuDomainList, goodInfo.skuCode || skuCode);

  return (
    <View className={'goodsDetail-promotion'}>
      <Text className={'label'}>促销</Text>
      <View className={'group'}>
        {promotionList.length ? (
          promotionList.map(({ discName }: { discName: string }, index) => {
            return (
              <View className={'item'} key={index}>
                {discName}
              </View>
            );
          })
        ) : (
          <View className={'noPromotion'}>暂无促销活动</View>
        )}
      </View>
    </View>
  );
};
