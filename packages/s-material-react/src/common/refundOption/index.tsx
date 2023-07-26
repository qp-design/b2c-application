import { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { QjMobileIcon } from '@/common/icon';
import { navigatorHandler } from '@brushes/utils';
interface refundOptionType {
  title: string;
}

const refundOptionJsx: React.FC<refundOptionType> = ({ title }) => {
  const { View } = useComponent();
  return (
    <View className="refundOptionStyle">
      {title}
      <View
        className="optionItem"
        onClick={() => {
          navigatorHandler('refundOnly', {});
        }}
      >
        <View className="refund_icon">
          <QjMobileIcon value="tuikuantuihuo" style={{ fontSize: 20, color: 'rgb(255, 136, 9)' }} />
        </View>
        <View className="refund_text">
          <View className="refund_type_title">仅退款（无需退货）</View>
          <View className="refund_tip">没收到货，或与卖家协商同意不用退货只退款</View>
        </View>
        <View className="refund_icon_end">
          <QjMobileIcon value="xiangyou1" style={{ fontSize: 16 }} />
        </View>
      </View>
      <View className="optionItem">
        <View className="refund_icon">
          <QjMobileIcon value="tuikuantuihuo1" style={{ fontSize: 20, color: 'rgb(255, 136, 9)' }} />
        </View>
        <View className="refund_text">
          <View className="refund_type_title">我要退货退款</View>
          <View className="refund_tip">已收到货，需要退还收到的货物</View>
        </View>
        <View className="refund_icon_end">
          <QjMobileIcon value="xiangyou1" style={{ fontSize: 16 }} />
        </View>
      </View>
      <View className="optionItem">
        <View className="refund_icon">
          <QjMobileIcon value="huanhuo" style={{ fontSize: 20, color: 'rgb(255, 136, 9)' }} />
        </View>
        <View className="refund_text">
          <View className="refund_type_title">我要换货</View>
          <View className="refund_tip">已收到或，需要退还更换</View>
        </View>
        <View className="refund_icon_end">
          <QjMobileIcon value="xiangyou1" style={{ fontSize: 16 }} />
        </View>
      </View>
    </View>
  );
};
export const RefundOption = memo(refundOptionJsx);
