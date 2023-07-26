//@ts-nocheck
import { useComponent } from '@brushes/simulate-component';
import { useGoodDetail, useGoodSpecAndPrice, usePromotion } from 'qj-mobile-store';
import { useDataPageQuery } from '@/hooks/useDataPageQuery';

export const GoodsDetailPromotion = ({ ...rest }) => {
  const { View, Text } = useComponent();
  const skuCode = useDataPageQuery(rest, 'skuNo');
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
