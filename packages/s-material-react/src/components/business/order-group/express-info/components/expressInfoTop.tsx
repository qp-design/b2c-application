import { useComponent } from '@brushes/simulate-component';
import { get } from 'lodash-es';
import type { FC } from 'react';


export const ExpressInfoTop: FC<any> = ({defaultValue, info, detail, stateObj }) => {
  const { View } = useComponent();
  const bg = get(info, 'packageList[0].contractGoodsList[0].dataPic', defaultValue.dataPic);
  const num = get(info, 'packageList.length', defaultValue.count);
  const company = get(info, 'packageList[0].expressName', defaultValue.expressName);
  const expressNO = get(info, 'packageList[0].packageBillno', defaultValue.packageBillno);
  const state = get(detail, 'state', defaultValue.result) || '-1';

  return (
    <View className="expressInfoTop">
      <View
        className="goodsImg"
        style={{
          backgroundImage: `url(${bg})`
        }}
      >
        <View className="tip">共 {num} 件商品</View>
      </View>
      <View className="list">
        <View className="listItem">物流状态：{state ? stateObj[state] : '暂时无法获取物流状态'}</View>
        <View className="listItem">快递公司：{company}</View>
        <View className="listItem">快递单号：{expressNO}</View>
      </View>
    </View>
  );
};
