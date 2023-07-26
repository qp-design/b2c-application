import { useComponent } from '@brushes/simulate-component';
import { memo, useContext } from 'react';
import { MCAfterSalesDetail } from '../context';
import { ExpressPopup } from './expressPopup';

const senderMsg = () => {
  const { handlePopupShow, packageName, setPackageBillno, submitExpressInfo } = useContext(MCAfterSalesDetail);

  const { View, Input } = useComponent();

  return (
    <>
      <View className="sender_content">
        <View className="sender_name">
          <View className="sender_icon">*</View>
          <View className="sender_names">物流公司</View>
        </View>
        <View className="sender_input name_style" onClick={handlePopupShow}>
          {packageName === '' ? <View style={{ color: '#000' }}>请填写</View> : <View>{packageName}</View>}
        </View>
      </View>
      <View className="sender_content">
        <View className="sender_name">
          <View className="sender_icon">*</View>
          <View className="sender_names">物流单号</View>
        </View>
        <View className="sender_input">
          <Input type="number" placeholder="请填写" onInput={(e: any) => setPackageBillno(e.detail.value)} />
        </View>
      </View>
      <View className="expressInfo">
        <View className="expressInfo_btn" onClick={submitExpressInfo}>
          提交物流信息
        </View>
      </View>

      <ExpressPopup />
      {/*<Popup popupVisible={popupShow} popupHandler={handlePopupShow}>*/}
      {/*  <View className={'reasonPopup'}>*/}
      {/*    <ScrollWrap>*/}
      {/*      <ScrollView>*/}
      {/*        <View className={'title'}>物流公司</View>*/}
      {/*        <SmoothRadio onChange={''}>*/}
      {/*          {*/}
      {/*            12122*/}
      {/*            // reasonList.map((item: any, index: number) => {*/}
      {/*            //    return (*/}
      {/*            //       <View className={'reasonItem'} key={index}>*/}
      {/*            //          <View className={'label'}>{item.flagSettingInfo}</View>*/}
      {/*            //          <Radio value={item.flagSettingInfo} />*/}
      {/*            //       </View>*/}
      {/*            //    )*/}
      {/*            // })*/}
      {/*          }*/}
      {/*        </SmoothRadio>*/}
      {/*      </ScrollView>*/}
      {/*    </ScrollWrap>*/}
      {/*  </View>*/}
      {/*</Popup>*/}
    </>
  );
};
export const SenderWrite = memo(senderMsg);
