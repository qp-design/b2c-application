import React from 'react';
import { useComponent } from '@brushes/simulate-component';
import { Tip, FillIn, SubFillIn } from './components';
import { useAfterSalesApply } from 'qj-mobile-store';
import { MCAfterSalesApply } from './context';

interface AfterSalesApplyType {
  refundType: string;
  contractBillcode: string;
  skuCode: string;
  goodsNum: number;
  goodsPrice: number;
}

export const AfterSalesApply: React.FC<AfterSalesApplyType> = ({
  refundType,
  contractBillcode,
  skuCode,
  goodsNum,
  goodsPrice
}) => {
  const { View, WrapLoading } = useComponent();

  const {
    tip,
    reasonList,
    popupVisible,
    popupLoading,
    handlePopupShow,
    handleChooseReason,
    reason,
    handleChooseImg,
    imgGroup,
    placeholder,
    handleDelImg,
    limit,
    goodsInfo,
    handleFillInReason,
    handleSubmit,
    loading
  } = useAfterSalesApply({ contractBillcode, skuCode });

  return (
    <WrapLoading loading={loading}>
      <View className={'afterSalesApply'}>
        <MCAfterSalesApply.Provider
          value={{
            tip,
            reasonList,
            popupVisible,
            popupLoading,
            handlePopupShow,
            handleChooseReason,
            reason,
            handleChooseImg,
            imgGroup,
            placeholder,
            handleDelImg,
            limit,
            goodsNum,
            goodsPrice,
            goodsInfo,
            handleFillInReason,
            handleSubmit
          }}
        >
          <Tip />
          <FillIn />
          <SubFillIn />
          <View className={'submitBtn'} onClick={handleSubmit.bind(null, goodsNum, contractBillcode, refundType)}>
            确定
          </View>
        </MCAfterSalesApply.Provider>
      </View>
    </WrapLoading>
  );
};
