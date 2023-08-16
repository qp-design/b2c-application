import { useComponent } from '@brushes/simulate-component';
import { THREE_DOTS } from '@/static';
import { Coupon } from '@/common/coupon/index-next';
import { orderGoodValue, useOrderGood, useOrderCoupon } from 'qj-mobile-store';
import { ScrollWrap } from '@/common/scrollWrap';

export const PlaceOrderCoupon = ({ refreshNum, goodsNum, skuId, shoppingGoodsId }: Partial<typeof orderGoodValue>) => {
  const { View, Text, Popup, SmoothRadio, ScrollView } = useComponent();
  const { shoppingGoodsList } = useOrderGood({ refreshNum, goodsNum, skuId, shoppingGoodsId });
  const { coupon, visible, setVisible, selectCoupon, onChange } = useOrderCoupon(shoppingGoodsList);
  return (
    <>
      <View className={'coupon-select'} onClick={() => setVisible(coupon.length !== 0)}>
        <Text className={'label'}>使用优惠</Text>
        <View className={'info'}>
          <Text className={'label'}>
            {selectCoupon ? `已选择: ${selectCoupon}` : coupon.length === 0 ? '暂无可用优惠券' : '请选择优惠券'}
          </Text>
          {coupon.length === 0 ? null : <img src={THREE_DOTS} alt="" className={'icon'} />}
        </View>
      </View>
      <Popup popupVisible={visible} popupHandler={setVisible}>
        <View className={'goodsDetail-coupon-popup'}>
          <ScrollWrap>
            <ScrollView>
              <SmoothRadio onChange={onChange}>
                {coupon.map((item, index) => {
                  return <Coupon {...item} key={index} />;
                })}
              </SmoothRadio>
            </ScrollView>
          </ScrollWrap>
        </View>
      </Popup>
    </>
  );
};
