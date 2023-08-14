// @ ts-nocheck

import React, { memo, useContext, useMemo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { ScrollWrap } from '@/common/scrollWrap';
import { ClassifyOneFloor } from './classifyOneFloor';
import { MC } from './context';
import { useGoodsClassifyOne } from '../hooks/useGoodsClassifyOne';
import { getEnv } from '@brushes/utils';

const ClassifyOneContentJsx: React.FC<any> = () => {
  const { navList, fCoe, sCoe, setSCoe, selectFontColor, selectBlcShow, selectBlcStyle } = useContext(MC);
  const flag = useMemo(() => getEnv(), []);

  const { secondList, thirdList } = useGoodsClassifyOne({ navList, fCoe, sCoe });

  const { View, ScrollView, SideBar } = useComponent();

  return (
    <View>
      <ScrollWrap id={'goodsClassifyOneContent'}>
        <ScrollView>
          <View className={'goodsClassifyOneContent'} style={{ height: flag ? '100%' : '667px' }}>
            <SideBar activeKey={sCoe} onChange={setSCoe}>
              {secondList.map((item: any, index: number) => (
                <SideBar.Item
                  key={index}
                  title={item.goodsClassName}
                  className={[
                    selectBlcShow ? '' : 'goodsClassifyOneFloorNoBlc',
                    selectBlcStyle === 1 ? '' : 'goodsClassifyOneFloorNoRound'
                  ].join(' ')}
                  style={{
                    'adm-side-bar-item-active': selectFontColor,
                    '--adm-color-primary': selectFontColor
                  }}
                />
              ))}
            </SideBar>
            <ClassifyOneFloor thirdList={thirdList} />
          </View>
        </ScrollView>
      </ScrollWrap>
    </View>
  );
};

export const ClassifyOneContent = memo(ClassifyOneContentJsx);
