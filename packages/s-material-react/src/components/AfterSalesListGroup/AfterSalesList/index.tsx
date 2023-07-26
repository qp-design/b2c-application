//@ts-nocheck
import { memo } from 'react';
import { useComponent } from '@brushes/simulate-component';
import { afterSalesTabConfig } from 'qj-mobile-store';
import { TabContent } from './components';

const AfterSalesListJsx = ({ refreshNum = 0 }: any) => {
  const { View, Tabs } = useComponent();

  return (
    <View className={'afterSalesList'}>
      <Tabs
        defaultIndex={0}
        tabs={afterSalesTabConfig}
        render={(item: any) => <TabContent item={item} refreshNum={refreshNum} />}
      />
    </View>
  );
};

export const AfterSalesList = memo(AfterSalesListJsx);
