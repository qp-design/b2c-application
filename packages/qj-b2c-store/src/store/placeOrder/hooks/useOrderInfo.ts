import { initialValueOrder } from './useOrderGood';
import { useMemo } from 'react';

export function useOrderInfo(payState: Array<typeof initialValueOrder>) {
  const { shoppingCountPrice, comDisMoney } = useMemo(() => {
    const obj = {
      shoppingCountPrice: 0,
      comDisMoney: 0
    };
    payState.forEach((item: typeof initialValueOrder) => {
      const { shoppingCountPrice, comDisMoney } = item;
      obj.shoppingCountPrice += shoppingCountPrice;
      obj.comDisMoney += comDisMoney;
    });
    return obj;
  }, [payState]);

  return {
    shoppingCountPrice,
    comDisMoney
  };
}
