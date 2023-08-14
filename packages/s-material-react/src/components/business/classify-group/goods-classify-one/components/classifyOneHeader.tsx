import React, { memo, useState, useContext } from 'react';
import { useComponent, IconMobile } from '@brushes/simulate-component';
import { ScrollWrap } from '@/common/scrollWrap';
import { MC } from './context';

const ClassifyOneHeaderJsx: React.FC<any> = () => {
  const { navList, activeKey, setActiveKey, setFCoe, setSCoe, selectFontColor } = useContext(MC);
  const { View, ScrollView } = useComponent();
  const [popup, setPopup] = useState(false);

  const chooseItem = (item: Object, index: number) => {
    setActiveKey.bind(null, item)();
    setFCoe(`${index}`);
    setSCoe('0');
    if (popup) setPopup(false);
  };

  return (
    <View className={'goodsClassifyOne-headerPart'}>
      <View className={'goodsClassifyOne-topListWrap'}>
        <View className={'goodsClassifyOne-topList'}>
          {navList.map((item: any, index: number) => {
            return (
              <View
                className={[
                  'goodsClassifyOne-topListItem'
                  // activeKey === `${item.goodsClassCode}` ? ' active' : ''
                ].join(' ')}
                key={index}
                onClick={() => chooseItem(item.goodsClassCode, index)}
                style={{
                  color: activeKey === `${item.goodsClassCode}` ? selectFontColor : '#000',
                  borderColor: activeKey === `${item.goodsClassCode}` ? selectFontColor : '#000'
                }}
              >
                {item.goodsClassName}
              </View>
            );
          })}
        </View>
        <View className={'goodsClassifyOne-icon'} onClick={() => setPopup(true)}>
          <IconMobile value={'paixusort-jiang'} />
        </View>
      </View>
      {popup ? (
        <View className={'goodsClassifyOne-tipWrap'}>
          <View className={'goodsClassifyOne-tipWrap-handleBar'}>
            <View className={'goodsClassifyOne-icon'} onClick={() => setPopup(false)}>
              <IconMobile value={'paixusort-sheng'} />
            </View>
          </View>

          <ScrollWrap>
            <ScrollView>
              <View className={'goodsClassifyOne-tipWrapItemWrap'}>
                {navList.map((item: any, index: number) => {
                  return (
                    <View
                      class={[
                        'goodsClassifyOne-tipWrapItem'
                        // activeKey === `${item.goodsClassCode}` ? ' active' : ''
                      ].join('')}
                      key={index}
                      onClick={() => chooseItem(item.goodsClassCode, index)}
                      style={{
                        color: activeKey === `${item.goodsClassCode}` ? selectFontColor : '#000',
                        borderColor: activeKey === `${item.goodsClassCode}` ? selectFontColor : '#000'
                      }}
                    >
                      {item.goodsClassName}
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </ScrollWrap>
        </View>
      ) : null}
    </View>
  );
};

export const ClassifyOneHeader = memo(ClassifyOneHeaderJsx);
