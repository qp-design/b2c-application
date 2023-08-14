import { useComponent } from '@brushes/simulate-component';

export const PlaceOrderDelivery = ({ shippingMethod = 1 }: { shippingMethod: number }) => {
  const { View } = useComponent();

  return (
    <View
      className={'info placeOrder-blcWrap'}
      style={shippingMethod === 1 ? { display: 'block' } : { display: 'none' }}
    >
      <View className={'express placeOrder-blcItem'}>
        <View className={'label'}>配送方式</View>
        <View className={'value'}>快递</View>
      </View>
    </View>
  );
};
