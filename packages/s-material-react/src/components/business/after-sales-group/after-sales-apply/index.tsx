import React from 'react';
import { useComponent } from '@brushes/simulate-component';
import { Tip, FillIn, SubFillIn } from './components';
import { useAfterSalesApply } from 'qj-mobile-store';
import { MCAfterSalesApply } from './context';

const initialAfterSalesApply = {
  refundType: '',
  contractBillcode: '',
  skuCode: '',
  goodsNum: 0,
  goodsPrice: 0,
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0
};

export const AfterSalesApply: React.FC<typeof initialAfterSalesApply> = ({
  refundType,
  contractBillcode,
  skuCode,
  goodsNum,
  goodsPrice,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom
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
      <View
        className={'afterSalesApply'}
        style={{
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight
        }}
      >
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
          <View
            className={'submitBtn'}
            onClick={handleSubmit.bind(null, goodsNum, contractBillcode, refundType, goodsPrice)}
          >
            确定
          </View>
        </MCAfterSalesApply.Provider>
      </View>
    </WrapLoading>
  );
};
