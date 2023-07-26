import { useComponent } from '@brushes/simulate-component';
import { navigatorHandler } from '@brushes/utils';
import { getContractNumbers } from 'qj-b2c-api';
import React, { useEffect, useState, memo } from 'react';

const MineOrderEntryJsxInitial = {
  title: '',
  columnList: []
};

const MineOrderEntryJsx: React.FC<typeof MineOrderEntryJsxInitial> = ({ title, columnList }) => {
  const { View, Text, Badge, Image } = useComponent();
  const [order, setOrder] = useState({} as any);

  useEffect(() => {
    (async () => {
      try {
        const res = await getContractNumbers();
        setOrder(res.dataObj);
      } catch (err) {}
    })();
  }, []);

  const jumpLink = (item: any, index: number) => {
    if (item.id === 4) {
      navigatorHandler('afterSalesList');
      return;
    }
    navigatorHandler('orderlist', {
      indexId: index + 1
    });
  };

  return (
    <View className={'mineOrderEntry'}>
      <View className={'title'}>
        <View className={'name'}>{title}</View>
        <View className={'more'} onClick={() => navigatorHandler('orderlist')}>
          查看全部
        </View>
      </View>
      <View className={'content'}>
        {columnList.map((item: any, index: number) => {
          return (
            <View
              onClick={jumpLink.bind(null, item, index)}
              className={'contentItem'}
              key={index}
              style={{ display: item.show ? 'block' : 'none' }}
            >
              <Badge
                {...(order[item.code] > 0 ? { content: order[item.code] } : {})}
                color={'#000'}
                style={{ color: '#fff', fontSize: 12 }}
              >
                <Image src={item.imgUrl} className={'icon'} />
              </Badge>
              <Text className={'subTitle'}>{item.label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export const MineOrderEntry = memo(MineOrderEntryJsx);
