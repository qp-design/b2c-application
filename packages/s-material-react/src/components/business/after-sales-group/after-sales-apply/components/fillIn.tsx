import React, { memo, useContext } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { QjMobileIcon } from '@/common/icon';
import { FillInPopup } from './fillInPopup';
import { fixPrice } from '@/utils';
import { MCAfterSalesApply } from '../context';

const fillInJsx: React.FC = () => {
  const { View } = useComponent();
  const { handlePopupShow, popupVisible, reason, goodsPrice } = useContext(MCAfterSalesApply);

  return (
    <View className={'afterSalesApplyFillIn'}>
      <View className={'reason'}>
        <View className={'fillInLabel'}>
          <View className={'icon'}>*</View>
          <View className={'word'}>退款原因</View>
        </View>
        <View className={'choose'} onClick={handlePopupShow}>
          {reason ? (
            <View className={'chooseResult'}>{reason}</View>
          ) : (
            <View>
              请选择
              <QjMobileIcon style={{ fontSize: 12, color: '#C3C6CD' }} value={'xiangyou1'} />
            </View>
          )}
        </View>
      </View>
      <View className={'price'}>
        <View className={'fillInLabel'}>
          <View className={'icon'}>*</View>
          <View className={'word'}>退款金额</View>
        </View>
        <View className={'allPrice'}>
          <View className={'single'}>{fixPrice(goodsPrice)}</View>
        </View>
      </View>
      <FillInPopup popupShow={popupVisible} />
    </View>
  );
};

export const FillIn = memo(fillInJsx);
