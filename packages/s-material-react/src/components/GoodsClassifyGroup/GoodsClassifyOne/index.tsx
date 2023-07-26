import React, { memo, useState } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { useGoodsClassify } from 'qj-mobile-store';
import { ClassifyOneContent, ClassifyOneHeader } from './components';
import { MC } from './components/context';

const GoodsClassifyOneJsx: React.FC<any> = ({
  selectFontColor,
  selectBlcColor,
  selectBlcShow,
  selectBlc,
  selectBlcStyle,
  picShadow,
  layout
}) => {
  const { View } = useComponent();
  const { navList, activeKey, setActiveKey } = useGoodsClassify();
  const [fCoe, setFCoe] = useState('0');
  const [sCoe, setSCoe] = useState('0');

  return (
    <MC.Provider
      value={{
        fCoe,
        setFCoe,
        sCoe,
        setSCoe,
        navList,
        activeKey,
        setActiveKey,
        // option
        selectFontColor,
        selectBlcColor,
        selectBlcShow,
        selectBlc,
        selectBlcStyle,
        picShadow,
        layout
      }}
    >
      <View className={'goodsClassifyOne'}>
        <ClassifyOneHeader />
        <ClassifyOneContent />
      </View>
    </MC.Provider>
  );
};

export const GoodsClassifyOne = memo(GoodsClassifyOneJsx);
