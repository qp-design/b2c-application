import React, { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { afterSalesTabConfig } from 'qj-mobile-store';
import { TabContent } from './components';

const initialAfterSalesList = {
  refreshNum: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}

const AfterSalesListJsx: React.FC<typeof initialAfterSalesList> = (
  {
    refreshNum,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  }: any) => {
  const { View, Tabs } = useComponent();

  return (
    <View
      className={'afterSalesList'}
      style={{
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight
      }}
    >
      <Tabs
        defaultIndex={0}
        tabs={afterSalesTabConfig}
        render={(item: any) => <TabContent item={item} refreshNum={refreshNum} />}
      />
    </View>
  );
};

export const AfterSalesList = memo(AfterSalesListJsx);
