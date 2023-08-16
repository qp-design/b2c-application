import { useComponent } from '@brushes/simulate-component';
import { fixPrice } from '@/utils';
import { useOrderInfo, orderGoodValue, useOrderGood } from 'qj-mobile-store';

export const PlaceOrderInfo = ({ refreshNum, goodsNum, skuId, shoppingGoodsId }: Partial<typeof orderGoodValue>) => {
  const { SmoothView, View } = useComponent();
  const { payState, disCount, freight, payPrice } = useOrderGood({ refreshNum, goodsNum, skuId, shoppingGoodsId });
  const { shoppingCountPrice, comDisMoney } = useOrderInfo(payState);

  return (
    <>
      <View className={'price placeOrder-blcWrap'}>
        <View className={'title'}>价格明细</View>
        <View className={'express placeOrder-blcItem'}>
          <View className={'label'}>商品总金额</View>
          <SmoothView className={'value'}>{fixPrice(shoppingCountPrice)}</SmoothView>
        </View>
        <View className={'coupon placeOrder-blcItem'}>
          <View className={'label'}>优惠金额</View>
          <SmoothView className={'value'}>{fixPrice(comDisMoney + disCount)}</SmoothView>
        </View>
        <View className={'express placeOrder-blcItem'}>
          <View className={'label'}>运费</View>
          <SmoothView className={'value'}>{fixPrice(freight)}</SmoothView>
        </View>
        <View className={'all placeOrder-blcItem'}>
          <View className={'label'}>总计</View>
          <SmoothView className={'value'} style={{ color: '#000' }}>
            {fixPrice(payPrice)}
          </SmoothView>
        </View>
      </View>
    </>
  );
};
