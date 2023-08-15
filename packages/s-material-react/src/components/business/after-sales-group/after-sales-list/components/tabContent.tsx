import { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { ScrollWrap } from '@/common/scrollWrap';
import { useAfterSalesList } from 'qj-mobile-store';
import { Item } from './item';
import { NoData } from './noData';

const TabContentJsx = ({ item, refreshNum }: any) => {
  const { View, ScrollView, WrapLoading } = useComponent();
  const { afterSalesList, goAfterSalesDetail, loading, haseData } = useAfterSalesList(item, refreshNum);

  return (
    <WrapLoading loading={loading}>
      <View className={'tabContent'}>
        <ScrollWrap id={'tabContent'}>
          <ScrollView>
            {haseData ? (
              afterSalesList.map((blc: { refundCode: string }) => {
                return <Item data={blc} goAfterSalesDetail={goAfterSalesDetail.bind(null, blc.refundCode)} />;
              })
            ) : (
              <NoData />
            )}
          </ScrollView>
        </ScrollWrap>
      </View>
    </WrapLoading>
  );
};

export const TabContent = memo(TabContentJsx);
