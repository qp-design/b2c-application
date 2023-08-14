import { useComponent } from '@brushes/simulate-component';
import { useOrderGood, useOrderPay } from 'qj-mobile-store';
import { fixPrice } from '@/utils';

const OrderOerate = {
  color: '',
  buttonColor: '',
  borderColor: '',
  borderRadius: 0,
  refreshNum: 0,
  goodsNum: 0,
  skuId: '',
  shoppingGoodsId: '',
  areaCode: '',
  userName: ''
};

export const PlaceOrderOperate: React.FC<Partial<typeof OrderOerate>> = ({
  color,
  buttonColor,
  borderColor,
  borderRadius,
  refreshNum,
  goodsNum,
  skuId,
  shoppingGoodsId
}) => {
  const { View, Text, WrapLoading } = useComponent();
  const { amount, list, freight, disCount, payState, orderStoreInfo, ocContractSettlList } = useOrderGood({
    refreshNum,
    goodsNum,
    skuId,
    shoppingGoodsId
  });
  const { savePayPrice, loading } = useOrderPay(
    { ocContractSettlList, payState, list },
    skuId,
    goodsNum,
    orderStoreInfo,
    shoppingGoodsId
  );
  return (
    <View className={'placeOrderFooter'}>
      <Text className={'price'}>合计: {fixPrice(amount - disCount + freight)}</Text>
      <WrapLoading loading={loading}>
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
      </WrapLoading>
    </View>
  );
};
