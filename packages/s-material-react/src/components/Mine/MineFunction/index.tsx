import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';

const MineFunctionInitial = {
  columnList: [],
  paddingBottom: 0,
  paddingTop: 0
};

const MineFunctionJsx: React.FC<typeof MineFunctionInitial> = ({ paddingTop, paddingBottom, columnList }) => {
  const { View, Text, IconMobile, Image } = useComponent();
  return (
    <View
      className={'mineFunction'}
      style={{
        paddingTop: paddingTop + 'px',
        paddingBottom: paddingBottom + 'px'
      }}
    >
      {columnList.map((item: any, idx: number) => {
        return (
          <View key={idx} className={'menuListItem'} onClick={() => navigatorHandler(item.link.value)}>
            <View className={'lPart'}>
              {/*<IconMobile value={item.icon} />*/}
              <Image src={item.imgUrl} className={'icon'} />
              <Text className={'label'}>{item.link.label}</Text>
            </View>
            <IconMobile value={'xiangyou1'} />
          </View>
        );
      })}
    </View>
  );
};

export const MineFunction = memo(MineFunctionJsx);
