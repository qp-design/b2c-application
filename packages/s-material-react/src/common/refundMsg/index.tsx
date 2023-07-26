import { useComponent } from '@brushes/simulate-component';
import { memo, useState } from 'react';
import { QjMobileIcon } from '@/common/icon';
import { fixPrice1 } from '@/utils';
import { ScrollWrap } from '@/common/scrollWrap';
// import { getEnv, getTaro } from '@brushes/utils';
const refundMsgJsx = () => {
  //是否点击选择退款原因
  const [visible, setVisible] = useState(false);
  //退款金额
  const [refundPrices, setRefundPrices] = useState(980);
  const changePrices = (e: any) => {
    setRefundPrices(e.detail.value);
  };
  const { View, Input, Popup } = useComponent();
  return (
    <View className="refundMsgPage">
      <View
        className="refundItem"
        onClick={() => {
          setVisible(true);
        }}
      >
        <View className="refundMsg">
          <View className="inputText">
            <View className="icon">*</View>
            <View className="text">退款原因</View>
          </View>
          <View className="optionText">
            <View className="text1">请选择</View>
            <View className="icon">{'>'}</View>
          </View>
        </View>
        <View className="refundTip">请选择退款原因!退款原因不能为空!</View>
      </View>
      <View className="refundItem">
        <View className="refundMsg">
          <View className="inputText">
            <View className="icon">*</View>
            <View className="text">退款金额</View>
          </View>
          <View className="optionText">
            <View className="text">
              <View className="textInp">
                ￥<Input className="inputText" disabled={false} value={fixPrice1(refundPrices)} onBlur={changePrices} />
              </View>
            </View>
            <View className="icon1">
              <View className="iconContent">
                <QjMobileIcon value="bianjishuru" style={{ fontSize: 12, color: '#000000' }} />
                <View className="updatebtn">修改</View>
              </View>
            </View>
          </View>
        </View>
        <View className="refundTip1">可修改，最多￥980.00，含运费￥0.00</View>
      </View>
      <Popup popupVisible={visible} popupHandler={setVisible}>
        <View className={'goodsDetail-coupon-popup'}>
          <ScrollWrap>123213</ScrollWrap>
        </View>
      </Popup>
    </View>
  );
};
export const RefundMsg = memo(refundMsgJsx);
