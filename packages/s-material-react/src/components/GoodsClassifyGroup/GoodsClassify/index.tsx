import React, { memo } from 'react';
import { useComponent, antdMobile } from '@brushes/simulate-component';
import { ClassifyFloor } from './components';
import { useGoodsClassify } from 'qj-mobile-store';
import { ScrollWrap } from '@/common/scrollWrap';

const { SideBar } = antdMobile;

interface GoodsClassifyType {
  cell: number;
  color: string;
  paddingTop: number;
  paddingBottom: number;
  activeTitle: number;
}

const GoodsClassifyJsx: React.FC<GoodsClassifyType> = ({ cell, color, activeTitle, paddingTop, paddingBottom }) => {
  const { View, ScrollView } = useComponent();
  const { activeKey, setActiveKey, navList, flag } = useGoodsClassify();

  return (
    <View>
      <ScrollWrap id={'goodsClassify'}>
        <ScrollView>
          <View
            style={{ height: flag ? '100%' : '667px', paddingTop, paddingBottom }}
            className={'goodsClassifyContainer'}
          >
            <View className={'side'}>
              <SideBar
                activeKey={activeKey}
                onChange={setActiveKey}
                style={{
                  '--width': '90px',
                  '--background-color': '#f5f5f5'
                }}
              >
                {navList.map((item: any) => (
                  <SideBar.Item
                    key={item.goodsClassCode}
                    title={item.goodsClassName}
                    className={activeTitle === 0 ? 'typeBlock' : 'typeNoBlock'}
                    style={{
                      color: item.goodsClassCode === activeKey ? color : '#000'
                    }}
                  />
                ))}
              </SideBar>
            </View>
            <View className={'main'}>
              <ClassifyFloor navList={navList} activeKey={activeKey} cell={cell} />
            </View>
          </View>
        </ScrollView>
      </ScrollWrap>
    </View>
  );
};

export const GoodsClassify = memo(GoodsClassifyJsx);
