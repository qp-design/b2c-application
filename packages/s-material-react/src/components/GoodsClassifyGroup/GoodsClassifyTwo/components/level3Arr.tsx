import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';

const level3ArrJsxArr = {
  childList: [
    {
      goodsClassCode: '',
      goodsClassLogo: '',
      goodsClassName: '',
      classtreeCode: ''
    }
  ],
  layout: 2,
  picShadow: true,
  style: {}
};

const Level3ArrJsx: React.FC<typeof level3ArrJsxArr> = ({ childList, layout, picShadow, style }) => {
  const { View, Image } = useComponent();
  return (
    <View
      className={'level3Arr'}
      style={{
        gridTemplateColumns: `repeat(${layout}, 1fr)`,
        ...style
      }}
    >
      {childList.map((item, index) => {
        return (
          <View
            key={index}
            className={'level3ArrItem'}
            onClick={() =>
              navigatorHandler('goodList', {
                classtreeCode: item.classtreeCode
              })
            }
          >
            <Image
              src={item.goodsClassLogo}
              className={'logo'}
              style={{
                boxShadow: picShadow ? '#DDDDDD 0px 0px 10px' : ''
              }}
            />
            <View className={'title'}>{item.goodsClassName}</View>
          </View>
        );
      })}
    </View>
  );
};

export const Level3Arr = memo(Level3ArrJsx);
