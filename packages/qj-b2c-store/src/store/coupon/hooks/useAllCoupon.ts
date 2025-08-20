import { queryPromotioByCodePage, saveUsercoupon } from 'qj-b2c-api';
import { useEffect, useState } from 'react';
import { get } from 'lodash-es';

interface useAllCouponType {
  defaultValue: Array<any>;
  coupons: Array<any>;
}

export const useAllCoupon = (props: useAllCouponType) => {
  const [list, setList] = useState<any[]>([]);
  const [takeList, setTakeList] = useState<any[]>([]);

  const { coupons, defaultValue } = props;

  useEffect(() => {
    init();
  }, [coupons]);

  const init = async () => {
    if (coupons.length === 0) {
      setList(defaultValue);
      return;
    }
    try {
      const result = await queryPromotioByCodePage({
        promotionCode: coupons?.join(','),
        list: 1
      });
      setList(get(result, 'list', []));
    } catch (err) {
      console.log(err);
    }
  };

  const takeCoupon = async ({ promotionCode, couponAmount, index }: any) => {
    try {
      await saveUsercoupon({ promotionCode, couponAmount });
    } catch (err) {
      console.log(41, err);
    } finally {
      setTakeList((prevState) => prevState.concat(index));
    }
  };

  return {
    list,
    setList,
    takeCoupon,
    takeList
  };
};
