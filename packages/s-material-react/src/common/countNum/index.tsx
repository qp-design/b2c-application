import { memo, useMemo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { getEnv, getTaro } from '@brushes/utils';

const countJsx = ({ value, getAmountNum, goodsCamount }: any) => {
  const { View } = useComponent();
  const isEnv = useMemo(() => getEnv(), []);
  return (
    <View className="count_btn_style">
      <View
        className="btn_left"
        onClick={() => {
          if (value <= 1) {
            if (isEnv) {
              const Taro = getTaro();
              Taro.showToast({ title: '退货数量最低为1', icon: 'none', mask: true });
            }

            return;
          }
          getAmountNum(value - 1);
        }}
      >
        -
      </View>
      <View className="btn_middle">{value}</View>
      <View
        className="btn_right"
        onClick={() => {
          if (value >= goodsCamount) {
            if (isEnv) {
              const Taro = getTaro();
              Taro.showToast({ title: '退货数量最多不得超出购买该商品总数量！', icon: 'none', mask: true });
            }

            return;
          }
          getAmountNum(value + 1);
        }}
      >
        +
      </View>
    </View>
  );
};
export const CountNum = memo(countJsx);
