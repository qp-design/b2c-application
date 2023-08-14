import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';
import { memo } from 'react';

interface Props {
  navList: Array<any>;
  activeKey: string;
  cell?: number;
}

export const ClassifyFloorCom: React.FC<Props> = ({ navList, activeKey, cell = 4 }) => {
  const { View, Text, Image } = useComponent();
  return (
    <>
      {navList.map((item: any) => (
        <View
          key={item.goodsClassCode}
          className={['content', activeKey === `${item.goodsClassCode}` ? ' active' : ''].join('')}
        >
          {(item?.childList || []).map((classifyItem: any) => {
            return (
              <View key={classifyItem.goodsClassCode} className={'classifyFloor'}>
                {classifyItem.goodsClassHide === '0' ? (
                  <View className={'titleWrap'}>
                    <Text className={'title'}>{classifyItem.goodsClassName}</Text>
                    <Text className={'line'}></Text>
                  </View>
                ) : (
                  ''
                )}
                <View
                  className={`container container_columns${cell}`}
                  style={{ marginTop: classifyItem.goodsClassHide === '0' ? '' : '20px' }}
                >
                  {(classifyItem?.childList || []).map(
                    ({ classtreeCode, goodsClassCode, goodsClassLogo, goodsClassName }: any) => {
                      return (
                        <View
                          onClick={() =>
                            navigatorHandler('goodList', {
                              classtreeCode: classtreeCode
                            })
                          }
                          className={'classifyFloorGoodsItem'}
                          key={goodsClassCode}
                        >
                          <Image src={goodsClassLogo} className={'logo'} />
                          <View className={'title'}>{goodsClassName}</View>
                        </View>
                      );
                    }
                  )}
                </View>
              </View>
            );
          })}
        </View>
      ))}
    </>
  );
};
export const ClassifyFloor = memo(ClassifyFloorCom);
