import { queryUserConByGoods } from 'qj-b2c-api';
import { useEffect, useMemo, useState } from 'react';
import { isEmpty } from 'lodash-es';
import { orderStore } from '@/store/placeOrder/store';

const initialValue = { promotionCode: '', promotionName: '', discAmount: 0 };

export const useOrderCoupon = (shoppingGoodsList: Array<any> = []) => {
  const [coupon, setCoupon] = useState<Array<typeof initialValue>>([]);
  const [visible, setVisible] = useState(false);
  const [couponValue, setCouponValue] = useState();

  useEffect(() => {
    //获取优惠券
    (async () => {
      try {
        if (isEmpty(shoppingGoodsList)) return;
        const data = await queryUserConByGoods({
          pmContractGoodsDomainListStr: JSON.stringify(shoppingGoodsList)
        });
        setCoupon(data);
      } catch (err) {
        console.log(74, err);
      }
    })();
  }, [shoppingGoodsList]);

  const selectCoupon = useMemo(() => {
    const couponObj = coupon.find((item) => item.promotionCode === couponValue) || ({} as typeof initialValue);
    return couponObj.promotionName;
  }, [couponValue]);

  const onChange = (e: any) => {
    const value = e.detail.value;
    const couponItem = coupon.find((item) => item.promotionCode === value) || {};
    setCouponValue(value);
    setVisible(false);
    confirm(couponItem);
  };

  const confirm = (couponItem: any) => {
    const { couponAmount, usercouponCode, promotionCode, discAmount } = couponItem;
    const payload = {
      contractSettlBlance: 'COP',
      contractPmode: '0',
      contractSettlGmoney: +couponAmount,
      contractSettlPmoney: +discAmount,
      contractSettlOpno: usercouponCode,
      contractSettlOpemo: promotionCode
    };

    orderStore.setState(payload);
  };

  return {
    coupon,
    visible,
    selectCoupon,
    onChange,
    setVisible
  };
};
