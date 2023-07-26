import { memo, useMemo, useState } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { getEnv } from '@brushes/utils';
import { CartItem } from './components';
import { StoreProvider, useCartList } from 'qj-mobile-store';
import { NoData } from '@/common/noData';
import { ScrollWrap } from '@/common/scrollWrap';
import { fixPrice } from '@/utils';
interface CartType {
  btnStyle?: boolean;
  borderColor?: string;
  textColor?: string;
  btnColor?: string;
  btnShape?: string;
  refreshNum: number;
  cartItemRadius?: string;
  countBorderColor?: string;
  countTextColor?: string;
  countBtnColor?: string;
  countBtnShape?: string;
}

const CartJsx = ({
  refreshNum,
  btnStyle,
  borderColor,
  textColor,
  btnColor,
  btnShape,
  cartItemRadius,
  countBorderColor,
  countTextColor,
  countBtnColor,
  countBtnShape
}: CartType) => {
  const flag = useMemo(() => getEnv(), []);
  const { View, SmoothView, Checkbox, SmoothCheckbox, ScrollView } = useComponent();
  const [editState, setEditState] = useState(true);
  const { cartList, amount, selectAll, allCart, toOrderImpl, select, deleteCart, disMoney } = useCartList(refreshNum);
  const buttonStyle: React.CSSProperties = useMemo(() => {
    return {
      border: btnStyle ? `2px solid ${borderColor}` : '',
      color: btnStyle ? textColor : '',
      background: btnStyle ? btnColor : '',
      borderRadius: btnStyle ? btnShape : ''
    };
  }, [btnStyle, borderColor, textColor, btnColor, btnShape]);
  const countStyle: React.CSSProperties = useMemo(() => {
    return {
      border: `1px solid ${countBorderColor}`,
      color: countTextColor,
      background: countBtnColor,
      borderRadius: countBtnShape
    };
  }, [countBorderColor, countTextColor, countBtnColor, countBtnShape]);
  return (
    <View
      className={'cart'}
      style={{
        height: flag ? '100%' : '667px'
      }}
    >
      {cartList.length ? (
        <>
          <View className={'edit'}>
            <View className={'btn'} style={buttonStyle} onClick={() => setEditState(!editState)}>
              {editState ? '编辑' : '完成'}
            </View>
          </View>
          <ScrollWrap id="editId" bottomHeight="50">
            <ScrollView>
              <CartItem list={cartList} cartItemRadius={cartItemRadius} />
            </ScrollView>
          </ScrollWrap>

          <View className={'cart-dashboard'}>
            <View className={'choose'}>
              <SmoothCheckbox onChange={selectAll}>
                <Checkbox
                  checked={allCart.current.length === select.length}
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
            {editState ? (
              <View className={'check'}>
                <View className={'priceGroup'}>
                  <View className={'discount'}>
                    优惠: <SmoothView className={'data'}>{fixPrice(disMoney)}</SmoothView>
                  </View>
                  <View className={'all'}>
                    合计: <SmoothView className={'data'}>{fixPrice(amount.amount)}</SmoothView>
                  </View>
                </View>
                <View onClick={toOrderImpl} className={'btn'} style={countStyle}>
                  结算({amount.num})
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
        </>
      ) : (
        <NoData
          url={'https://brushes.oss-cn-shanghai.aliyuncs.com/static/mini/noCarts.png'}
          title={'购物车竟然是空的'}
          subTitle={'快点挑选点东西犒赏自己吧'}
          link={'index'}
        />
      )}
    </View>
  );
};

const WrapCartJsx: React.FC<CartType> = (props) => {
  return (
    <StoreProvider>
      <CartJsx {...props} />
    </StoreProvider>
  );
};

export const Cart = memo(WrapCartJsx);
