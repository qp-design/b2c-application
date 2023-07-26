//@ts-nocheck
import { useComponent } from '@brushes/simulate-component';
import { CardJsx } from '@/common/card';
import { useOrderGood, orderGoodValue } from 'qj-mobile-store';

export const PlaceOrderGood = ({ refreshNum, goodsNum, skuId, shoppingGoodsId }: Partial<typeof orderGoodValue>) => {
  const { View } = useComponent();
  const { list } = useOrderGood({ refreshNum, goodsNum, skuId, shoppingGoodsId });
  return (
    <View className={'place-order-goods'}>
      {list.map((item, ind) => (
        <CardJsx key={ind} {...item} />
      ))}
    </View>
  );
};
