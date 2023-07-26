import React, { memo, useContext } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { QjMobileIcon } from '@/common/icon';
import { handleType } from '../typeConfig';
import { MCAfterSalesType } from '../context';

interface TypeJsxType {
  afterSalesType: number;
  contractBillcode: string;
  skuCode: string;
}

const TypeJsx: React.FC<TypeJsxType> = ({ afterSalesType = 2, contractBillcode, skuCode }) => {
  const { View } = useComponent();
  const { goApply, goodsNum } = useContext(MCAfterSalesType);

  return (
    <View>
      <View className={'afterSalesTypeType'}>
        <View className={'title'}>售后类型</View>
        {handleType(+afterSalesType).map((item: any, index: number) => {
          return (
            <View
              className={'item'}
              key={index}
              onClick={goApply.bind(null, item.value, contractBillcode, skuCode, goodsNum)}
            >
              <View className={'headline'}>{item.label}</View>
              <QjMobileIcon style={{ fontSize: 12, color: '#C3C6CD' }} value={'xiangyou1'} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export const Type = memo(TypeJsx);
