//@ts-nocheck
import { useComponent } from '@brushes/simulate-component';
import { THREE_DOTS } from '@/static';
import { useMemo, useState } from 'react';
import { Coupon } from '@/common/coupon/index-next';

export const CouponList = ({
  coupon,
  confirm,
  amount
}: {
  coupon: Array<any>;
  confirm: (a: any) => void;
  amount: number;
}) => {
  const { View, Text, Popup, SmoothRadio, ScrollView } = useComponent();
  const [visible, setVisible] = useState(false);
  const [couponValue, setCouponValue] = useState();
  const onChange = (e) => {
    const value = e.detail.value;
    const couponItem = coupon.find((item) => item.promotionCode === value) || {};
    setCouponValue(value);
    setVisible(false);
    confirm(couponItem);
  };

  const selectCoupon = useMemo(() => {
    const couponObj = coupon.find((item) => item.promotionCode === couponValue) || {};
    return couponObj.promotionName;
  }, [couponValue]);

  return (
    <>
      <View className={'coupon-select'} onClick={() => setVisible(true)}>
        <Text className={'label'}>优惠券</Text>
        <View className={'info'}>
          <Text className={'label'}>{selectCoupon ? `已选择: ${selectCoupon}` : '请选择优惠券'}</Text>
          <img src={THREE_DOTS} alt="" className={'icon'} />
        </View>
      </View>
      <Popup popupVisible={visible} popupHandler={setVisible}>
        <View className={'goodsDetail-coupon-popup'}>
          <ScrollView height={400}>
            <SmoothRadio onChange={onChange}>
              {coupon.map((item, index) => {
                return <Coupon disable={amount < item.discAmount} {...item} key={index} />;
              })}
            </SmoothRadio>
          </ScrollView>
        </View>
        {/*<Button onClick={confirmImpl}>确认</Button>*/}
      </Popup>
    </>
  );
};
