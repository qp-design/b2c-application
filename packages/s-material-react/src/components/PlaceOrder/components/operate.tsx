import { useComponent } from '@brushes/simulate-component';

interface OrderOerate {
  savePayPrice: () => void;
  amount: number;
  color: string;
  buttonColor: string;
  borderColor: string;
  borderRadius: number;
}

export const Operate: React.FC<OrderOerate> = ({
  amount,
  savePayPrice,
  color,
  buttonColor,
  borderColor,
  borderRadius
}) => {
  const { View, Text } = useComponent();
  return (
    <View className={'placeOrderFooter'}>
      <Text className={'price'}>合计: {amount}</Text>
      <View
        className={'btn'}
        onClick={savePayPrice}
        style={{
          color: `${color}`,
          border: `1px solid ${borderColor}`,
          backgroundColor: `${buttonColor}`,
          borderRadius: borderRadius === 1 ? '40px' : '0px'
        }}
      >
        生成订单
      </View>
    </View>
  );
};
