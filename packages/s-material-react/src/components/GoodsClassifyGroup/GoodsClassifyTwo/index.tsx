// @ts-nocheck
import React, { memo } from 'react';
import { useComponent, antdMobile } from '@brushes/simulate-component';
import { ScrollWrap } from '@/common/scrollWrap';
import { useGoodsClassify } from 'qj-mobile-store';
import { GoodsClassifyTwoContent } from './components/goodsClassifyTwoContent';

const { SideBar } = antdMobile;

const initialGoodsClassifyTwoType = {
  selectFontColor: '#EB144C',
  selectBlcShow: true,
  selectBlcColor: '#000000',
  selectBlcStyle: 1,
  layout: 2,
  picShadow: true
};

const GoodsClassifyTwoJsx: React.FC<typeof initialGoodsClassifyTwoType> = ({
  selectFontColor,
  selectBlcShow,
  selectBlcColor,
  selectBlcStyle,
  layout,
  picShadow
}) => {
  const { View } = useComponent();
  const { activeKey, setActiveKey, navList, flag } = useGoodsClassify();

  return (
    <View className={'goodsClassifyTwo'}>
      <ScrollWrap id={'goodsClassifyTwo'}>
        <View className={'goodsClassifyTwoWrap'} style={{ height: flag ? '100%' : '667px' }}>
          <View className={'side'}>
            <SideBar
              activeKey={activeKey}
              onChange={setActiveKey}
              style={{
                '--width': '88px',
                '--background-color': '#f5f5f5'
              }}
            >
              {navList.map((item: any) => (
                <SideBar.Item
                  key={item.goodsClassCode}
                  title={item.goodsClassName}
                  className={[
                    selectBlcShow ? '' : 'goodsClassifyTwoFloorNoBlc',
                    selectBlcStyle === 1 ? '' : 'goodsClassifyTwoFloorNoRound'
                  ].join(' ')}
                  style={{
                    '--adm-color-primary': selectFontColor
                  }}
                />
              ))}
            </SideBar>
          </View>
          <View className={'main'}>
            <GoodsClassifyTwoContent navList={navList} activeKey={activeKey} layout={layout} picShadow={picShadow} />
          </View>
        </View>
      </ScrollWrap>
    </View>
  );
};

export const GoodsClassifyTwo = memo(GoodsClassifyTwoJsx);
