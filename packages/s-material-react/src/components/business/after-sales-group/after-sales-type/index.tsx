import React from 'react';
import { useComponent } from '@brushes/simulate-component';
import { Item, Type } from './components';
import { useAfterSalesChooseType } from 'qj-mobile-store';
import { MCAfterSalesType } from './context';

const initialAfterSalesType = {
  contractBillcode: '',
  skuCode: '',
  dataState: 0,
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0
};

export const AfterSalesType: React.FC<typeof initialAfterSalesType> = (props) => {
  const { contractBillcode, skuCode, dataState, paddingTop, paddingLeft, paddingRight, paddingBottom } = props;
  const { typeTip, setTypeTip, goodsNum, handleStep, goodsInfo, goApply, loading, goodsPrice } =
    useAfterSalesChooseType({
      contractBillcode,
      skuCode
    });

  const { View, WrapLoading } = useComponent();

  return (
    <WrapLoading loading={loading}>
      <View
        className={'afterSalesType'}
        style={{
          paddingTop,
          paddingLeft,
          paddingRight,
          paddingBottom
        }}
      >
        <MCAfterSalesType.Provider
          value={{
            typeTip,
            setTypeTip,
            goodsNum,
            handleStep,
            goodsInfo,
            goApply,
            goodsPrice
          }}
        >
          <Item />
          <Type afterSalesType={dataState} contractBillcode={contractBillcode} skuCode={skuCode} />
        </MCAfterSalesType.Provider>
      </View>
    </WrapLoading>
  );
};
