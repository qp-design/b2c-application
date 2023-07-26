import React, { memo, useContext } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';
import { MC } from './context';

const ClassifyOneFloorJsx: React.FC<any> = ({ thirdList }) => {
  const { View, Image } = useComponent();
  const { picShadow, layout } = useContext(MC);

  return (
    <View
      className={'goodsClassifyOneFloor'}
      style={{
        gridTemplateColumns: `repeat(${layout}, 1fr)`
      }}
    >
      {thirdList.map((item: any, index: number) => {
        return (
          <View
            key={index}
            className={'goodsClassifyOneFloorItem'}
            onClick={() =>
              navigatorHandler('goodList', {
                classtreeCode: item.classtreeCode
              })
            }
          >
            <Image
              src={item.goodsClassLogo}
              className={'pic'}
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

export const ClassifyOneFloor = memo(ClassifyOneFloorJsx);
