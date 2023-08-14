import { useComponent } from '@brushes/simulate-component';
import React, { memo } from 'react';
import { config } from './config';

const PromotionListTabJsx = ({
  activeColor,
  setParams,
  params
}: {
  activeColor: string;
  setParams: React.Dispatch<string>;
  params: string;
}) => {
  const { View } = useComponent();

  return (
    <View className={'promotionListTab'}>
      {config.map((item, index) => {
        return (
          <View
            className={'promotionListTabItem'}
            key={index}
            onClick={() => setParams(item.val)}
            style={{
              color: item.val === params ? activeColor : '#000'
            }}
          >
            {item.label}
          </View>
        );
      })}
    </View>
  );
};

export const PromotionListTab = memo(PromotionListTabJsx);
