import React from 'react';
import { useComponent } from '@brushes/simulate-component';
import dayjs from 'dayjs';

interface PromotionListItemType {
  pbName: string;
  promotionName: string;
  pmPromotionDiscountList: Array<any>;
  promotionBegintime: number;
  promotionEndtime: number;
}

export const PromotionListItem: React.FC<any> = ({ data }: { data: PromotionListItemType }) => {
  const { View } = useComponent();

  const { pbName, promotionName, pmPromotionDiscountList, promotionBegintime, promotionEndtime } = data;

  return (
    <View className={'promotionItem'}>
      <View className={'lPart'}>
        <View className={'round'}></View>
        <View className={'tagBg'}>
          <View className={'txt'}>官方{pbName}</View>
        </View>
        <View className={'rule'}>{pmPromotionDiscountList.at(-1).discName}</View>
        <View className={'title'}>{promotionName}</View>
        <View className={'time'}>
          {dayjs(promotionBegintime).format('YYYY-MM-DD')} ~ {dayjs(promotionEndtime).format('YYYY-MM-DD')}
        </View>
      </View>
      <View className={'rPart'}>
        <View className={'sideBorder'}></View>
      </View>
    </View>
  );
};
