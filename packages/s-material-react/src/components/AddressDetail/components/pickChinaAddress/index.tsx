import { useState } from 'react';
import { useComponent, antdMobile } from '@brushes/simulate-component';
import { china } from './china';

export const PickChinaAddress = ({ form, handleArea }: any) => {
  const { View } = useComponent();
  const { CascadePicker } = antdMobile;
  const area = form.getFieldValue('area');

  const [visible, setVisible] = useState(false);

  const handleData = (val: any) => {
    handleArea('h5', handle(val));
  };

  const handle = (code: any) => {
    const result = {
      provinceName: '',
      provinceCode: code[0],
      cityName: '',
      cityCode: code[1],
      areaName: '',
      areaCode: code[2]
    };

    const chinaIndex = {
      pIndex: 0,
      cIndex: 0
    };
    for (let i = 0; i < china.length; i++) {
      if (china[i].value === code[0]) {
        result.provinceName = china[i].label;
        chinaIndex.pIndex = i;
        break;
      }
    }

    for (let i = 0; i < china[chinaIndex.pIndex].children.length; i++) {
      if (china[chinaIndex.pIndex].children[i].value === code[1]) {
        result.cityName = china[chinaIndex.pIndex].children[i].label;
        chinaIndex.cIndex = i;
        break;
      }
    }
    //
    for (let i = 0; i < china[chinaIndex.pIndex].children[chinaIndex.cIndex].children.length; i++) {
      if (china[chinaIndex.pIndex].children[chinaIndex.cIndex].children[i].value === code[2]) {
        result.areaName = china[chinaIndex.pIndex].children[chinaIndex.cIndex].children[i].label;
        break;
      }
    }

    return result;
  };

  return (
    <View>
      <View className="txt" onClick={() => setVisible(true)}>
        {!area?.provinceName ? '请选择所在地区' : `${area.provinceName}—${area.cityName}-${area.areaName}`}
      </View>
      <CascadePicker onConfirm={handleData} options={china} visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
};
