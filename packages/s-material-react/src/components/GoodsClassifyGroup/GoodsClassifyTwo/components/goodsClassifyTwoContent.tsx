// @ts-nocheck
import { useComponent } from '@brushes/simulate-component';
import React, { memo, useEffect, useState } from 'react';
import { get } from 'lodash-es';
import { Level3Arr } from './level3Arr';

const initialGoodsClassifyTwoContent = {
  navList: [
    {
      childList: []
    }
  ],
  activeKey: '',
  layout: 2,
  picShadow: true
};

const GoodsClassifyTwoContentJsx: React.FC<typeof initialGoodsClassifyTwoContent> = ({
  navList,
  activeKey,
  layout,
  picShadow
}) => {
  const [coe, setCoe] = useState(0);

  useEffect(() => {
    setCoe(navList.findIndex(checkItem));
  }, [activeKey, coe]);

  const checkItem = (item: any) => item.goodsClassCode === activeKey;

  const { View, Image } = useComponent();

  return (
    <View className={'goodsClassifyTwoContent'}>
      <Image className={'firstLevelImg'} src={get(navList[coe], 'goodsClassLogo')} mode={'widthFix'} />
      {get(navList[coe], 'childList')?.map((item, index) => {
        return (
          <View key={index}>
            {item.goodsClassHide === '0' ? <View className={'level2Title'}>{item.goodsClassName}</View> : ''}
            <Level3Arr
              childList={item.childList}
              layout={layout}
              picShadow={picShadow}
              style={{ marginTop: item.goodsClassHide === '0' ? '' : '30px' }}
            />
          </View>
        );
      })}
    </View>
  );
};

export const GoodsClassifyTwoContent = memo(GoodsClassifyTwoContentJsx);
