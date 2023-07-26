import { useComponent } from '@brushes/simulate-component';
import { QjMobileIcon } from '@/common/icon';
import { useEffect, useState } from 'react';

export const Rate = ({ onChange, readOnly = false, size = 22, count }: any) => {
  const { View } = useComponent();
  const [starList, setStarList] = useState([
    {
      icon: 'star-fill'
    },
    {
      icon: 'star'
    },
    {
      icon: 'star'
    },
    {
      icon: 'star'
    },
    {
      icon: 'star'
    }
  ]);

  useEffect(() => {
    if (count) {
      const arr = [...starList];
      for (let i = 0; i < arr.length; i++) {
        if (i > count - 1) {
          arr[i]['icon'] = 'star';
        } else {
          arr[i]['icon'] = 'star-fill';
        }
      }
      setStarList(arr);
    }
  }, []);

  const handleStar = (index: number) => {
    if (readOnly) return;
    for (let i = 0; i < starList.length; i++) {
      if (i > index) {
        starList[i].icon = 'star';
      } else {
        starList[i].icon = 'star-fill';
      }
    }
    setStarList([...starList]);
    onChange(index + 1);
  };
  return (
    <View>
      {starList.map((item, index) => (
        <QjMobileIcon
          key={index}
          onClick={handleStar.bind(null, index)}
          value={item.icon}
          style={{
            color: '#EC6C5C',
            fontSize: size
          }}
        />
      ))}
    </View>
  );
};
