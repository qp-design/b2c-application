import React, { memo, useContext } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { ScrollWrap } from '@/common/scrollWrap';
import { MCAfterSalesDetail } from '../context';

const expressPopupJsx: React.FC = () => {
  const { companyList, popupShow, handlePopupShow, chooseCompany } = useContext(MCAfterSalesDetail);
  const { View, SmoothRadio, Radio, Popup, ScrollView } = useComponent();

  return (
    <Popup popupVisible={popupShow} popupHandler={handlePopupShow}>
      <View className={'reasonPopup'}>
        <ScrollWrap>
          <ScrollView>
            <View className={'title'}>物流选择</View>
            <SmoothRadio onChange={chooseCompany}>
              {companyList.map((item: any, index: number) => {
                return (
                  <View className={'reasonItem'} key={index}>
                    <View className={'label'}>{item.expressName}</View>
                    <Radio value={`${item.expressName}-${item.expressCode}`} />
                  </View>
                );
              })}
            </SmoothRadio>
          </ScrollView>
        </ScrollWrap>
      </View>
    </Popup>
  );
};

export const ExpressPopup = memo(expressPopupJsx);
