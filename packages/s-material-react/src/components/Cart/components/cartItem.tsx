//@ts-nocheck
import { useComponent } from '@brushes/simulate-component';
import { useCartItem, useStore } from 'qj-mobile-store';
import { navigatorHandler } from '@brushes/utils';
import { fixPrice } from '@/utils';
interface ItemType {
  list?: Array<any>;
  cartItemRadius?: string;
}
export const CartItem: React.Fc<ItemType> = ({ list, cartItemRadius }) => {
  const { View, Text, Image, Checkbox, NumStep, SmoothCheckbox, WrapLoading } = useComponent();
  const { loading } = useStore();
  const { select, onChange, handleStep } = useCartItem();

  return (
    <WrapLoading loading={loading}>
      <SmoothCheckbox onChange={onChange}>
        {list.map((item, index) => (
          <View key={index} className={'cartItem'}>
            <View className={'cartItem-box'} style={{ borderRadius: cartItemRadius }}>
              <View className={'checkBoxWrap'}>
                <Checkbox
                  checked={select.includes(item.shoppingGoodsId + '')}
                  value={item.shoppingGoodsId}
                  style={{
                    '--icon-size': '16px',
                    '--font-size': '14px',
                    '--gap': '6px'
                  }}
                />
              </View>

              <Image
                className={'img'}
                src={item.dataPic}
                onClick={() =>
                  navigatorHandler('goodDetail', {
                    skuCode: item.skuCode
                  })
                }
              />
              <View className={'cartItem-info'}>
                <Text className={'cartItem-goodsName'}>{item.goodsName}</Text>
                <View className={'cartItem-size'}>
                  规格：{item.skuName} X {item.goodsCamount}
                </View>
                <View className={'cartItem-handleWrap'}>
                  <Text className={'price'}>{fixPrice(item.pricesetNprice)}</Text>
                  <NumStep
                    count={item.goodsCamount}
                    handleStep={handleStep.bind(null, item.shoppingGoodsId, item.goodsCamount)}
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
      </SmoothCheckbox>
    </WrapLoading>
  );
};
