import { useComponent } from '@brushes/simulate-component';
import { fixPrice } from '@/utils';

interface OrderPriceType {
  payState: {
    shoppingCountPrice: string | number;
    freight: string | number;
    accountsSumPrice: string | number;
    comDisMoney: string | number;
  };
  savePayPrice: () => void;
  amount: number;
}

export const OrderPrice: React.FC<OrderPriceType> = ({ payState, amount }) => {
  const { View } = useComponent();
  const { shoppingCountPrice, freight, comDisMoney } = payState;
  return (
    <>
      <View className={'price blcWrap'}>
        <View className={'title'}>价格明细</View>
        <View className={'express blcItem'}>
          <View className={'label'}>商品总金额</View>
          <View className={'value'}>￥ {(+shoppingCountPrice).toFixed(2)}</View>
        </View>
        <View className={'coupon blcItem'}>
          <View className={'label'}>优惠金额</View>
          <View className={'value'}>￥ {comDisMoney}</View>
        </View>
        <View className={'express blcItem'}>
          <View className={'label'}>运费</View>
          <View className={'value'}>￥ {freight}</View>
        </View>
        <View className={'all blcItem'}>
          <View className={'label'}>总计</View>
          <View className={'value'} style={{ color: '#000' }}>
            {fixPrice(amount)}
          </View>
        </View>
      </View>
    </>
  );
};
