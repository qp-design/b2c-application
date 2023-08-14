import { navigatorHandler } from '@brushes/utils';
import { OrderAddress } from './orderAddress';
import { useComponent } from '@brushes/simulate-component';
import { useOrderAddress } from 'qj-mobile-store';

export const PlaceOrderAddress = ({
  refreshNum,
  skuId = '',
  goodsNum = 0,
  shoppingGoodsId = ''
}: {
  refreshNum: string;
  goodsNum: number;
  skuId: string;
  shoppingGoodsId: string;
}) => {
  const { View } = useComponent();
  const address = useOrderAddress(refreshNum, goodsNum, skuId, shoppingGoodsId);

  return (
    <View className={'placeOrder-chooseAddress'} onClick={() => navigatorHandler('addressList')}>
      <OrderAddress address={address} />
    </View>
  );
};
