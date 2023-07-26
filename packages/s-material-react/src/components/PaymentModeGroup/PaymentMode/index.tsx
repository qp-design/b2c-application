//@ts-nocheck
import { memo, type FC, useMemo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { getEnv } from '@brushes/utils';
import { useOrderResult } from 'qj-mobile-store';
import { fixPrice } from '@/utils';
interface PaymentModeProps {
  contractBillcode: string;
  contractBbillcode: string;
  borderColor: string;
  color: string;
  btnColor: string;
  btnShape: string;
  paddingTop: number;
  paddingBottom: number;
}
const PaymentModeJsx: FC<PaymentModeProps> = ({
  contractBillcode,
  contractBbillcode,
  btnColor,
  btnShape,
  borderColor,
  paddingTop,
  paddingBottom,
  color
}) => {
  const flag = useMemo(() => getEnv(), []);
  const { View, Text, Radio, IconMobile, WrapLoading, SmoothRadio } = useComponent();
  const { paymentImpl, channelList, contract, handleRadio, loading } = useOrderResult({
    contractBillcode,
    contractBbillcode
  });

  return (
    <View
      className={'paymentModeWrap'}
      style={{
        height: flag ? 'inherit' : '667px',
        paddingBottom: paddingBottom + 'px',
        paddingTop: paddingTop + 'px'
      }}
    >
      <View className={'paymentMode'}>
        <View className={'topInfo'}>
          <Text className={'title'}>
            <IconMobile value={'roundcheck'} />
            订单提交成功
          </Text>
          <View className={'info'}>
            订单号：{contract.current.contractBillcode} | 总金额：{fixPrice(contract.current.dataBmoney)}元
          </View>
        </View>
        <View className={'paymentGroup'}>
          <SmoothRadio onChange={handleRadio}>
            {channelList?.map((item) => {
              return (
                <View className={'paymentItem'} key={item.fchannelCode}>
                  <IconMobile value={item.icon} />
                  <View>
                    <View className={'base'}>
                      <Text>{item.fchannelName}</Text>
                      <Radio value={item.fchannelCode} className={'choose'}></Radio>
                    </View>
                    {item.value === 'account' ? (
                      <View className={'info'}>
                        <View>账户余额：0元</View>
                        <View>本单抵扣：5.4元</View>
                      </View>
                    ) : null}
                  </View>
                </View>
              );
            })}
          </SmoothRadio>
        </View>
      </View>
      <View id="v_html"></View>
      <WrapLoading loading={loading}>
        <View className={'btnGroup'} onClick={paymentImpl}>
          <View style={{ borderRadius: btnShape, backgroundColor: btnColor, color, borderColor }} className={'payment'}>
            立即支付
          </View>
        </View>
      </WrapLoading>
    </View>
  );
};

export const PaymentMode = memo(PaymentModeJsx);
