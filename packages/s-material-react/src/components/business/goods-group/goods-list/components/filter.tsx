import { useState, Dispatch } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { QjMobileIcon } from '@/common/icon';
import { FilterType } from '../index';

const dataConfig = [
  {
    name: '默认',
    sortField: 'pricesetNprice'
  },
  {
    name: '新品',
    sortField: ''
  },
  {
    name: '销量',
    sortField: 'goodsSalesvolume',
    order: 'asc'
  },
  {
    name: '价格',
    sortField: 'pricesetNprice',
    order: 'asc'
  }
];
export const Filter = ({ setParams, activeColor }: { setParams: Dispatch<FilterType>; activeColor: string }) => {
  const { View } = useComponent();
  const [active, setActive] = useState(0);
  const [config, setConfig] = useState(dataConfig);
  const handleSort = (sortField: string, index: number, order: undefined | string) => {
    setActive(index);
    if (order) {
      setConfig((prevState) => {
        prevState[index].order = order === 'asc' ? 'desc' : 'asc';
        return [...prevState];
      });
    }
    setParams({
      sortField,
      order
    });
  };

  return (
    <View className={'sortWrap'}>
      {config.map(({ order, sortField, name }, index) => (
        <View
          key={index}
          className={`sortItem ${active === index ? 'active' : ''}`}
          onClick={() => handleSort(sortField, index, order)}
          style={{ color: active === index ? activeColor : '' }}
        >
          {name}
          {order && (
            <View className={'orderIcons'}>
              {/* <QjMobileIcon
              style={{ color: active === index ? activeColor : '#444', fontSize: 20 }}
              value={order === 'desc' ? 'jiangxu' : 'shengxu'}
            /> */}
              <QjMobileIcon
                style={{
                  color: active === index && order !== 'desc' ? activeColor : '#444',
                  fontSize: 14,
                  width: 8,
                  height: 8
                }}
                value={'shengxu1'}
              />
              <QjMobileIcon
                style={{
                  color: active === index && order === 'desc' ? activeColor : '#444',
                  fontSize: 14,
                  width: 8,
                  height: 8
                }}
                value={'jiangxu1'}
              />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};
