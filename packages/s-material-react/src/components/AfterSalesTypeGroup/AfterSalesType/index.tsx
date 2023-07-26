import React from 'react';
import { useComponent } from '@brushes/simulate-component';
import { Item, Type } from './components';
import { useAfterSalesChooseType } from 'qj-mobile-store';
import { MCAfterSalesType } from './context';

export const AfterSalesType: React.FC = (props: any) => {
  const { contractBillcode, skuCode, dataState } = props;
  const { typeTip, setTypeTip, goodsNum, handleStep, goodsInfo, goApply, loading, goodsPrice } =
    useAfterSalesChooseType({
      contractBillcode,
      skuCode
    });

  const { View, WrapLoading } = useComponent();

  return (
    <WrapLoading loading={loading}>
      <View className={'afterSalesType'}>
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
