import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { QjMobileIcon } from '@/common/icon';
import { iconConfig } from './iconConfig';
import { stateConfig } from './stateConfig';

const ItemJsx: React.FC<any> = ({ data, goAfterSalesDetail }) => {
  const { View, Image } = useComponent();

  return (
    <View className={'afterSalesListItem'} onClick={goAfterSalesDetail.bind(null, data.refundCode)}>
      <View className={'title'}>
        <View className={'lPart'}>服务单号: {data.refundCode}</View>
        <View className={'rPart'}>
          <QjMobileIcon
            style={{
              color: iconConfig[data.refundType]?.color,
              fontSize: 12
            }}
            value={iconConfig[data.refundType]?.icon}
          />
          <View className={'txt'}>{iconConfig[data.refundType].label}</View>
        </View>
      </View>

      <View className={'goodsInfo'}>
        <View className={'lPart'}>
          <Image src={data.ocRefundGoodsList[0].dataPic} className={'img'} />
        </View>
        <View className={'rPart'}>
          <View className={'goodsName'}>{data.ocRefundGoodsList[0].goodsName}</View>
          <View className={'count'}>申请数量: {data.ocRefundGoodsList[0].refundGoodsNum}</View>
        </View>
      </View>

      <View className={'tip'}>
        <View class={'lPart'}>{stateConfig[data.refundType][data.dataState]}</View>
        <QjMobileIcon style={{ fontSize: 12, color: '#A5A5A5' }} value={'xiangyou1'} />
      </View>
    </View>
  );
};

export const Item = memo(ItemJsx);
