import React, { memo, useContext } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { ScrollWrap } from '@/common/scrollWrap';
import { MCAfterSalesApply } from '../context';

interface FillInPopupTye {
  popupShow: boolean;
}

const FillInPopupJsx: React.FC<FillInPopupTye> = () => {
  const { View, SmoothRadio, Radio, Popup, ScrollView, WrapLoading } = useComponent();
  const { handlePopupShow, popupVisible, reasonList, handleChooseReason, popupLoading } = useContext(MCAfterSalesApply);

  return (

      <Popup popupVisible={popupVisible} popupHandler={handlePopupShow}>
        <WrapLoading loading={popupLoading}>
          <View className={'reasonPopup'}>
            <ScrollWrap>
              <ScrollView>
                <View className={'title'}>退款原因</View>
                <SmoothRadio onChange={handleChooseReason}>
                  {reasonList.map((item: any, index: number) => {
                    return (
                      <View className={'reasonItem'} key={index}>
                        <View className={'label'}>{item.flagSettingInfo}</View>
                        <Radio value={item.flagSettingInfo} />
                      </View>
                    );
                  })}
                </SmoothRadio>
              </ScrollView>
            </ScrollWrap>
          </View>
        </WrapLoading>
      </Popup>

  );
};

export const FillInPopup = memo(FillInPopupJsx);
