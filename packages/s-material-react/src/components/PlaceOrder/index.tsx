//@ts-nocheck
import { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { usePlaceOrder } from 'qj-mobile-store';
import { ShopJsx, OrderPrice, Operate } from './components';
import { CouponList } from '@/components/PlaceOrder/components/coupon';
import { addressIdConst } from '@/utils';
import { PlaceOrderAddress } from '../PlaceOrderGroup/PlaceOrderAddress';
import { PlaceOrderGood } from '../PlaceOrderGroup/PlaceOrderGood';
import { PlaceOrderDelivery } from '../PlaceOrderGroup/PlaceOrderDelivery';
import { PlaceOrderCoupon } from '../PlaceOrderGroup/PlaceOrderCoupon';
import { PlaceOrderInfo } from '../PlaceOrderGroup/PlaceOrderInfo';
import { PlaceOrderOperate } from '../PlaceOrderGroup/PlaceOrderOperate';

export interface PaymentOrderType {
  skuId?: string;
  goodsNum?: number;
  shoppingGoodsId?: string;
  refreshNum: number;
  shippingMethod: number;
  color: string;
  buttonColor: string;
  borderColor: string;
  borderRadius: number;
  paddingTop: number;
  paddingBottom: number;
}

const PlaceOrderJsx: React.FC<PaymentOrderType> = ({
  refreshNum,
  goodsNum,
  skuId,
  shoppingGoodsId = '',
  shippingMethod,
  color,
  buttonColor,
  borderColor,
  borderRadius,
  paddingTop,
  paddingBottom
}) => {
  const { View } = useComponent();

  return (
    <View style={{ height: '100%', paddingTop: paddingTop, paddingBottom: paddingBottom }} className={'placeOrder'}>
      <View className={'order-wrap'}>
        <PlaceOrderAddress refreshNum={refreshNum} />
        <PlaceOrderGood {...{ refreshNum, goodsNum, skuId, shoppingGoodsId }} />

        <PlaceOrderDelivery shippingMethod={shippingMethod} />

        <PlaceOrderCoupon {...{ refreshNum, goodsNum, skuId, shoppingGoodsId }} />

        <PlaceOrderInfo {...{ refreshNum, goodsNum, skuId, shoppingGoodsId }} />

        <PlaceOrderOperate
          {...{
            color,
            buttonColor,
            borderColor,
            borderRadius,
            refreshNum,
            goodsNum,
            skuId,
            shoppingGoodsId
          }}
        />
        {/*<ShopJsx goodsList={list.current} />*/}
        {/*<CouponList coupon={coupon} confirm={confirm} amount={amount} />*/}
        {/*/!* 下单页面的价格信息 *!/*/}
        {/*<OrderPrice amount={amount} savePayPrice={savePayPrice} payState={payState.current} />*/}
      </View>
      {/*<Operate*/}
      {/*  savePayPrice={savePayPrice}*/}
      {/*  amount={amount}*/}
      {/*  color={color}*/}
      {/*  buttonColor={buttonColor}*/}
      {/*  borderColor={borderColor}*/}
      {/*  borderRadius={borderRadius}*/}
      {/*/>*/}
    </View>
  );
};

export const PlaceOrder = memo(PlaceOrderJsx);
