import { useComponent } from '@brushes/simulate-component';
import { Dispatch, useMemo } from 'react';
import { useCartOperate } from 'qj-mobile-store';
import { fixPrice } from '@/utils';

interface CartOperateType {
  dispatchPageStore: Dispatch<any>;
  countBorderColor: string;
  countTextColor: string;
  countBtnColor: string;
  countBtnShape: string;
  $_dataSource: {
    cartInfo: Array<any>;
    cartIsEditor: boolean;
    cartSelect: Array<any>;
    cartDisMoney: number;
  };
}

export const CartOperate: React.FC<CartOperateType> = ({
  $_dataSource = {
    cartInfo: [],
    cartDisMoney: 0,
    cartSelect: [],
    cartIsEditor: false
  },
  dispatchPageStore,
  countBorderColor = '#000000',
  countTextColor = '#ffffff',
  countBtnColor = '#000000',
  countBtnShape = '20px'
}) => {
  const { View, SmoothView, SmoothCheckbox, Checkbox } = useComponent();
  const { cartInfo, cartDisMoney, cartSelect, cartIsEditor } = $_dataSource;
  const { toOrderImpl, deleteCart, selectAll, cartDetail } = useCartOperate(cartSelect, cartInfo, dispatchPageStore);
  const countStyle: React.CSSProperties = useMemo(() => {
    return {
      border: `1px solid ${countBorderColor}`,
      color: countTextColor,
      background: countBtnColor,
      borderRadius: countBtnShape
    };
  }, [countBorderColor, countTextColor, countBtnColor, countBtnShape]);

  return (
    <View className={'cart-dashboard'}>
      <View className={'choose'}>
        <SmoothCheckbox onChange={selectAll}>
          <Checkbox
            checked={cartInfo.length === cartSelect.length}
            value={'true'}
            style={{
              '--icon-size': '16px',
              '--font-size': '14px',
              '--gap': '6px'
            }}
          >
            全选
          </Checkbox>
        </SmoothCheckbox>
      </View>
      {!cartIsEditor ? (
        <View className={'check'}>
          <View className={'priceGroup'}>
            <View className={'discount'}>
              优惠: <SmoothView className={'data'}>{fixPrice(cartDisMoney)}</SmoothView>
            </View>
            <View className={'all'}>
              总计: <SmoothView className={'data'}>{fixPrice(cartDetail.amount)}</SmoothView>
            </View>
          </View>
          <View onClick={toOrderImpl} className={'btn'} style={countStyle}>
            结算({cartDetail.num})
          </View>
        </View>
      ) : (
        <View className={'del'}>
          <View onClick={deleteCart} className={'btn'}>
            删除
          </View>
        </View>
      )}
    </View>
  );
};
