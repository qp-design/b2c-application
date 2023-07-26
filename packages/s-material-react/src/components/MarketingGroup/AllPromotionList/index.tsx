//@ts-nocheck
import React, { memo, useState } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { PromotionListItem, PromotionListTab } from './components';
import { useMarketingPromotion } from 'qj-mobile-store';
import { ScrollWrap } from '@/common/scrollWrap';
import { config } from './components/config';

const initialAllPromotionList = {
  activeColor: '',
  paddingTop: 0,
  paddingBottom: 0
};

const AllPromotionListJsx: React.FC<typeof initialAllPromotionList> = ({ activeColor, paddingTop, paddingBottom }) => {
  const [params, setParams] = useState<string>(config[0].val);
  const { list, getData } = useMarketingPromotion({ params });
  const { View, ScrollView } = useComponent();

  return (
    <View
      style={{
        padding: `${paddingTop}px 0 ${paddingBottom}px`
      }}
    >
      <PromotionListTab activeColor={activeColor} setParams={setParams} params={params} />
      <View>
        <ScrollWrap id={'listWrap'}>
          <ScrollView onScroll={() => getData()}>
            {list.map((item: any, index: number) => {
              return <PromotionListItem key={index} data={item} />;
            })}
          </ScrollView>
        </ScrollWrap>
      </View>
    </View>
  );
};

export const AllPromotionList = memo(AllPromotionListJsx);
