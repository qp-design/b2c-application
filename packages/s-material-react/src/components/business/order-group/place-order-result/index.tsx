import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { getStorage, navigatorHandler } from '@brushes/utils';
import { useOrderResultResult } from 'qj-mobile-store';
import { fixPrice } from '@/utils';

interface PlaceOrderResult {
  borderRadius: number;
  leftColor: string;
  leftButtonColor: string;
  leftBorderColor: string;
  leftBorderRadius: number;
  rightValue: string;
  rightAddHref: any;
  rightColor: string;
  rightButtonColor: string;
  rightBorderColor: string;
  rightBorderRadius: number;
  paddingTop: number;
  paddingBottom: number;
  code: string;
}

const OrderInfo = ({ dataObj }: { dataObj: { contractBillcode: string; dataBmoney: number } }) => {
  const { View, Text } = useComponent();
  return (
    <View className={'placeOrderResultWrap'}>
      <View className={'placeOrderResultItem'}>
        <Text className={'label'}>订单号：</Text>
        <Text className={'value'}>{dataObj.contractBillcode}</Text>
      </View>
      <View className={'placeOrderResultItem'}>
        <Text className={'label'}>支付方式：</Text>
        <Text className={'value'}>在线支付</Text>
      </View>
      <View className={'placeOrderResultItem'}>
        <Text className={'label'}>支付金额：</Text>
        <Text className={'value'}>{fixPrice(dataObj.dataBmoney)}</Text>
      </View>
    </View>
  );
};
const PlaceOrderResultJsx: React.FC<PlaceOrderResult> = ({
  code,
  borderRadius,
  leftColor,
  leftButtonColor,
  leftBorderColor,
  leftBorderRadius,
  rightValue,
  rightAddHref,
  rightColor,
  rightButtonColor,
  rightBorderColor,
  rightBorderRadius,
  paddingTop,
  paddingBottom
}) => {
  const { View, Text, IconMobile, WrapLoading } = useComponent();
  const { result, loading } = useOrderResultResult(code || (getStorage('contractBillcode') || {}).contractBillcode);

  return (
    <View
      className={'placeOrderResult'}
      style={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom
      }}
    >
      <WrapLoading loading={loading}>
        <View className={'placeOrderResultContent'} style={{ borderRadius: borderRadius === 1 ? '20px' : '0px' }}>
          <IconMobile value={result.icon} style={{ fontSize: '35px', color: result.color }} />
          <View className={'tips'}>
            <Text className={'title'}>{result.msg}</Text>
            <Text className={'tip'}>{result.info}</Text>
          </View>

          {result.sysRecode === 'success' && <OrderInfo dataObj={result.dataObj} />}
          <View className={'btnGroup'} style={{ marginTop: 20 }}>
            <View
              className={'btn black'}
              onClick={() =>
                navigatorHandler(result.menuCode, {
                  contractBillcode: result.dataObj.contractBillcode
                })
              }
              style={{
                color: leftColor,
                backgroundColor: leftButtonColor,
                border: `1px solid ${leftBorderColor}`,
                borderRadius: leftBorderRadius === 1 ? '20px' : '0px'
              }}
            >
              {result.buttonText}
            </View>
            <View
              style={{
                color: rightColor,
                backgroundColor: rightButtonColor,
                border: `1px solid ${rightBorderColor}`,
                borderRadius: rightBorderRadius === 1 ? '20px' : '0px'
              }}
              onClick={() => navigatorHandler(rightAddHref.value)}
              className={'btn white'}
            >
              {rightValue}
            </View>
          </View>
        </View>
      </WrapLoading>
    </View>
  );
};

export const PlaceOrderResult = memo(PlaceOrderResultJsx);
